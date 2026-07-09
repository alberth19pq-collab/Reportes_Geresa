// js/mapeos/mapeo_global.js

// ✅ Verificar que el mapeo existe
console.log('🔍 MAPEO_CELDAS_NO_TRANS existe?', typeof MAPEO_CELDAS_NO_TRANS !== 'undefined');

const MAPEO_MAESTRO = {
    'BUCAL': typeof MAPEO_CELDAS_BUCAL !== 'undefined' ? MAPEO_CELDAS_BUCAL : {},
    'OCULAR': typeof MAPEO_CELDAS_OCULAR !== 'undefined' ? MAPEO_CELDAS_OCULAR : {},
    'NO_TRANS': typeof MAPEO_CELDAS_NO_TRANS !== 'undefined' ? MAPEO_CELDAS_NO_TRANS : {}
};

// ✅ Log para verificar que NO_TRANS está en el mapeo
console.log('📋 MAPEO_MAESTRO.NO_TRANS:', MAPEO_MAESTRO.NO_TRANS ? Object.keys(MAPEO_MAESTRO.NO_TRANS).length + ' claves' : 'NO EXISTE');

const CONFIG_MAESTRO = {
    'BUCAL': typeof CONFIG_BUCAL !== 'undefined' ? CONFIG_BUCAL : null,
    'OCULAR': typeof CONFIG_OCULAR !== 'undefined' ? CONFIG_OCULAR : null,
    'NO_TRANS': typeof CONFIG_NO_TRANS !== 'undefined' ? CONFIG_NO_TRANS : null
};

// ============================================
// FUNCIONES DE ACCESO (igual que antes)
// ============================================

function getMapeoPorEstrategia(estrategia) {
    if (!estrategia) return null;
    return MAPEO_MAESTRO[estrategia] || null;
}

function getConfigEstrategia(estrategia) {
    if (!estrategia) return null;
    return CONFIG_MAESTRO[estrategia] || null;
}

function getCatalogoPorEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.catalogo ? config.catalogo : [];
}

function getColumnasExcelEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.columnas_excel ? config.columnas_excel : [];
}

function getPaletaEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.paleta_colores ? config.paleta_colores : [];
}

function getEstilosEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.estilos_css ? config.estilos_css : '';
}

function tieneMapeo(estrategia) {
    const mapeo = getMapeoPorEstrategia(estrategia);
    return mapeo && Object.keys(mapeo).length > 0;
}

function tienePlantilla(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.plantilla !== null && config.plantilla !== '';
}

function getTituloPDF(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.titulo_pdf ? config.titulo_pdf : 'REPORTE';
}

function getNombreArchivo(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.nombre_archivo ? config.nombre_archivo : 'Reporte';
}

function getColorEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.color ? config.color : '#3b82f6';
}

function getIconoEstrategia(estrategia) {
    const config = getConfigEstrategia(estrategia);
    return config && config.icono ? config.icono : '📊';
}