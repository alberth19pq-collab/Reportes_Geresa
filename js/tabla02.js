// ============================================
// tabla02.js - COMPLETO CON SOPORTE NO_TRANS Y METALES PESADOS
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================
let permisosUsuario = {};
let estrategiaActual = null;
let workbookOriginal = null;
let workbookModificado = null;
let datosCargados = false;
let ultimosDatos = null;

const ESTRATEGIAS_EN_DESARROLLO = ['MENTAL'];

const CONFIG_DESARROLLO = {
    MENTAL: {
        icono: 'bi-brain',
        titulo: 'Salud Mental',
        desc: 'El módulo de Salud Mental está siendo construido.',
        chips: ['Tamizaje', 'Ansiedad', 'Depresión', 'Conducta', 'Adicciones'],
        progreso: '42%',
        etiqueta: 'En ejecución'
    }
};

// 6 

// ============================================
// FUNCIONES DE SIDEBAR
// ============================================
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarBackdrop').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarBackdrop').classList.remove('active');
    document.body.style.overflow = '';
}

function toggleSidebarDesktop() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    const isHidden = content.classList.contains('sidebar-hidden');

    if (isHidden) {
        content.classList.remove('sidebar-hidden');
        sidebar.classList.remove('collapsed');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="bi bi-layout-sidebar"></i><span class="btn-text">Filtros</span>';
            toggleBtn.classList.remove('active');
        }
    } else {
        content.classList.add('sidebar-hidden');
        sidebar.classList.add('collapsed');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="bi bi-layout-sidebar"></i><span class="btn-text">Filtros</span><span class="btn-badge">●</span>';
            toggleBtn.classList.add('active');
        }
    }
    if (window.innerWidth <= 768) closeSidebar();
}

// ============================================
// FUNCIONES DE REPORTES
// ============================================
function mostrarReportes() {
    const container = document.getElementById('reportesContainer');
    const toggleBtn = document.getElementById('toggleReportesBtn');
    if (!container) return;

    container.classList.remove('collapsed');
    container.style.maxHeight = '';
    container.style.visibility = 'visible';
    container.style.opacity = '1';

    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="bi bi-eye-slash"></i><span class="btn-text">Ocultar reportes</span>';
        toggleBtn.classList.remove('active');
    }
}

function ocultarReportes() {
    const container = document.getElementById('reportesContainer');
    const toggleBtn = document.getElementById('toggleReportesBtn');
    if (!container) return;

    container.classList.add('collapsed');
    container.style.maxHeight = '0';
    container.style.visibility = 'hidden';
    container.style.opacity = '0';

    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="bi bi-eye"></i><span class="btn-text">Mostrar reportes</span>';
        toggleBtn.classList.add('active');
    }
    
    const toolbarRight = document.querySelector('.toolbar-right');
    if (toolbarRight) {
        toolbarRight.style.display = 'flex';
        toolbarRight.style.visibility = 'visible';
        toolbarRight.style.opacity = '1';
    }
}

function toggleReportesPanel() {
    const container = document.getElementById('reportesContainer');
    const toggleBtn = document.getElementById('toggleReportesBtn');
    if (!container) return;

    if (container.classList.contains('collapsed')) {
        mostrarReportes();
    } else {
        ocultarReportes();
    }
}

// ============================================
// UTILIDADES
// ============================================
function val(id) {
    const v = document.getElementById(id)?.value;
    return (v === '' || v === null) ? null : v;
}

function textoSeleccionado(id) {
    const el = document.getElementById(id);
    if (!el || el.selectedIndex < 0) return '';
    return (el.options[el.selectedIndex]?.text || '').trim();
}

function vaciarSelectSinTexto(id) {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = '<option value=""></option>';
    sel.value = '';
}

function vaciarYDeshabilitar(id) {
    const sel = document.getElementById(id);
    if (!sel) return;
    vaciarSelectSinTexto(id);
    sel.disabled = true;
    delete sel.dataset.bloqueado;
}

function bloquearSelect(id, value, label) {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = '';
    const opt = document.createElement('option');
    opt.value = value ?? '';
    opt.textContent = label ?? value ?? '';
    sel.appendChild(opt);
    sel.value = value ?? '';
    sel.disabled = true;
    sel.dataset.bloqueado = '1';
}

async function cargarSelect(id, tipo, extra = {}) {
    try {
        const url = 'api/api_catalogos.php?' + new URLSearchParams({ tipo, ...extra });
        console.log('📡 Cargando catálogo:', url);
        const res = await fetch(url);
        const json = await res.json();
        console.log('📦 Respuesta catálogo:', json);
        const rows = Array.isArray(json.data) ? json.data : [];
        const sel = document.getElementById(id);
        if (!sel) return false;
        sel.innerHTML = `<option value="">Todos</option>`;
        rows.forEach(r => {
            const opt = document.createElement('option');
            opt.value = String(r.CODIGO ?? '').trim();
            opt.textContent = String(r.NOMBRE ?? '').trim();
            sel.appendChild(opt);
        });
        sel.disabled = false;
        return true;
    } catch (e) {
        console.error('Error cargando select:', e);
        return false;
    }
}

// ============================================
// FILTROS GEOGRÁFICOS
// ============================================
async function onProvinciaChange() {
    if (document.getElementById('provincia').dataset.bloqueado === '1') return;
    const provincia = textoSeleccionado('provincia');
    const distrito = document.getElementById('distrito');
    if (val('provincia')) {
        vaciarYDeshabilitar('ue');
        vaciarYDeshabilitar('red');
        vaciarYDeshabilitar('microred');
        vaciarYDeshabilitar('eess');
    } else {
        if (!document.getElementById('ue').dataset.bloqueado) document.getElementById('ue').disabled = false;
    }
    distrito.innerHTML = '<option value=""></option>';
    distrito.disabled = true;
    if (!provincia) return;
    await cargarSelect('distrito', 'DISTRITO', { provincia });
    distrito.disabled = false;
}

async function onDistritoChange() { }

async function onUEChange() {
    if (document.getElementById('ue').dataset.bloqueado === '1') return;
    const ue = textoSeleccionado('ue');
    if (val('ue')) {
        vaciarYDeshabilitar('provincia');
        vaciarYDeshabilitar('distrito');
    }
    vaciarYDeshabilitar('red');
    vaciarYDeshabilitar('microred');
    vaciarYDeshabilitar('eess');
    if (!ue) return;
    await cargarSelect('red', 'RED', { ue });
    document.getElementById('red').disabled = false;
}

async function onRedChange() {
    if (document.getElementById('red').dataset.bloqueado === '1') return;
    const ue = textoSeleccionado('ue'), red = textoSeleccionado('red');
    vaciarYDeshabilitar('microred');
    vaciarYDeshabilitar('eess');
    if (!ue || !red) return;
    await cargarSelect('microred', 'MICRORED', { ue, red });
    document.getElementById('microred').disabled = false;
}

async function onMicroredChange() {
    if (document.getElementById('microred').dataset.bloqueado === '1') return;
    const ue = textoSeleccionado('ue'), red = textoSeleccionado('red'), microred = textoSeleccionado('microred');
    vaciarYDeshabilitar('eess');
    if (!ue || !red || !microred) return;
    await cargarSelect('eess', 'EESS', { ue, red, microred });
    document.getElementById('eess').disabled = false;
}

// ============================================
// ESTRATEGIA - FUNCIONES DE UI
// ============================================
// ============================================
// ACTUALIZAR DOT DE ESTRATEGIA - VERSIÓN CON CLASES CSS
// ============================================
function actualizarDotEstrategia(v) {
    const dot = document.getElementById('estrategiaDot');
    dot.className = 'estrategia-dot';
    if (v) {
        const claseMap = {
            'OCULAR': 'active-ocular',
            'BUCAL': 'active-bucal', 
            'METALES': 'active-metales',
            'METALES_PESADOS': 'active-metales', // ✅ AGREGADO
            'NO_TRANS': 'active-no-trans',
            'MENTAL': 'active-mental'
        };
        if (claseMap[v]) dot.classList.add(claseMap[v]);
    }
}


function construirPanelDesarrollo(e) {
    const c = CONFIG_DESARROLLO[e];
    if (!c) return '';
    const chips = c.chips.map(ch => `<span class="dev-chip"><i class="bi bi-clock-history"></i>${ch}</span>`).join('');
    return `<div class="dev-overlay ${c.clase}">
        <div class="dev-icon-wrap"><i class="bi ${c.icono}"></i></div>
        <div class="dev-pill"><span class="dev-pill-dot"></span>${c.etiqueta}</div>
        <div class="dev-title">${c.titulo}</div>
        <div class="dev-desc">${c.desc}</div>
        <div class="dev-progress-wrap"><div class="dev-progress-bar" style="width:${c.progreso}"></div></div>
        <div class="dev-progress-label">Desarrollo completado: ${c.progreso}</div>
        <div class="dev-chips">${chips}</div>
    </div>`;
}

// ============================================
// RENDERIZAR LISTA DE TABLAS CON PESTAÑAS
// ============================================
// ============================================
// RENDERIZAR LISTA DE TABLAS CON PESTAÑAS
// ============================================
// ============================================
// RENDERIZAR LISTA DE TABLAS - VERSIÓN SIMPLIFICADA (SOLO PESTAÑAS)
// ============================================
// ============================================
// RENDERIZAR LISTA DE TABLAS - VERSIÓN LIMPIA Y COMPACTA
// ============================================
function renderizarListaTablas(tablas) {
    const cont = document.getElementById('listaTablas');
    if (!cont) return;

    if (!tablas || !tablas.length) {
        cont.innerHTML = '<div style="padding:8px;text-align:center;color:#94a3b8;font-size:0.7rem;">No hay reportes disponibles</div>';
        actualizarContadorReportes();
        actualizarBadgeReportes(0);
        return;
    }

    // 1. CLASIFICAR POR TIPO (PG1, PG2, PA, PS)
    const grupos = {
        'PG1': { icono: 'bi-file-earmark-text', label: 'PG1', codigos: [] },
        'PG2': { icono: 'bi-file-earmark-text', label: 'PG2', codigos: [] },
        'PA': { icono: 'bi-file-earmark-text', label: 'PA', codigos: [] },
        'PS': { icono: 'bi-file-earmark-text', label: 'PS', codigos: [] },
        'INDICADORES': { icono: 'bi-file-earmark-text', label: 'INDICADORES', codigos: [] }
    };

    // Mapeo de códigos a grupos
    const mapaGrupos = {
        'PG1': ['CURSO_VIDA_GENERAL', 'PREVALENCIA_CARIES', 'AT_PREVENTIVA', 'AT_RECUPERATIVA', 
                'AT_ESPECIALIZADA', 'AT_ESPECIALIZADA_02', 'AT_ESPECIALIZADA_03', 'PREVENCION_BUCAL',
                'ATENDIDOS_ATENCIONES', 'AT_INTERCONSULTA', 'REHABILITACION_PROTESICA', 
                'INACTIVACION_CARIES', 'TELESALUD'],
        'PG2': ['PG2_ODONTOLOGIA', 'PG2_ODONTOLOGIA_N', 'PG2_PERS_SANA', 'PG2_PERS_SANA_N',
                'PG2_EVA_ORAL', 'PG2_EVA_ORAL_N', 'PG2_PLAN_TRAT', 'PG2_PROTESIS_DENT',
                'PG2_ATENC_ODONT_GST', 'PG2_SESION_PROCEDIMIENTO', 'PG2_ATENC_ATEND', 
                'PG2_ATENC_TELESALUD'],
        'PA': ['PA_AT_PREVENTIVA', 'PA_AT_RECUPERATIVA', 'PA_AT_ESPECIALIZADA'],
        'PS': ['PS_AT_PREVENTIVA', 'PS_AT_RECUPERATIVA', 'PS_AT_ESPECIALIZADA'],
        'INDICADORES': ['INDICADORES_PPR1', 'INDICADORES_PPR2'] 
    };

    // Asignar cada tabla a su grupo
    tablas.forEach(t => {
        const codigo = t.CODIGO;
        for (const [grupo, codigos] of Object.entries(mapaGrupos)) {
            if (codigos.includes(codigo)) {
                grupos[grupo].codigos.push(codigo);
                break;
            }
        }
    });

    // 2. CONSTRUIR EL HTML - SOLO PESTAÑAS COMPACTAS
    let tabsHtml = `<div class="report-tabs-container">`;
    
    // Navegación de pestañas simplificada
    tabsHtml += `<div class="report-tabs-nav" id="reportTabsNav">`;
    
    const totalReportes = tablas.length;
    tabsHtml += `
        <button class="report-tab-btn active" data-tab="TODOS" onclick="switchReportTab('TODOS')">
            <i class="bi bi-grid-fill"></i>
            Todos
            <span class="tab-badge">${totalReportes}</span>
        </button>
    `;
    
    const orden = ['PG1', 'PG2', 'PA', 'PS','INDICADORES'];
    const iconos = {
        'PG1': 'bi-file-earmark-text',
        'PG2': 'bi-file-earmark-text',
        'PA': 'bi-file-earmark-text',
        'PS': 'bi-file-earmark-text',
        'INDICADORES': 'bi-file-earmark-text'
    };
    
    orden.forEach(key => {
        const grupo = grupos[key];
        if (grupo.codigos.length === 0) return;
        
        tabsHtml += `
            <button class="report-tab-btn" data-tab="${key}" onclick="switchReportTab('${key}')">
                <i class="bi ${iconos[key]}"></i>
                ${key}
                <span class="tab-badge">${grupo.codigos.length}</span>
            </button>
        `;
    });
    
    tabsHtml += `</div>`;
    
    // Contenido oculto (checkboxes invisibles pero seleccionados)
    tabsHtml += `<div class="report-tab-content" style="display:none;">`;
    
    // Pestaña "TODOS" (contiene TODOS los checkboxes ocultos)
    tabsHtml += `
        <div class="report-tab-pane active" id="tabPane-TODOS">
            <div class="report-list professional-list">
    `;
    tablas.sort((a, b) => a.NOMBRE.localeCompare(b.NOMBRE));
    tablas.forEach(t => {
        tabsHtml += `
            <label class="report-item" style="display:none;">
                <input type="checkbox" class="tabla-check" value="${t.CODIGO}" checked>
                <span class="report-text">${t.NOMBRE}</span>
            </label>
        `;
    });
    tabsHtml += `
            </div>
        </div>
    `;
    
    // Pestañas PG1, PG2, PA, PS (checkboxes ocultos)
    orden.forEach(key => {
        const grupo = grupos[key];
        if (grupo.codigos.length === 0) return;
        
        tabsHtml += `
            <div class="report-tab-pane" id="tabPane-${key}">
                <div class="report-list professional-list">
        `;
        
        // Obtener los nombres completos de los reportes de este grupo
        const reportesGrupo = tablas.filter(t => mapaGrupos[key].includes(t.CODIGO));
        reportesGrupo.sort((a, b) => a.NOMBRE.localeCompare(b.NOMBRE));
        reportesGrupo.forEach(t => {
            tabsHtml += `
                <label class="report-item" style="display:none;">
                    <input type="checkbox" class="tabla-check" value="${t.CODIGO}" checked>
                    <span class="report-text">${t.NOMBRE}</span>
                </label>
            `;
        });
        
        tabsHtml += `
                </div>
            </div>
        `;
    });
    
    tabsHtml += `</div></div>`;
    
    cont.innerHTML = tabsHtml;
    
    // Actualizar contadores
    const totalCheckboxes = document.querySelectorAll('.tabla-check').length;
    actualizarContadorReportes();
    actualizarBadgeReportes(totalCheckboxes);
    mostrarReportes();
}

function actualizarContadorReportes() {
    const countSpan = document.getElementById('reportCount');
    // Solo contar los checkboxes que están en la pestaña activa
    const activePane = document.querySelector('.report-tab-pane.active');
    let checkboxes = [];
    if (activePane) {
        checkboxes = activePane.querySelectorAll('.tabla-check');
    } else {
        checkboxes = document.querySelectorAll('.tabla-check');
    }
    if (countSpan) {
        countSpan.textContent = `(${checkboxes.length})`;
    }
    actualizarBadgeReportes(checkboxes.length);
}

function marcarTodo() {
    document.querySelectorAll('.tabla-check').forEach(c => c.checked = true);
}

function desmarcarTodo() {
    document.querySelectorAll('.tabla-check').forEach(c => c.checked = false);
}

function getTablas() {
    // Obtener los checkboxes de la pestaña activa
    const activePane = document.getElementById(`tabPane-${grupoActual}`);
    if (activePane) {
        return Array.from(activePane.querySelectorAll('.tabla-check:checked'))
            .map(x => x.value);
    }
    // Fallback: devolver todos los checkboxes marcados
    return Array.from(document.querySelectorAll('.tabla-check:checked'))
        .map(x => x.value);
}
// ============================================
// FUNCIONES DE EXCEL
// ============================================

// ============================================
// CARGAR PLANTILLA ORIGINAL - VERSIÓN UNIFICADA
// ============================================
async function cargarPlantillaOriginal() {
    const container = document.getElementById('resultado');
    
    const config = getConfigEstrategia(estrategiaActual);
    if (!config) {
        container.innerHTML = '<div class="empty-state"><p>Selecciona una estrategia primero</p></div>';
        return;
    }
    
    const rutaPlantilla = config.plantilla;
    
    if (workbookOriginal) {
        container.innerHTML = `
            <div class="empty-state" style="border-color: #10b981;">
                <div class="empty-icon" style="color:#10b981;"><i class="bi bi-check-circle-fill"></i></div>
                <p style="color:#065f46;font-weight:600;">✅ Plantilla Excel cargada correctamente</p>
                <small style="color:#64748b;">Selecciona los reportes y pulsa <strong>Cargar Datos</strong> para actualizar</small>
                <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                    <span class="badge" style="background:#10b981;color:white;padding:6px 16px;border-radius:20px;">
                        <i class="bi bi-file-earmark-excel"></i> Plantilla lista
                    </span>
                    <span class="badge" style="background:#f59e0b;color:white;padding:6px 16px;border-radius:20px;">
                        <i class="bi bi-database"></i> Esperando datos
                    </span>
                </div>
            </div>
        `;
        actualizarBotonesExportacion(false);
        return;
    }

    container.innerHTML = '<div class="loading-state"><div class="spinner-border" role="status"></div><p>Cargando plantilla...</p></div>';

    try {
        const response = await fetch(rutaPlantilla, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('No se encontró el archivo: ' + rutaPlantilla);
        }

        const arrayBuffer = await response.arrayBuffer();

        workbookOriginal = XLSX.read(arrayBuffer, {
            type: 'array',
            cellStyles: true,
            cellNF: true,
            cellDates: false
        });
        workbookModificado = XLSX.read(arrayBuffer, {
            type: 'array',
            cellStyles: true,
            cellNF: true,
            cellDates: false
        });

        limpiarEstilosFuente(workbookOriginal);
        limpiarEstilosFuente(workbookModificado);

        console.log(`✅ Plantilla cargada: ${rutaPlantilla}`);
        console.log('📊 Hojas disponibles:', workbookOriginal.SheetNames);

        container.innerHTML = `
            <div class="empty-state" style="border-color: #10b981;">
                <div class="empty-icon" style="color:#10b981;"><i class="bi bi-check-circle-fill"></i></div>
                <p style="color:#065f46;font-weight:600;">✅ Plantilla Excel cargada correctamente</p>
                <small style="color:#64748b;">Selecciona los reportes y pulsa <strong>Cargar Datos</strong> para actualizar</small>
                <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                    <span class="badge" style="background:#10b981;color:white;padding:6px 16px;border-radius:20px;">
                        <i class="bi bi-file-earmark-excel"></i> Plantilla lista
                    </span>
                    <span class="badge" style="background:#f59e0b;color:white;padding:6px 16px;border-radius:20px;">
                        <i class="bi bi-database"></i> Esperando datos
                    </span>
                </div>
            </div>
        `;
        actualizarBotonesExportacion(false);

    } catch (error) {
        console.error('❌ Error cargando plantilla:', error);
        container.innerHTML =
            '<div class="empty-state" style="color:#dc2626;">' +
            '<i class="bi bi-exclamation-triangle" style="font-size:2rem;"></i>' +
            '<p>' + error.message + '</p>' +
            '<small>Verifique que el archivo existe en la ruta especificada</small>' +
            '</div>';
        actualizarBotonesExportacion(false);
    }
}

// ============================================
// LIMPIAR ESTILOS DE FUENTE DEL WORKBOOK
// ============================================
function limpiarEstilosFuente(wb) {
    wb.SheetNames.forEach(nombreHoja => {
        const hoja = wb.Sheets[nombreHoja];
        Object.keys(hoja).forEach(ref => {
            if (ref.startsWith('!')) return;
            const celda = hoja[ref];
            if (celda && celda.s) {
                delete celda.s.font;
                delete celda.s.fill;
                delete celda.s.fgColor;
            }
        });
    });
}

// ============================================
// RENDERIZAR PLANTILLA - VERSIÓN CORREGIDA
// ============================================
function renderizarPlantilla(workbook) {
    const container = document.getElementById('resultado');

    if (!workbook || !workbook.SheetNames || workbook.SheetNames.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="bi bi-exclamation-triangle"></i><p>No hay datos para mostrar</p></div>';
        return;
    }

    const hoja = workbook.Sheets[workbook.SheetNames[0]];

    if (!hoja || !hoja['!ref']) {
        container.innerHTML = '<div class="empty-state"><i class="bi bi-exclamation-triangle"></i><p>La hoja está vacía</p></div>';
        return;
    }

    // ============================================================
    // 🔥 FORZAR QUE EL WORKBOOK SE RECONSTRUYA CON LOS DATOS
    // ============================================================
    // IMPORTANTE: Re-escribir el workbook para asegurar que los datos
    // numéricos se rendericen correctamente en el HTML
    const wbout = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
        bookSST: false,
        cellStyles: false
    });
    
    const workbookTemp = XLSX.read(wbout, {
        type: 'array',
        cellStyles: false,
        cellNF: false,
        cellDates: false,
        raw: true
    });
    
    const hojaTemp = workbookTemp.Sheets[workbookTemp.SheetNames[0]];

    // 1. CONVERTIR A HTML
    let htmlContent = XLSX.utils.sheet_to_html(hojaTemp, {
        id: 'excel-table',
        editable: false,
        header: 1
    });

    // 2. LIMPIAR ETIQUETAS
    htmlContent = htmlContent.replace(/<html[^>]*>/, '').replace(/<\/html>/, '');
    htmlContent = htmlContent.replace(/<body[^>]*>/, '').replace(/<\/body>/, '');
    htmlContent = htmlContent.replace(/<head>.*?<\/head>/, '');

    // 3. ELIMINAR FILAS CON "1" Y FILAS "Total" VACÍAS
    let lines = htmlContent.split('\n');
    let nuevasLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<tr>') && lines[i + 1] && lines[i + 1].includes('<td') && lines[i + 1].includes('1</td>')) {
            i = i + 2;
            while (i < lines.length && !lines[i].includes('</tr>')) {
                i++;
            }
            continue;
        }
        
        if (line.includes('Total</td>') && lines[i + 1] && lines[i + 1].includes('</tr>')) {
            let hasData = false;
            let tempIndex = i;
            while (tempIndex < lines.length && !lines[tempIndex].includes('</tr>')) {
                if (lines[tempIndex].includes('<td') && !lines[tempIndex].includes('</td>') && 
                    !lines[tempIndex].includes('Total')) {
                    hasData = true;
                    break;
                }
                tempIndex++;
            }
            if (!hasData) {
                while (i < lines.length && !lines[i].includes('</tr>')) {
                    i++;
                }
                continue;
            }
        }
        
        nuevasLines.push(line);
    }
    
    htmlContent = nuevasLines.join('\n');

    // 4. LIMPIAR ESTILOS INLINE
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // 🔥 ELIMINAR EL TEXTO "1 id="excel-table">"
    htmlContent = htmlContent.replace(/1\s+id="excel-table">/g, '');
    htmlContent = htmlContent.replace(/1\s+id=['"]excel-table['"]>/g, '');
    htmlContent = htmlContent.replace(/^1\s+id="excel-table">/, '');

    tempDiv.querySelectorAll('style').forEach(s => s.remove());
    tempDiv.querySelectorAll('colgroup').forEach(cg => cg.remove());

    const tableElement = tempDiv.querySelector('table');
    if (tableElement) {
        const tableId = tableElement.id || 'excel-table';
        
        tableElement.removeAttribute('style');
        tableElement.removeAttribute('border');
        tableElement.removeAttribute('cellpadding');
        tableElement.removeAttribute('cellspacing');

        tableElement.querySelectorAll('td, th').forEach(cell => {
            cell.removeAttribute('style');
            cell.removeAttribute('width');
            cell.removeAttribute('height');
            cell.removeAttribute('class');
            cell.removeAttribute('bgcolor');
            cell.removeAttribute('align');
            cell.removeAttribute('valign');
            cell.removeAttribute('font');
        });

        tableElement.querySelectorAll('tr').forEach(row => {
            row.removeAttribute('style');
            row.removeAttribute('height');
            row.removeAttribute('class');
        });

        tableElement.querySelectorAll('font').forEach(font => {
            const parent = font.parentNode;
            while (font.firstChild) parent.insertBefore(font.firstChild, font);
            parent.removeChild(font);
        });

        tableElement.id = tableId;
        htmlContent = tempDiv.innerHTML;
    }

    // ============================================================
    // 🔥 FILTRAR FILAS SEGÚN EL GRUPO SELECCIONADO
    // ============================================================
    if (grupoActual !== 'TODOS') {
        const rango = getRangoPorGrupo(grupoActual);
        if (rango) {
            console.log(`🔍 Filtrando filas para ${grupoActual}: filas ${rango.inicio} a ${rango.fin}`);
            
            const tempDiv2 = document.createElement('div');
            tempDiv2.innerHTML = htmlContent;
            const tabla = tempDiv2.querySelector('table');
            
            if (tabla) {
                const filas = tabla.querySelectorAll('tr');
                const filasAEliminar = [];
                
                filas.forEach((fila, index) => {
                    const filaNumero = index + 1;
                    if (filaNumero < rango.inicio || filaNumero > rango.fin) {
                        filasAEliminar.push(fila);
                    }
                });
                
                filasAEliminar.forEach(fila => fila.remove());
                console.log(`✅ Eliminadas ${filasAEliminar.length} filas fuera del rango`);
                htmlContent = tempDiv2.innerHTML;
            }
        }
    }

    // 5. GENERAR COLGROUP CON ANCHOS SEGÚN ESTRATEGIA
    const columnas = getColumnasExcelEstrategia(estrategiaActual);
    let colgroupHtml = '';
    if (columnas && columnas.length > 0) {
        colgroupHtml = '<colgroup>';
        columnas.forEach(col => {
            const width = col.wch ? (col.wch * 6.5) + 'px' : '60px';
            colgroupHtml += `<col style="width:${width}; min-width:${width}; max-width:${width};">`;
        });
        colgroupHtml += '</colgroup>';
    }

    // 6. OBTENER ESTILOS SEGÚN ESTRATEGIA
    const estilosEstrategia = getEstilosEstrategia(estrategiaActual) || '';
    
    // 7. ESTILOS CSS
    const style = `
    <style>
    /* ===== ESTILOS BASE ===== */
    #excel-table * {
        font-family: 'Calibri', 'Segoe UI', Arial, sans-serif !important;
        font-size: inherit !important;
        color: inherit !important;
        font-style: normal !important;
        text-decoration: none !important;
    }
    #excel-table {
        border-collapse: collapse !important;
        width: 100% !important;
        table-layout: fixed !important;
        border: none !important;
    }

    /* POR DEFECTO: TODAS LAS CELDAS CON BORDE Y AZUL NEGRITA */
    #excel-table td, 
    #excel-table th {
        border: 1px solid #000000 !important;
        border-collapse: collapse !important;
        font-weight: bold !important;
        color: #0033cc !important;
    }

    /* CLASE PARA DATOS NUMÉRICOS (LETRA NORMAL, NEGRO) */
    #excel-table .dato-normal {
        font-weight: normal !important;
        color: #000000 !important;
    }

    /* ===== COLOR DE FONDO PARA CELDAS VACÍAS ===== */
    #excel-table td:empty,
    #excel-table th:empty,
    #excel-table td:has(> br:only-child),
    #excel-table td:has(> :only-child:empty) {
        background-color: #fff9e6 !important;
        border: 1px solid #f5e6c8 !important;
    }

    /* ===== COLOR DE FONDO PARA CELDAS CON DATOS ===== */
    #excel-table td:not(:empty),
    #excel-table th:not(:empty) {
        background-color: #ffffff !important;
    }

    /* ESTILOS ESPECÍFICOS DE LA ESTRATEGIA */
    ${estilosEstrategia}
    </style>
    `;    

    // 8. INSERTAR COLGROUP EN LA TABLA
    let tablaHtml = htmlContent;
    if (colgroupHtml) {
        tablaHtml = tablaHtml.replace(/<table/i, `<table>\n${colgroupHtml}`);
    }

    // 9. MOSTRAR
    container.innerHTML = style + `<div class="excel-container">${tablaHtml}</div>`;

    // 10. FORZAR EL ID DE LA TABLA Y APLICAR ESTILOS
    const tabla = container.querySelector('table');
    if (tabla) {
        tabla.id = 'excel-table';
        console.log('✅ ID de tabla forzado a "excel-table"');
        
        setTimeout(function() {
            const celdas = tabla.querySelectorAll('td, th');
            
            let celdasTexto = 0;
            let celdasNumeros = 0;
            
            celdas.forEach(celda => {
                const texto = celda.textContent?.trim() || '';
                const tieneDatos = texto !== '' && texto !== '\u00A0';
                
                if (!tieneDatos) {
                    celda.style.backgroundColor = '#fde8e8';
                    celda.style.border = '1px solid #f5d0d0';
                    celda.style.fontWeight = 'normal';
                    return;
                }
                
                celda.style.border = '1px solid #000000';
                celda.style.borderCollapse = 'collapse';
                celda.style.backgroundColor = '#ffffff';
                
                const esNumero = !isNaN(texto) && texto.trim() !== '';
                const esNumeroConDecimal = /^\d+\.?\d*$/.test(texto);
                const esNumeroEntero = /^\d+$/.test(texto);
                
                if (esNumero || esNumeroConDecimal || esNumeroEntero) {
                    celda.classList.add('dato-normal');
                    celda.style.fontWeight = 'normal';
                    celda.style.color = '#000000';
                    celdasNumeros++;
                } else {
                    celda.style.fontWeight = 'bold';
                    celda.style.color = '#0033cc';
                    celdasTexto++;
                }
            });
            
            console.log(`✅ Procesamiento completado: ${celdasTexto} celdas de texto (negrita), ${celdasNumeros} celdas numéricas (normal)`);
            
        }, 50);
    } else {
        console.warn('⚠️ No se encontró tabla en el container');
    }

    // 11. AJUSTAR ALTURA DE FILAS
    if (tabla && hoja['!rows']) {
        const filas = tabla.querySelectorAll('tr');
        hoja['!rows'].forEach((row, idx) => {
            if (filas[idx]) {
                let height = 20;
                if (row.hpx) height = row.hpx;
                else if (row.hpt) height = row.hpt * 1.33;
                height = Math.max(height, 18);
                filas[idx].style.height = height + 'px';
                filas[idx].style.minHeight = height + 'px';
            }
        });
    }
    
    // 12. MOSTRAR FILTROS APLICADOS
    mostrarFiltrosAplicados();
    
    // 13. RESTAURAR USUARIO
    setTimeout(restaurarUsuarioTopbar, 50);

    // 14. AGREGAR BARRA DE SCROLL HORIZONTAL
    setTimeout(agregarScrollbarHorizontalArriba, 100);
}

// ============================================
// ACTUALIZAR EXCEL CON DATOS - CON SOPORTE COMPLETO
// ============================================
function actualizarExcelConDatos(datosApi) {
    console.log('📊 Iniciando actualización de Excel con datos');
    console.log('📋 Tablas recibidas:', Object.keys(datosApi));
    
    const mapeoActual = getMapeoPorEstrategia(estrategiaActual);
    if (!mapeoActual || Object.keys(mapeoActual).length === 0) {
        throw new Error('No hay mapeo definido para: ' + estrategiaActual);
    }
    
    const buffer = XLSX.write(workbookOriginal, {
        type: 'array',
        bookType: 'xlsx',
        bookSST: false,
        cellStyles: false
    });
    
    workbookModificado = XLSX.read(buffer, {
        type: 'array',
        cellStyles: false,
        cellNF: false,
        cellDates: false,
        raw: true
    });

    limpiarEstilosFuente(workbookModificado);

    const hoja = workbookModificado.Sheets[workbookModificado.SheetNames[0]];
    let contadorActualizados = 0;

    for (let key in mapeoActual) {
        const mapeo = mapeoActual[key];
        const tablaNombre = mapeo.tabla;
        const campoNombre = mapeo.campo;

        if (!tablaNombre || !datosApi[tablaNombre]) continue;

        let valor = null;
        const tablaData = datosApi[tablaNombre];

        if (Array.isArray(tablaData)) {
            for (let registro of tablaData) {
                let coincide = false;

                // ==========================================================
                // 🔥🔥🔥 FILTROS METALES PESADOS 🔥🔥🔥
                // ==========================================================
                if (mapeo.filtro_orden) {
                    const ordRegistro = String(registro.Orden || '').trim();
                    const ordMapeo = String(mapeo.filtro_orden).trim();
                    coincide = (ordRegistro === ordMapeo);
                }
                // SEGUNDO: Filtrar por Actividad
                else if (mapeo.filtro_actividad) {
                    const actRegistro = String(registro.Actividad || '').trim();
                    const actMapeo = String(mapeo.filtro_actividad).trim();
                    coincide = (actRegistro === actMapeo);
                }
                else if (mapeo.filtro_diagnostico) {
                    const diagRegistro = String(registro.Diagnostico || '').trim();
                    const diagMapeo = String(mapeo.filtro_diagnostico).trim();
                    coincide = (diagRegistro === diagMapeo);
                }
                else if (mapeo.filtro_grupo_edad) {
                    const edadRegistro = String(registro['Grupo de Edad'] || registro.grupo_edad || '').trim();
                    const edadMapeo = String(mapeo.filtro_grupo_edad).trim();
                    coincide = (edadRegistro === edadMapeo);
                }
                else if (mapeo.filtro_tipo_de_consejeria) {
                    const consejRegistro = String(registro['Tipo de Consejería'] || registro.tipo_consejeria || '').trim();
                    const consejMapeo = String(mapeo.filtro_tipo_de_consejeria).trim();
                    coincide = (consejRegistro === consejMapeo);
                }
                else if (mapeo.filtro_clasificacion) {
                    const clasifRegistro = String(registro.Clasificacion || registro.clasificacion || '').trim();
                    const clasifMapeo = String(mapeo.filtro_clasificacion).trim();
                    coincide = (clasifRegistro === clasifMapeo);
                }
                else if (mapeo.filtro_casos_diagnosticados_hta) {
                    const htaRegistro = String(registro['Casos diagnosticados HTA'] || registro.casos_diagnosticados_hta || '').trim();
                    const htaMapeo = String(mapeo.filtro_casos_diagnosticados_hta).trim();
                    coincide = (htaRegistro === htaMapeo);
                }
                else if (mapeo.filtro_casos_diagnosticados_diabetes_mellitus) {
                    const dmRegistro = String(registro['Casos diagnosticados Diabetes Mellitus'] || registro.casos_diagnosticados_diabetes_mellitus || '').trim();
                    const dmMapeo = String(mapeo.filtro_casos_diagnosticados_diabetes_mellitus).trim();
                    coincide = (dmRegistro === dmMapeo);
                }
                else if (mapeo.filtro_deteccion_de_tbc) {
                    const tbcRegistro = String(registro['Detección de TBC'] || registro.deteccion_de_tbc || '').trim();
                    const tbcMapeo = String(mapeo.filtro_deteccion_de_tbc).trim();
                    coincide = (tbcRegistro === tbcMapeo);
                }
                else if (mapeo.filtro_salud_ocular) {
                    const ocuRegistro = String(registro['Salud Ocular'] || registro.salud_ocular || '').trim();
                    const ocuMapeo = String(mapeo.filtro_salud_ocular).trim();
                    coincide = (ocuRegistro === ocuMapeo);
                }
                else if (mapeo.filtro_visita_familiar_integral) {
                    const visRegistro = String(registro['Visita Familiar Integral'] || registro.visita_familiar_integral || '').trim();
                    const visMapeo = String(mapeo.filtro_visita_familiar_integral).trim();
                    coincide = (visRegistro === visMapeo);
                }
                else if (mapeo.filtro_situacion) {
                    const sitRegistro = String(registro.Situacion || registro.situacion || '').trim();
                    const sitMapeo = String(mapeo.filtro_situacion).trim();
                    coincide = (sitRegistro === sitMapeo);
                }

                

                // ==========================================================
                // 🔥🔥🔥 1. FILTROS OCULAR (PRIMERO - ANTES QUE BUCAL) 🔥🔥🔥
                // ==========================================================
                else if (mapeo.filtro_actividad_ocular) {
                    coincide = (String(registro.Actividad || '').trim() === String(mapeo.filtro_actividad_ocular).trim());
                }

                // ==========================================================
                // 🔥 2. FILTROS NO_TRANS
                // ==========================================================
                else if (mapeo.filtro_factor) {
                    const factorRegistro = String(registro.Factor || registro.factor || '').trim();
                    const factorMapeo = String(mapeo.filtro_factor).trim();
                    coincide = (factorRegistro === factorMapeo);
                }
                else if (mapeo.filtro_servicio) {
                    const servRegistro = String(registro.Servicio || registro.servicio || '').trim();
                    const servMapeo = String(mapeo.filtro_servicio).trim();
                    coincide = (servRegistro === servMapeo);
                }
                else if (mapeo.filtro_riesgo) {
                    const riesgoRegistro = String(registro.Riesgo || registro.riesgo || '').trim();
                    const riesgoMapeo = String(mapeo.filtro_riesgo).trim();
                    coincide = (riesgoRegistro === riesgoMapeo);
                }
                else if (mapeo.filtro_sesion) {
                    const sesionRegistro = String(registro.Sesion || registro.sesion || '').trim();
                    const sesionMapeo = String(mapeo.filtro_sesion).trim();
                    coincide = (sesionRegistro === sesionMapeo);
                }

                // ==========================================================
                // 🔥 3. FILTROS BUCAL
                // ==========================================================
                else if (mapeo.filtro_ppr) {
                    coincide = (String(registro.PpR || '').trim() === String(mapeo.filtro_ppr).trim());
                }
                else if (mapeo.subtitulo) {
                    const subtituloRegistro = String(registro.SUBTITULO || '').trim();
                    const subtituloMapeo = String(mapeo.subtitulo).trim();
                    coincide = (subtituloRegistro === subtituloMapeo);
                }
                else if (mapeo.actividad) {
                    const actRegistro = String(registro.Actividad || '').trim();
                    const actMapeo = String(mapeo.actividad).trim();
                    coincide = (actRegistro === actMapeo);
                }
                else if (mapeo.filtro_preventiva) {
                    coincide = (String(registro.Preventiva || '').trim() === String(mapeo.filtro_preventiva).trim());
                }
                else if (mapeo.filtro_recuperativa) {
                    coincide = (String(registro.Recuperativa || '').trim() === String(mapeo.filtro_recuperativa).trim());
                }
                else if (mapeo.filtro_procedimiento) {
                    coincide = (String(registro.Procedimiento || '').trim() === String(mapeo.filtro_procedimiento).trim());
                }
                else if (mapeo.filtro_inactivacion) {
                    coincide = (String(registro.Procedimiento_de_Inactivacion_de_Caries || '').trim() === String(mapeo.filtro_inactivacion).trim());
                }
                else if (mapeo.filtro_telesalud) {
                    coincide = (String(registro.ATENCIÓN_ESTOMATOLÓGICA_A_TRAVÉS_DE_TELESALUD || '').trim() === String(mapeo.filtro_telesalud).trim());
                }
                else if (mapeo.filtro_protesis) {
                    coincide = (String(registro.Actividad || '').trim() === String(mapeo.filtro_protesis).trim());
                }
                else if (mapeo.filtro_subproducto && mapeo.filtro_condicion) {
                    const campoSubProducto = registro.Sub_Producto || registro.sub_producto;
                    const campoCondicion = registro.Condicion || registro.condicion;
                    if (campoSubProducto === mapeo.filtro_subproducto && 
                        campoCondicion === mapeo.filtro_condicion) {
                        coincide = true;
                    }
                }
                else if (mapeo.filtro_curso_vida) {
                    const cvRegistro = String(registro.Prevencion_Curso_de_Vida || registro.prevencion_curso_de_vida || '').trim();
                    const cvMapeo = String(mapeo.filtro_curso_vida).trim();
                    coincide = (cvRegistro === cvMapeo);
                }

                // ==========================================================
                // 🔥 4. FILTRO INDICADORES (Orden)
                // ==========================================================
                else if (mapeo.filtro_orden) {
                    const ordenRegistro = String(registro.Orden || '').trim();
                    const ordenMapeo = String(mapeo.filtro_orden).trim();
                    coincide = (ordenRegistro === ordenMapeo);
                }

                // ========== FILTRO POR DEFECTO ==========
                else {
                    coincide = true;
                }

                if (coincide) {
                    // Intentar obtener el valor
                    const posiblesCampos = [
                        campoNombre,
                        campoNombre.toUpperCase(),
                        campoNombre.toLowerCase(),
                        campoNombre.replace(/-/g, '_'),
                        campoNombre.replace(/_/g, '-'),
                        campoNombre.replace(/\s/g, ''),
                        campoNombre.replace(/\s/g, '_')
                    ];
                    
                    for (let pc of posiblesCampos) {
                        if (registro[pc] !== undefined && registro[pc] !== null) {
                            valor = registro[pc];
                            break;
                        }
                    }
                    
                    if (valor === null || valor === undefined) {
                        for (let prop in registro) {
                            if (prop.toUpperCase() === campoNombre.toUpperCase() || 
                                prop.replace(/_/g, '').toUpperCase() === campoNombre.replace(/_/g, '').toUpperCase() ||
                                prop.replace(/\s/g, '').toUpperCase() === campoNombre.replace(/\s/g, '').toUpperCase()) {
                                valor = registro[prop];
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        } else if (typeof tablaData === 'object' && tablaData !== null) {
            valor = tablaData[campoNombre];
        }

        if (valor !== undefined && valor !== null && valor !== '') {
            const numValor = Number(valor);
            if (!isNaN(numValor) && isFinite(numValor) && numValor >= 0) {
                const refCelda = mapeo.celda;
                hoja[refCelda] = { t: 'n', v: numValor };
                contadorActualizados++;
                console.log(`✅ ${key} = ${numValor} en ${refCelda}`);
            }
        }
    }

    workbookModificado.Sheets[workbookModificado.SheetNames[0]] = hoja;
    datosCargados = true;

    console.log(`📊 TOTAL: ${contadorActualizados} celdas actualizadas (${estrategiaActual})`);
    return { actualizados: contadorActualizados };
}

// ============================================
// DIAGNÓSTICO - VER ESTRUCTURA DE DATOS
// ============================================
function diagnosticarDatos(datosApi, mapeoActual) {
    console.log('🔍 ===== DIAGNÓSTICO DE DATOS =====');
    console.log('📋 Tablas disponibles en datosApi:', Object.keys(datosApi));
    
    for (let tabla in datosApi) {
        const data = datosApi[tabla];
        if (Array.isArray(data) && data.length > 0) {
            console.log(`📊 Tabla "${tabla}": ${data.length} registros`);
            console.log(`   Columnas disponibles:`, Object.keys(data[0]));
            console.log(`   Primer registro:`, data[0]);
            
            const columnasImportantes = [
                'Factor', 'Clasificacion', 'Diagnostico', 'Servicio', 'Riesgo', 'Sesion', 
                'TOTAL', 'Total', 'Actividad', 'Grupo de Edad', 'Tipo de Consejería',
                'Casos diagnosticados HTA', 'Casos diagnosticados Diabetes Mellitus',
                'Detección de TBC', 'Salud Ocular', 'Visita Familiar Integral', 'Situacion'
            ];
            columnasImportantes.forEach(col => {
                if (data[0].hasOwnProperty(col)) {
                    const valores = data.map(r => String(r[col] || 'SIN VALOR').trim());
                    console.log(`   ${col}:`, [...new Set(valores)]);
                } else {
                    const similar = Object.keys(data[0]).find(k => k.toUpperCase() === col.toUpperCase());
                    if (similar) {
                        const valores = data.map(r => String(r[similar] || 'SIN VALOR').trim());
                        console.log(`   ${col} (encontrado como ${similar}):`, [...new Set(valores)]);
                    }
                }
            });
        } else if (typeof data === 'object' && data !== null) {
            console.log(`📊 Tabla "${tabla}": objeto con keys:`, Object.keys(data));
        } else {
            console.log(`📊 Tabla "${tabla}":`, data);
        }
    }
    console.log('🔍 ===== FIN DIAGNÓSTICO =====');
}

// ============================================
// OBTENER DATOS DEL SP - VERSIÓN UNIFICADA
// ============================================
async function obtenerDatosSP() {
    const periodo = document.getElementById('periodo').value;
    if (!periodo) throw new Error('Debe seleccionar un año');

    if (!estrategiaActual) {
        throw new Error('Seleccione una estrategia primero');
    }

    const config = getConfigEstrategia(estrategiaActual);
    if (!config) {
        throw new Error('Configuración no encontrada para: ' + estrategiaActual);
    }

    if (!config.api) {
        throw new Error('La estrategia ' + estrategiaActual + ' no tiene endpoint API definido');
    }

    const selectedCodes = getTablas();
    if (!selectedCodes.length) throw new Error('Seleccione al menos un reporte');

    const filtros = {
        periodo: periodo,
        mes_desde: document.getElementById('mesdesde').value || null,
        mes_hasta: document.getElementById('meshasta').value || null,
        provincia: textoSeleccionado('provincia') || null,
        distrito: textoSeleccionado('distrito') || null,
        ue: textoSeleccionado('ue') || null,
        red: textoSeleccionado('red') || null,
        microred: textoSeleccionado('microred') || null,
        eess: textoSeleccionado('eess') || null,
        tablas: selectedCodes.join(',')
    };

    let url = config.api + '?';
    for (let key in filtros) {
        const value = filtros[key];
        if (value !== null && value !== '') {
            url += key + '=' + encodeURIComponent(value) + '&';
        }
    }

    console.log(`📡 Consultando API ${estrategiaActual}:`, url);
    const response = await fetch(url);
    const result = await response.json();
    console.log('📦 Respuesta API:', result);

    if (!result.success) throw new Error(result.message || result.error || 'Error al obtener datos');

    return result.data;
}

// ============================================
// CARGAR DATOS PRINCIPAL - VERSIÓN UNIFICADA
// ============================================
async function cargarDatos() {
    const loading = document.getElementById('loadingOverlay');
    if (loading) loading.style.display = 'flex';

    try {
        if (!estrategiaActual) {
            throw new Error('Seleccione una estrategia primero');
        }

        const config = getConfigEstrategia(estrategiaActual);
        if (!config) {
            throw new Error('Configuración no encontrada para: ' + estrategiaActual);
        }

        const mapeo = getMapeoPorEstrategia(estrategiaActual);
        if (!mapeo || Object.keys(mapeo).length === 0) {
            throw new Error('No hay mapeo definido para: ' + estrategiaActual);
        }

        if (!workbookOriginal) {
            await cargarPlantillaOriginal();
            if (!workbookOriginal) {
                throw new Error('No se pudo cargar la plantilla Excel');
            }
        }

        console.log(`🚀 Cargando datos desde API ${estrategiaActual}...`);
        const datos = await obtenerDatosSP();

        if (!datos || Object.keys(datos).length === 0) {
            throw new Error('No se recibieron datos del servidor');
        }

        const resultado = actualizarExcelConDatos(datos);
        renderizarPlantilla(workbookModificado);
        ocultarReportes();

        const celdasCargadas = resultado.actualizados || 0;
        actualizarBotonesExportacion(true);
        mostrarMensaje(`✅ Se cargaron ${celdasCargadas} campos de datos (${config.nombre || estrategiaActual})`, 'success');

    } catch (error) {
        console.error('❌ Error:', error);
        mostrarMensaje('Error: ' + error.message, 'danger');
        actualizarBotonesExportacion(false);
    } finally {
        if (loading) loading.style.display = 'none';
        setTimeout(restaurarUsuarioTopbar, 100);
    }
}

// ============================================
// DESCARGA EN PDF - VERSIÓN CON NUEVA PESTAÑA
// ============================================
function descargarPDF() {
    if (!workbookModificado) {
        mostrarMensaje('No hay datos para descargar', 'warning');
        return;
    }

    try {
        const loading = document.getElementById('loadingOverlay');
        if (loading) loading.style.display = 'flex';

        const hoja = workbookModificado.Sheets[workbookModificado.SheetNames[0]];

        let htmlContent = XLSX.utils.sheet_to_html(hoja, {
            id: 'pdf-table',
            editable: false
        });

        htmlContent = htmlContent.replace(/<html[^>]*>/, '').replace(/<\/html>/, '');
        htmlContent = htmlContent.replace(/<body[^>]*>/, '').replace(/<\/body>/, '');
        htmlContent = htmlContent.replace(/<head>.*?<\/head>/, '');
        htmlContent = htmlContent.replace(/ style="[^"]*"/g, '');
        htmlContent = htmlContent.replace(/<td[^>]*>&nbsp;<\/td>/g, '<td></td>');
        htmlContent = htmlContent.replace(/<td[^>]*>\s*<\/td>/g, '<td></td>');
        htmlContent = htmlContent.replace(/<th[^>]*>&nbsp;<\/th>/g, '<th></th>');
        htmlContent = htmlContent.replace(/<th[^>]*>\s*<\/th>/g, '<th></th>');

        // ========== RECOLECTAR TODOS LOS FILTROS ==========
        const periodo = document.getElementById('periodo')?.value || '';
        
        function getSelectedText(id) {
            const el = document.getElementById(id);
            if (!el || el.selectedIndex < 0) return '';
            return (el.options[el.selectedIndex]?.text || '').trim();
        }

        const filtros = {
            'Año': periodo,
            'Mes Desde': getSelectedText('mesdesde'),
            'Mes Hasta': getSelectedText('meshasta'),

            'Provincia': getSelectedText('provincia'),
            'Distrito': getSelectedText('distrito'),
            'UE': getSelectedText('ue'),
            'Red': getSelectedText('red'),
            'Microred': getSelectedText('microred'),
            'EE.SS': getSelectedText('eess'),
            'Estrategia': getSelectedText('estrategia')
        };
        
        const filtrosActivos = Object.entries(filtros).filter(([key, value]) => {
            return value && value !== '' && value !== 'Todos' && value !== 'Seleccione';
        });

        let filtrosTexto = '';
        if (filtrosActivos.length > 0) {
            filtrosTexto = filtrosActivos.map(([key, value]) => `${key}: ${value}`).join(' | ');
        } else {
            filtrosTexto = 'Sin filtros adicionales';
        }

        const fechaActual = new Date().toLocaleDateString('es-ES');
        const horaActual = new Date().toLocaleTimeString('es-ES');
        const tituloPDF = getTituloPDF(estrategiaActual) || 'REPORTE';

        // ========== ESTILOS DE COLUMNAS POR ESTRATEGIA ==========
        let colWidthsCSS = '';

        if (estrategiaActual === 'OCULAR') {
            colWidthsCSS = `
                #pdf-table td:first-child, #pdf-table th:first-child { 
                    width: 50px; min-width: 5px; max-width: 120px; text-align: left; font-size: 7px; 
                }
                #pdf-table td:nth-child(2), #pdf-table th:nth-child(2) { 
                    width: 15px; min-width: 10px; max-width: 80px; text-align: center; font-size: 7px; 
                }
                #pdf-table td:nth-child(3), #pdf-table th:nth-child(3) { 
                    width: 15px; min-width: 10px; max-width: 80px; text-align: center; font-size: 7px; 
                }
                #pdf-table td:nth-child(4), #pdf-table th:nth-child(4) { 
                    width: 15px; min-width: 10px; max-width: 80px; text-align: center; font-size: 8px; 
                }
                #pdf-table td:nth-child(n+5), #pdf-table th:nth-child(n+5) { 
                    width: 15px; min-width: 10px; max-width: 80px; text-align: center; font-size: 7px; 
                }
            `;
        } else if (estrategiaActual === 'BUCAL') {
            colWidthsCSS = `
                #pdf-table td:first-child, #pdf-table th:first-child { 
                    width: 5px; min-width: 5px; max-width: 15px; font-size: 7px; 
                }
                #pdf-table td:nth-child(2), #pdf-table th:nth-child(2) { 
                    width: 40px; min-width: 35px; max-width: 55px; font-size: 7px; 
                }
                #pdf-table td:nth-child(3), #pdf-table th:nth-child(3) { 
                    width: 20px; min-width: 20px; max-width: 50px; text-align: left; font-size: 8px; 
                }
                #pdf-table td:nth-child(4), #pdf-table th:nth-child(4) { 
                    width: 150px; min-width: 100px; max-width: 300px; text-align: left; font-size: 8px; 
                }
                #pdf-table td:nth-child(n+5), #pdf-table th:nth-child(n+5) { 
                    width: 30px; min-width: 20px; max-width: 60px; font-size: 8px; 
                }
            `;
        } else if (estrategiaActual === 'NO_TRANS') {
            colWidthsCSS = `
                #pdf-table { 
                    table-layout: auto !important; 
                    width: 100% !important;
                }
                #pdf-table td, #pdf-table th {
                    font-size: 6px !important;
                    padding: 2px 2px !important;
                    white-space: nowrap !important;
                }
                #pdf-table td:first-child, #pdf-table th:first-child { 
                    text-align: left;
                    font-size: 7px !important;
                    white-space: normal !important;
                    min-width: 120px; 
                }
                #pdf-table td:nth-child(2), #pdf-table th:nth-child(2) { 
                    min-width: 60px;
                }
                #pdf-table td:nth-child(3), #pdf-table th:nth-child(3) { 
                    min-width: 50px;
                }
                #pdf-table td:nth-child(4), #pdf-table th:nth-child(4) { 
                    min-width: 50px;
                }
                #pdf-table td:nth-child(n+5), #pdf-table th:nth-child(n+5) { 
                    min-width: 35px;
                }
            `;
        } else if (estrategiaActual === 'METALES' || estrategiaActual === 'METALES_PESADOS') {
            colWidthsCSS = `
                #pdf-table td:first-child, #pdf-table th:first-child { 
                    width: 5px; min-width: 5px; max-width: 15px; font-size: 6px; 
                }
                #pdf-table td:nth-child(2), #pdf-table th:nth-child(2) { 
                    width: 180px; min-width: 150px; max-width: 300px; font-size: 7px; 
                }
                #pdf-table td:nth-child(3), #pdf-table th:nth-child(3) { 
                    width: 20px; min-width: 20px; max-width: 30px; text-align: center; font-size: 7px; 
                }
                #pdf-table td:nth-child(4), #pdf-table th:nth-child(4) { 
                    width: 250px; min-width: 200px; max-width: 400px; text-align: left; font-size: 7px; 
                }
                #pdf-table td:nth-child(n+5), #pdf-table th:nth-child(n+5) { 
                    width: 30px; min-width: 25px; max-width: 45px; font-size: 7px; 
                }
            `;
        } else {
            colWidthsCSS = `
                #pdf-table td:first-child, #pdf-table th:first-child { 
                    width: 5px; min-width: 5px; max-width: 15px; font-size: 7px; 
                }
                #pdf-table td:nth-child(2), #pdf-table th:nth-child(2) { 
                    width: 40px; min-width: 35px; max-width: 55px; font-size: 7px; 
                }
                #pdf-table td:nth-child(3), #pdf-table th:nth-child(3) { 
                    width: 20px; min-width: 20px; max-width: 50px; text-align: left; font-size: 8px; 
                }
                #pdf-table td:nth-child(4), #pdf-table th:nth-child(4) { 
                    width: 150px; min-width: 100px; max-width: 300px; text-align: left; font-size: 8px; 
                }
                #pdf-table td:nth-child(n+5), #pdf-table th:nth-child(n+5) { 
                    width: 30px; min-width: 20px; max-width: 60px; font-size: 8px; 
                }
            `;
        }

        // ============================================================
        // 🔥 NUEVO: Abrir en nueva pestaña en lugar de imprimir directo
        // ============================================================
        const fullHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${tituloPDF}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
        body {
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
            font-size: 10px;
            padding: 5mm 3mm 5mm 3mm;
            background: white;
            color: #000;
        }
        .header-title {
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 2px;
            color: #1a3c6e;
        }
        .header-subtitle {
            text-align: center;
            font-size: 9px;
            margin-bottom: 2px;
            color: #555;
        }
        .header-filtros {
            text-align: center;
            font-size: 8px;
            margin-bottom: 2px;
            color: #333;
            background-color: #f8f9fa;
            padding: 3px 8px;
            border-radius: 4px;
            border: 1px solid #e9ecef;
            font-weight: 500;
        }
        .header-filtros span {
            color: #0d6efd;
            font-weight: 600;
        }
        .header-line {
            border: none;
            border-top: 0.5px solid #1a3c6e;
            margin: 2px 0 4px 0;
        }
        .table-container { width: 100%; overflow: visible; }
        #pdf-table {
            border-collapse: collapse;
            width: 100%;
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
            table-layout: fixed;
        }
        #pdf-table td, #pdf-table th {
            padding: 2px 3px;
            text-align: center;
            vertical-align: middle;
            white-space: normal;
            word-wrap: break-word;
            word-break: break-word;
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
            border: none;
            background-color: transparent;
            color: #000;
            font-weight: normal;
            font-size: 8px;
        }
        #pdf-table td:not(:empty), #pdf-table th:not(:empty) { 
            border: 0.5px solid #000; 
        }
        #pdf-table td:empty, #pdf-table th:empty { 
            border: none; 
            background-color: transparent; 
        }
        #pdf-table th { 
            background-color: #f0f0f0; 
            font-weight: bold; 
            font-size: 8px; 
        }
        #pdf-table th:empty { 
            background-color: transparent; 
            border: none; 
        }
        
        /* ===== ANCHOS DE COLUMNAS SEGÚN ESTRATEGIA ===== */
        ${colWidthsCSS}
        
        @page { 
            size: landscape; 
            margin: 2mm 2mm 2mm 2mm; 
        }
        @media print {
            body { padding: 2mm 2mm 2mm 2mm; }
            #pdf-table { width: 100%; }
            #pdf-table td:not(:empty), #pdf-table th:not(:empty) { 
                border: 0.5px solid #000; 
            }
            #pdf-table td:empty, #pdf-table th:empty { 
                border: none; 
            }
            .no-print { display: none !important; }
        }
        
        /* Botón de impresión */
        .print-btn-container {
            text-align: center;
            margin-bottom: 10px;
            padding: 8px;
        }
        .print-btn {
            background: #1a3c6e;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Segoe UI', Arial, sans-serif;
            transition: background 0.2s ease;
            box-shadow: 0 2px 8px rgba(26, 60, 110, 0.3);
        }
        .print-btn:hover {
            background: #0d2b4f;
        }
        .print-btn i {
            margin-right: 8px;
        }
        .print-hint {
            font-size: 11px;
            color: #888;
            margin-top: 5px;
        }
        .print-hint kbd {
            background: #f1f1f1;
            padding: 2px 8px;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <!-- 🔥 BOTÓN PARA IMPRIMIR EN LA NUEVA VENTANA -->
    <div class="print-btn-container no-print">
        <button class="print-btn" onclick="window.print()">
            <i class="bi bi-printer"></i> Imprimir / Guardar como PDF
        </button>
        <div class="print-hint">
            También puedes usar <kbd>Ctrl + P</kbd> para imprimir o guardar como PDF
        </div>
    </div>
    
    <div class="header-title">${tituloPDF}</div>
    <div class="header-subtitle">&nbsp; ${fechaActual} ${horaActual}</div>
    <div class="header-filtros">📋 Filtros aplicados: <span>${filtrosTexto}</span></div>
    <hr class="header-line">
    <div class="table-container">${htmlContent}</div>
</body>
</html>`;

        // ============================================================
        // 🔥 ABRIR EN NUEVA PESTAÑA
        // ============================================================
        const ventanaNueva = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
        
        if (!ventanaNueva) {
            // Si el navegador bloquea la ventana emergente, mostrar mensaje
            mostrarMensaje('⚠️ Permite las ventanas emergentes para ver el PDF', 'warning');
            if (loading) loading.style.display = 'none';
            return;
        }

        // Escribir el contenido en la nueva ventana
        ventanaNueva.document.write(fullHtml);
        ventanaNueva.document.close();
        
        // Poner el foco en la nueva ventana
        ventanaNueva.focus();

        if (loading) loading.style.display = 'none';
        mostrarMensaje('✅ PDF abierto en nueva pestaña', 'success');

    } catch (error) {
        console.error('Error generando PDF:', error);
        document.getElementById('loadingOverlay').style.display = 'none';
        mostrarMensaje('Error al generar PDF: ' + error.message, 'danger');
    }
}

// ============================================
// CONTROL DE BOTONES
// ============================================
function actualizarBotonesExportacion(habilitar) {
    const btnPDF = document.getElementById('btnExportarPDF');
    if (btnPDF) btnPDF.disabled = !habilitar;
}

function actualizarBadgeReportes(cantidad) {
    const badge = document.getElementById('reportesBadge');
    if (badge) badge.textContent = cantidad || '0';
}

// ============================================
// RESTAURAR USUARIO Y SALIR
// ============================================
function restaurarUsuarioTopbar() {
    console.log('🔄 Restaurando usuario y salir...');
    
    const toolbarRight = document.querySelector('.toolbar-right');
    if (toolbarRight) {
        toolbarRight.style.display = 'flex';
        toolbarRight.style.visibility = 'visible';
        toolbarRight.style.opacity = '1';
        toolbarRight.style.minHeight = '40px';
        toolbarRight.style.position = 'relative';
        toolbarRight.style.zIndex = '10';
        console.log('✅ toolbar-right restaurado');
    } else {
        console.warn('⚠️ toolbar-right no encontrado, recreando...');
        const toolbarWrapper = document.querySelector('.toolbar-wrapper');
        if (toolbarWrapper) {
            const nuevoToolbarRight = document.createElement('div');
            nuevoToolbarRight.className = 'toolbar-right';
            nuevoToolbarRight.innerHTML = `
                <div class="user-profile">
                    <div class="user-avatar-sm">
                        <i class="bi bi-person"></i>
                        <span class="status-dot"></span>
                    </div>
                    <div class="user-info">
                        <span class="user-role" id="cargoUsuarioDisplay">${localStorage.getItem('cargousuario') || 'USUARIO'}</span>
                        <span class="user-name" id="nombreUsuarioDisplay">${localStorage.getItem('nombreusuario') || 'Cargando...'}</span>
                    </div>
                </div>
                <button class="toolbar-btn btn-logout" onclick="cerrarSesion()">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Salir</span>
                </button>
            `;
            toolbarWrapper.appendChild(nuevoToolbarRight);
            console.log('✅ toolbar-right recreado');
        }
    }
    
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.style.display = 'flex';
        userProfile.style.visibility = 'visible';
        userProfile.style.opacity = '1';
    }
    
    const btnLogout = document.querySelector('.btn-logout');
    if (btnLogout) {
        btnLogout.style.display = 'inline-flex';
        btnLogout.style.visibility = 'visible';
        btnLogout.style.opacity = '1';
    }
    
    const cargoDisplay = document.getElementById('cargoUsuarioDisplay');
    const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
    if (cargoDisplay) {
        cargoDisplay.textContent = localStorage.getItem('cargousuario') || 'USUARIO';
    }
    if (nombreDisplay) {
        nombreDisplay.textContent = localStorage.getItem('nombreusuario') || 'Cargando...';
    }
}

// ============================================
// ALERTAS FLOTANTES
// ============================================
function mostrarMensaje(mensaje, tipo) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert-flotante alert-' + tipo;
    alertDiv.innerHTML = '<strong>' + (tipo === 'success' ? '✓' : '⚠') + '</strong> ' + mensaje +
        '<button type="button" class="btn-close" onclick="this.parentElement.remove()">×</button>';
    document.body.appendChild(alertDiv);
    setTimeout(function () { alertDiv.remove(); }, 5000);
}

// ============================================
// PERMISOS DE USUARIO
// ============================================
async function cargarPermisosUsuario() {
    const dni = localStorage.getItem('dniusuario');


    if (!dni) {
        
        window.location.href = 'inicio.html';
        return false;
    }
    

    try {
        const res = await fetch('api/api_tipos_usuarios.php?' + new URLSearchParams({ dni }));
        const json = await res.json();
        if (!json.success) {
            alert(json.message || 'Error de permisos');
            window.location.href = 'inicio.html';
            return false;
        }
        permisosUsuario = json.data || {};
        const cargo = String(permisosUsuario.CARGO || localStorage.getItem('cargousuario') || '').toUpperCase();
        const nombre = String(permisosUsuario.Nombre_Completo || localStorage.getItem('nombreusuario') || 'Usuario');

        const cargoDisplay = document.getElementById('cargoUsuarioDisplay');
        const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
        if (cargoDisplay) cargoDisplay.textContent = cargo || 'Profesional';
        if (nombreDisplay) nombreDisplay.textContent = nombre;

        await cargarSelect('periodo', 'PERIODO');
        await cargarSelect('mesdesde', 'MES');
        await cargarSelect('meshasta', 'MES');
        await cargarSelect('provincia', 'PROVINCIA');
        await cargarSelect('ue', 'UE');
        document.getElementById('red').disabled = true;
        document.getElementById('microred').disabled = true;
        document.getElementById('eess').disabled = true;

        if (cargo === 'MONITOR') {
            document.getElementById('provincia').disabled = false;
            document.getElementById('distrito').disabled = true;
            return true;
        } else {
            vaciarYDeshabilitar('provincia');
            vaciarYDeshabilitar('distrito');
        }

        if (cargo === 'COORDINADOR') {
            if (permisosUsuario.UE) {
                bloquearSelect('ue', permisosUsuario.UE, permisosUsuario.UE);
                await cargarSelect('red', 'RED', { ue: permisosUsuario.UE });
                document.getElementById('red').disabled = false;
            }
            return true;
        }

        if (cargo === 'GERENTE') {
            if (permisosUsuario.UE) {
                bloquearSelect('ue', permisosUsuario.UE, permisosUsuario.UE);
                await cargarSelect('red', 'RED', { ue: permisosUsuario.UE });
                document.getElementById('red').disabled = false;
            }
            if (permisosUsuario.RED) {
                bloquearSelect('red', permisosUsuario.RED, permisosUsuario.RED);
                await cargarSelect('microred', 'MICRORED', { ue: permisosUsuario.UE, red: permisosUsuario.RED });
                document.getElementById('microred').disabled = false;
            }
            return true;
        }

        if (cargo === 'DIGITADOR') {
            if (permisosUsuario.UE) {
                bloquearSelect('ue', permisosUsuario.UE, permisosUsuario.UE);
                await cargarSelect('red', 'RED', { ue: permisosUsuario.UE });
                document.getElementById('red').disabled = false;
            }
            if (permisosUsuario.RED) {
                bloquearSelect('red', permisosUsuario.RED, permisosUsuario.RED);
                await cargarSelect('microred', 'MICRORED', { ue: permisosUsuario.UE, red: permisosUsuario.RED });
                document.getElementById('microred').disabled = false;
            }
            if (permisosUsuario.MICRORED) {
                bloquearSelect('microred', permisosUsuario.MICRORED, permisosUsuario.MICRORED);
                await cargarSelect('eess', 'EESS', { ue: permisosUsuario.UE, red: permisosUsuario.RED, microred: permisosUsuario.MICRORED });
                document.getElementById('eess').disabled = false;
            }
            return true;
        }

        if (cargo === 'PROFESIONAL') {
            if (permisosUsuario.UE) bloquearSelect('ue', permisosUsuario.UE, permisosUsuario.UE);
            if (permisosUsuario.RED) bloquearSelect('red', permisosUsuario.RED, permisosUsuario.RED);
            if (permisosUsuario.MICRORED) bloquearSelect('microred', permisosUsuario.MICRORED, permisosUsuario.MICRORED);
            if (permisosUsuario.EESS) bloquearSelect('eess', permisosUsuario.EESS, permisosUsuario.EESS);
            return true;
        }

        return true;
    } catch (error) {
        console.error('Error cargando permisos:', error);
        return false;
    }
}

function cerrarSesion() {
    // Limpiar localStorage
    localStorage.clear();
    
    // Llamar al script PHP para cerrar sesión
    fetch('api/cerrar_sesion.php')
        .then(response => response.json())
        .then(data => {
            console.log('✅ Sesión cerrada:', data);
            window.location.href = 'inicio.html';
        })
        .catch(() => {
            // Si falla, igual redirigir
            window.location.href = 'inicio.html';
        });
}

// ============================================
// ATEJOS DE TECLADO
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        const btnPDF = document.getElementById('btnExportarPDF');
        if (btnPDF && !btnPDF.disabled) {
            e.preventDefault();
            descargarPDF();
        }
    }
});

// ============================================
// ON ESTRATEGIA CHANGE - VERSIÓN UNIFICADA
// ============================================
async function onEstrategiaChange() {
    const btnPDF = document.getElementById('btnExportarPDF');
    if (btnPDF) btnPDF.disabled = true;
    
    const estrategia = document.getElementById('estrategia').value;
    estrategiaActual = estrategia;
    
    workbookOriginal = null;
    workbookModificado = null;
    datosCargados = false;
    
    actualizarDotEstrategia(estrategia);
    const lista = document.getElementById('listaTablas');

    document.getElementById('resultado').innerHTML = `
        <div class="empty-state">
            <div class="empty-icon"><i class="bi bi-file-excel"></i></div>
            <p>Selecciona una estrategia, elige los reportes y pulsa <strong>Cargar Datos</strong></p>
            <small style="color:#94a3b8;">Los datos se cargarán en la plantilla Excel</small>
        </div>
    `;

    if (!estrategia) {
        estrategiaActual = null;
        if (lista) lista.innerHTML = '<div style="padding:12px;text-align:center;color:#94a3b8;">Selecciona una estrategia para ver reportes</div>';
        ocultarReportes();
        return;
    }

    if (ESTRATEGIAS_EN_DESARROLLO.includes(estrategia)) {
        if (lista) lista.innerHTML = construirPanelDesarrollo(estrategia);
        ocultarReportes();
        return;
    }

    const catalogo = getCatalogoPorEstrategia(estrategia);
    
    if (catalogo && catalogo.length > 0) {
        renderizarListaTablas(catalogo);
        if (tienePlantilla(estrategia)) {
            await cargarPlantillaOriginal();
        } else {
            mostrarMensaje('⚠️ Esta estrategia no tiene plantilla Excel definida', 'warning');
        }
    } else {
        if (lista) lista.innerHTML = '<div style="padding:12px;text-align:center;color:#94a3b8;">No hay reportes disponibles para esta estrategia</div>';
    }
    
    mostrarReportes();
}

// ============================================
// INICIALIZACIÓN
// ============================================
window.onload = async function () {
    console.log('🚀 Iniciando tabla02 (Plantilla Excel)...');

    if (typeof XLSX === 'undefined') {
        console.error('❌ XLSX no está disponible');
        document.getElementById('resultado').innerHTML =
            '<div class="empty-state" style="color:#dc2626;">' +
            '<i class="bi bi-exclamation-triangle" style="font-size:2rem;"></i>' +
            '<p>Error: La librería Excel no se cargó correctamente.</p>' +
            '<small>Por favor, recargue la página o verifique su conexión a internet.</small>' +
            '</div>';
        return;
    }

    console.log('✅ XLSX disponible, versión:', XLSX.version);

    await cargarPermisosUsuario();

    // ✅ ACTUALIZAR FECHA DE ACTUALIZACIÓN EN EL SIDEBAR
    await actualizarFechaActualizacion();

    document.getElementById('resultado').innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="bi bi-file-excel"></i></div>
          <p>Selecciona una estrategia, elige los reportes y pulsa <strong>Cargar Datos</strong></p>
          <small style="color:#94a3b8;">Los datos se cargarán en la plantilla Excel</small>
        </div>
      `;

    document.getElementById('listaTablas').innerHTML = '<div style="padding:12px;text-align:center;color:#94a3b8;">Selecciona una estrategia para ver reportes</div>';

    ocultarReportes();

    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    if (toggleSidebarBtn) toggleSidebarBtn.addEventListener('click', toggleSidebarDesktop);

    const logoCollapse = document.getElementById('logoCollapseBtn');
    if (logoCollapse) logoCollapse.addEventListener('click', toggleSidebarDesktop);

    const mobileLogo = document.getElementById('mobileLogoBtn');
    if (mobileLogo) mobileLogo.addEventListener('click', () => {
        if (window.innerWidth <= 768) openSidebar();
        else toggleSidebarDesktop();
    });

    const toggleReportes = document.getElementById('toggleReportesBtn');
    if (toggleReportes) toggleReportes.addEventListener('click', toggleReportesPanel);

    actualizarContadorReportes();
    actualizarBotonesExportacion(false);
    restaurarUsuarioTopbar();
    
    // ✅ Actualizar fecha cada 30 segundos (opcional)
    setInterval(actualizarFechaActualizacion, 30000);
};

// ============================================
// MOSTRAR FILTROS APLICADOS
// ============================================
function mostrarFiltrosAplicados() {
    const container = document.getElementById('filtrosAplicados');
    const lista = document.getElementById('filtrosLista');
    
    if (!container || !lista) return;
    
    const filtros = {
        'Año': document.getElementById('periodo')?.value || '',
        'Mes Desde': document.getElementById('mesdesde')?.options?.[document.getElementById('mesdesde')?.selectedIndex]?.text || '',
        'Mes Hasta': document.getElementById('meshasta')?.options?.[document.getElementById('meshasta')?.selectedIndex]?.text || '',
        'Provincia': textoSeleccionado('provincia') || '',
        'Distrito': textoSeleccionado('distrito') || '',
        'UE': textoSeleccionado('ue') || '',
        'Red': textoSeleccionado('red') || '',
        'Microred': textoSeleccionado('microred') || '',
        'EESS': textoSeleccionado('eess') || '',
        'Estrategia': document.getElementById('estrategia')?.options?.[document.getElementById('estrategia')?.selectedIndex]?.text || ''
    };
    
    const filtrosActivos = Object.entries(filtros).filter(([key, value]) => value && value !== '' && value !== 'Todos');
    
    if (filtrosActivos.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'flex';
    lista.innerHTML = '';
    
    filtrosActivos.forEach(([key, value]) => {
        const tag = document.createElement('span');
        tag.className = 'filtro-tag';
        tag.innerHTML = `<span class="filtro-label">${key}:</span> <span class="filtro-valor">${value}</span>`;
        lista.appendChild(tag);
    });
}


// ============================================
// AGREGAR BARRA DE SCROLL HORIZONTAL ARRIBA (ESTÁTICA - STICKY)
// ============================================
function agregarScrollbarHorizontalArriba() {
    const container = document.getElementById('resultado');
    if (!container) return;
    
    // Buscar el contenedor de la tabla existente
    const excelContainer = container.querySelector('.excel-container');
    if (!excelContainer) return;
    
    // Verificar si ya existe la barra superior
    if (container.querySelector('.scrollbar-horizontal-top')) return;
    
    // Obtener el ancho real de la tabla
    const tabla = excelContainer.querySelector('table');
    if (!tabla) return;
    
    // 1. Envolver el contenido actual
    const wrapper = document.createElement('div');
    wrapper.className = 'excel-wrapper';
    wrapper.style.cssText = `
        position: relative;
        display: flex;
        flex-direction: column;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        overflow: visible;
        background: white;
        width: 100%;
    `;
    
    // 2. Crear la barra superior con STICKY
    const scrollbarTop = document.createElement('div');
    scrollbarTop.className = 'scrollbar-horizontal-top';
    scrollbarTop.id = 'scrollbarTop';
    scrollbarTop.style.cssText = `
        position: sticky;
        top: 0;
        z-index: 1000;
        background: #f1f5f9;
        border-bottom: 1px solid #e2e8f0;
        border-radius: 8px 8px 0 0;
        height: 18px;
        min-height: 18px;
        max-height: 18px;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: thin;
        scrollbar-color: #94a3b8 #e2e8f0;
        flex-shrink: 0;
        padding: 0;
        margin: 0;
    `;
    
    // 3. Contenido interno para forzar el scroll (mismo ancho que la tabla)
    const scrollContent = document.createElement('div');
    scrollContent.style.cssText = `
        height: 1px;
        min-width: ${Math.max(tabla.scrollWidth, 100)}px;
        visibility: hidden;
    `;
    scrollbarTop.appendChild(scrollContent);
    
    // 4. ELIMINAR EL SCROLL HORIZONTAL DEL CONTENEDOR
    // Solo permitir scroll vertical, el horizontal lo maneja la barra superior
    excelContainer.style.cssText = `
        flex: 1;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        background: white;
        border-radius: 0 0 8px 8px;
        min-height: 200px;
        max-height: 600px;
        width: 100%;
        padding: 0;
        scrollbar-width: thin;
        scrollbar-color: #94a3b8 #f1f5f9;
    `;
    
    // 5. Mover el contenedor dentro del wrapper
    excelContainer.parentNode.insertBefore(wrapper, excelContainer);
    wrapper.appendChild(scrollbarTop);
    wrapper.appendChild(excelContainer);
    
    // 6. Sincronizar scroll: cuando la barra superior se mueve, la tabla se desplaza
    scrollbarTop.addEventListener('scroll', function() {
        excelContainer.scrollLeft = this.scrollLeft;
    });
    
    // 7. Ya NO necesitamos el event listener de la tabla porque no tiene scroll horizontal
    // (la tabla solo hace scroll vertical)
    
    // 8. Inicializar
    setTimeout(() => {
        const tablaActual = excelContainer.querySelector('table');
        if (tablaActual) {
            const scrollContentEl = scrollbarTop.querySelector('.scroll-content');
            if (scrollContentEl) {
                scrollContentEl.style.minWidth = tablaActual.scrollWidth + 'px';
            }
        }
        // Sincronizar posición inicial
        scrollbarTop.scrollLeft = 0;
    }, 150);
    
    // 9. Observar cambios en la tabla para actualizar el ancho
    const resizeObserver = new ResizeObserver(() => {
        const tablaActual = excelContainer.querySelector('table');
        if (tablaActual) {
            const scrollContentEl = scrollbarTop.querySelector('.scroll-content');
            if (scrollContentEl) {
                scrollContentEl.style.minWidth = tablaActual.scrollWidth + 'px';
            }
        }
    });
    resizeObserver.observe(excelContainer);
    
    // 10. Observar cambios en el DOM (cuando se recargan datos)
    const mutationObserver = new MutationObserver(() => {
        const tablaActual = excelContainer.querySelector('table');
        if (tablaActual) {
            const scrollContentEl = scrollbarTop.querySelector('.scroll-content');
            if (scrollContentEl) {
                scrollContentEl.style.minWidth = tablaActual.scrollWidth + 'px';
            }
        }
    });
    mutationObserver.observe(excelContainer, { childList: true, subtree: true });
    
    console.log('✅ Barra de scroll horizontal superior STICKY agregada (inferior ELIMINADA)');
}

// ============================================
// FUNCIÓN PARA ACTUALIZAR LA FECHA EN EL SIDEBAR
// ============================================
async function actualizarFechaActualizacion() {
    try {
        const response = await fetch('api/api_catalogos.php?tipo=ACTUALIZACION');
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
            const fecha = data.data[0].FECHA_ACTUALIZACION;
            let fechaStr = '';
            
            if (typeof fecha === 'object' && fecha.date) {
                fechaStr = new Date(fecha.date).toLocaleDateString('es-ES', {
                    day: '2-digit', month: '2-digit', year: 'numeric'
                });
            } else if (typeof fecha === 'string') {
                const parts = fecha.split(' ');
                if (parts.length > 0) {
                    const dateParts = parts[0].split('-');
                    if (dateParts.length === 3) {
                        fechaStr = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
                    } else {
                        fechaStr = fecha;
                    }
                } else {
                    fechaStr = fecha;
                }
            } else if (fecha instanceof Date) {
                fechaStr = fecha.toLocaleDateString('es-ES', {
                    day: '2-digit', month: '2-digit', year: 'numeric'
                });
            } else {
                fechaStr = String(fecha);
            }
            
            const fechaSidebar = document.getElementById('fechaActualizacionSidebar');
            if (fechaSidebar) {
                fechaSidebar.innerHTML = `<i class="bi bi-clock-history" style="margin-right:4px;"></i>Última act: ${fechaStr}`;
            }
            
            const fechaTopbar = document.getElementById('fechaActualizacionTopbar');
            if (fechaTopbar) {
                fechaTopbar.textContent = `📊 Última act: ${fechaStr}`;
            }
        }
    } catch (error) {
        console.error('Error obteniendo fecha de actualización:', error);
    }
}

// ============================================
// CAMBIAR DE PESTAÑA DE REPORTES
// ============================================
function switchReportTab(tabId) {
    // 1. Actualizar grupo actual
    grupoActual = tabId;
    
    // 2. Actualizar botones de navegación
    document.querySelectorAll('.report-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        }
    });
    
    // 3. Actualizar paneles de contenido
    document.querySelectorAll('.report-tab-pane').forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === `tabPane-${tabId}`) {
            pane.classList.add('active');
        }
    });
    
    // 4. FILTRAR CHECKBOXES SEGÚN LA PESTAÑA SELECCIONADA
    filtrarCheckboxesPorPestana(tabId);
    
    // 5. 🔥 SI YA HAY DATOS CARGADOS, RE-RENDERIZAR CON EL FILTRO
    if (workbookModificado && datosCargados) {
        renderizarPlantilla(workbookModificado);
    }
}

// ============================================
// FILTRAR CHECKBOXES SEGÚN PESTAÑA
// ============================================
function filtrarCheckboxesPorPestana(tabId) {
    // Obtener todos los checkboxes
    const allCheckboxes = document.querySelectorAll('.tabla-check');
    
    // Mostrar todos los checkboxes en TODOS
    if (tabId === 'TODOS') {
        allCheckboxes.forEach(cb => {
            const item = cb.closest('.report-item');
            if (item) item.style.display = 'none'; // Ocultos visualmente pero seleccionados
        });
        return;
    }
    
    // Obtener los checkboxes de la pestaña activa
    const activePane = document.getElementById(`tabPane-${tabId}`);
    if (!activePane) return;
    
    const activeCheckboxes = activePane.querySelectorAll('.tabla-check');
    const activeValues = new Set();
    activeCheckboxes.forEach(cb => activeValues.add(cb.value));
    
    // Solo mostrar los checkboxes que están en la pestaña activa
    allCheckboxes.forEach(cb => {
        const item = cb.closest('.report-item');
        if (item) {
            if (activeValues.has(cb.value)) {
                item.style.display = 'none'; // Ocultos pero seleccionados
            } else {
                item.style.display = 'none';
            }
        }
    });
    
    // Actualizar el contador
    const visibles = document.querySelectorAll('.tabla-check:checked').length;
    actualizarBadgeReportes(visibles);
}

// ============================================
// CONFIGURACIÓN DE RANGOS POR GRUPO (FILAS DE EXCEL)
// ============================================
const RANGOS_POR_GRUPO = {
    'PG1': { inicio: 1, fin: 86, descripcion: 'PG1 - Productos Generales' },
    'PG2': { inicio: 87, fin: 180, descripcion: 'PG2 - Productos Generales 2' },
    'PA': { inicio: 181, fin: 243, descripcion: 'PA - Productos Avanzados' },
    'PS': { inicio: 244, fin: 304, descripcion: 'PS - Productos Especiales' },
    'INDICADORES': { inicio: 304, fin: 334, descripcion: 'IND - Indicadores' } 
};

// Variable global para almacenar el grupo actual seleccionado
let grupoActual = 'TODOS';

function getRangoPorGrupo(grupo) {
    if (grupo === 'TODOS') return null;
    return RANGOS_POR_GRUPO[grupo] || null;
}

// ============================================
// DIAGNÓSTICO - VER MAPEO CARGADO
// ============================================
function diagnosticarMapeo() {
    console.log('🔍 ===== DIAGNÓSTICO DE MAPEO =====');
    console.log('📋 Estrategia actual:', estrategiaActual);
    
    const mapeo = getMapeoPorEstrategia(estrategiaActual);
    if (mapeo) {
        const claves = Object.keys(mapeo);
        console.log(`📊 Mapeo tiene ${claves.length} claves`);
        
        // Contar por tabla
        const tablas = {};
        claves.forEach(key => {
            const tabla = mapeo[key].tabla || 'SIN_TABLA';
            tablas[tabla] = (tablas[tabla] || 0) + 1;
        });
        console.log('📊 Distribución por tabla:', tablas);
    } else {
        console.warn('⚠️ No hay mapeo para:', estrategiaActual);
    }
    console.log('🔍 ===== FIN DIAGNÓSTICO =====');
}