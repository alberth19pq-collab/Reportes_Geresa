// ============================================
// 1. CONFIGURACIÓN GENERAL
// ============================================

// js/mapeos/mapeo_metales_pesados.js
// ============================================
// 2. MAPEO DE CELDAS
// ============================================
const MAPEO_CELDAS_METALES = {


    // --- 1.1 Exposición Medio Ambiente (Orden 1 y 2) ---
    'MA_POB_00_11': { celda: 'D4', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General', filtro_orden: '1' },
    'MA_POB_12_17': { celda: 'E4', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General', filtro_orden: '1' },
    'MA_POB_18_29': { celda: 'F4', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General', filtro_orden: '1' },
    'MA_POB_30_59': { celda: 'G4', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General', filtro_orden: '1' },
    'MA_POB_60_M':  { celda: 'H4', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General', filtro_orden: '1' },

    'MA_GES_00_11': { celda: 'D5', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes', filtro_orden: '2' },
    'MA_GES_12_17': { celda: 'E5', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes', filtro_orden: '2' },
    'MA_GES_18_29': { celda: 'F5', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes', filtro_orden: '2' },
    'MA_GES_30_59': { celda: 'G5', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes', filtro_orden: '2' },
    'MA_GES_60_M':  { celda: 'H5', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes', filtro_orden: '2' },

    // --- 1.2 Exposición Ocupacional (Orden 3 y 4) ---
    'OCU_POB_00_11': { celda: 'D7', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Ocupacional)', filtro_orden: '3' },
    'OCU_POB_12_17': { celda: 'E7', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Ocupacional)', filtro_orden: '3' },
    'OCU_POB_18_29': { celda: 'F7', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Ocupacional)', filtro_orden: '3' },
    'OCU_POB_30_59': { celda: 'G7', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Ocupacional)', filtro_orden: '3' },
    'OCU_POB_60_M':  { celda: 'H7', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Ocupacional)', filtro_orden: '3' },

    'OCU_GES_00_11': { celda: 'D8', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Ocupacional)', filtro_orden: '4' },
    'OCU_GES_12_17': { celda: 'E8', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Ocupacional)', filtro_orden: '4' },
    'OCU_GES_18_29': { celda: 'F8', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Ocupacional)', filtro_orden: '4' },
    'OCU_GES_30_59': { celda: 'G8', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Ocupacional)', filtro_orden: '4' },
    'OCU_GES_60_M':  { celda: 'H8', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Ocupacional)', filtro_orden: '4' },

    // --- 1.3 Ambas Exposiciones (Mixto) (Orden 5 y 6) ---
    'AMB_POB_00_11': { celda: 'D10', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Mixto)', filtro_orden: '5' },
    'AMB_POB_12_17': { celda: 'E10', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Mixto)', filtro_orden: '5' },
    'AMB_POB_18_29': { celda: 'F10', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Mixto)', filtro_orden: '5' },
    'AMB_POB_30_59': { celda: 'G10', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Mixto)', filtro_orden: '5' },
    'AMB_POB_60_M':  { celda: 'H10', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Población en General (Mixto)', filtro_orden: '5' },

    'AMB_GES_00_11': { celda: 'D11', campo: '00a-11a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Mixto)', filtro_orden: '6' },
    'AMB_GES_12_17': { celda: 'E11', campo: '12a-17a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Mixto)', filtro_orden: '6' },
    'AMB_GES_18_29': { celda: 'F11', campo: '18a-29a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Mixto)', filtro_orden: '6' },
    'AMB_GES_30_59': { celda: 'G11', campo: '30a-59a', tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Mixto)', filtro_orden: '6' },
    'AMB_GES_60_M':  { celda: 'H11', campo: '60a+',    tabla: '01_MEDIO_AMBIENTE', filtro_actividad: 'Gestantes (Mixto)', filtro_orden: '6' },

    // ========================================================================
    // SECCIÓN 2: 02_MONITOREO (Actualitzat segons SP_REPORTE_METALES_PESADOS_02_MONITOREO)
    // ========================================================================
    
    // ORDEN 1: Dosaje de Arsénico
    'MON_ARS_00_11': { celda: 'D16', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Arsénico', filtro_orden: '1' },
    'MON_ARS_12_17': { celda: 'E16', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Arsénico', filtro_orden: '1' },
    'MON_ARS_18_29': { celda: 'F16', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Arsénico', filtro_orden: '1' },
    'MON_ARS_30_59': { celda: 'G16', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Arsénico', filtro_orden: '1' },
    'MON_ARS_60_M':  { celda: 'H16', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Arsénico', filtro_orden: '1' },

    // ORDEN 2: Dosaje de Plomo
    'MON_PLO_00_11': { celda: 'D17', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Plomo', filtro_orden: '2' },
    'MON_PLO_12_17': { celda: 'E17', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Plomo', filtro_orden: '2' },
    'MON_PLO_18_29': { celda: 'F17', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Plomo', filtro_orden: '2' },
    'MON_PLO_30_59': { celda: 'G17', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Plomo', filtro_orden: '2' },
    'MON_PLO_60_M':  { celda: 'H17', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Plomo', filtro_orden: '2' },

    // ORDEN 3: Dosaje de Cadmio
    'MON_CAD_00_11': { celda: 'D18', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Cadmio', filtro_orden: '3' },
    'MON_CAD_12_17': { celda: 'E18', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Cadmio', filtro_orden: '3' },
    'MON_CAD_18_29': { celda: 'F18', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Cadmio', filtro_orden: '3' },
    'MON_CAD_30_59': { celda: 'G18', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Cadmio', filtro_orden: '3' },
    'MON_CAD_60_M':  { celda: 'H18', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Cadmio', filtro_orden: '3' },

    // ORDEN 4: Dosaje de Mercurio
    'MON_MER_00_11': { celda: 'D19', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Mercurio', filtro_orden: '4' },
    'MON_MER_12_17': { celda: 'E19', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Mercurio', filtro_orden: '4' },
    'MON_MER_18_29': { celda: 'F19', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Mercurio', filtro_orden: '4' },
    'MON_MER_30_59': { celda: 'G19', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Mercurio', filtro_orden: '4' },
    'MON_MER_60_M':  { celda: 'H19', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Dosaje de Mercurio', filtro_orden: '4' },

    // ORDEN 5: Hallazgos de niveles anormales de PLOMO en sangre
    'HAL_PLO_00_11': { celda: 'D21', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de PLOMO en sangre', filtro_orden: '5' },
    'HAL_PLO_12_17': { celda: 'E21', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de PLOMO en sangre', filtro_orden: '5' },
    'HAL_PLO_18_29': { celda: 'F21', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de PLOMO en sangre', filtro_orden: '5' },
    'HAL_PLO_30_59': { celda: 'G21', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de PLOMO en sangre', filtro_orden: '5' },
    'HAL_PLO_60_M':  { celda: 'H21', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de PLOMO en sangre', filtro_orden: '5' },

    // ORDEN 6: Hallazgos de niveles anormales de MERCURIO en la orina
    'HAL_MER_00_11': { celda: 'D22', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de MERCURIO en la orina', filtro_orden: '6' },
    'HAL_MER_12_17': { celda: 'E22', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de MERCURIO en la orina', filtro_orden: '6' },
    'HAL_MER_18_29': { celda: 'F22', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de MERCURIO en la orina', filtro_orden: '6' },
    'HAL_MER_30_59': { celda: 'G22', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de MERCURIO en la orina', filtro_orden: '6' },
    'HAL_MER_60_M':  { celda: 'H22', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de MERCURIO en la orina', filtro_orden: '6' },

    // ORDEN 7: Hallazgos de niveles anormales de ARSÉNICO en la orina
    'HAL_ARS_00_11': { celda: 'D23', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de ARSÉNICO en la orina', filtro_orden: '7' },
    'HAL_ARS_12_17': { celda: 'E23', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de ARSÉNICO en la orina', filtro_orden: '7' },
    'HAL_ARS_18_29': { celda: 'F23', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de ARSÉNICO en la orina', filtro_orden: '7' },
    'HAL_ARS_30_59': { celda: 'G23', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de ARSÉNICO en la orina', filtro_orden: '7' },
    'HAL_ARS_60_M':  { celda: 'H23', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de ARSÉNICO en la orina', filtro_orden: '7' },

    // ORDEN 8: Hallazgos de niveles anormales de CADMIO en la orina
    'HAL_CAD_00_11': { celda: 'D24', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de CADMIO en la orina', filtro_orden: '8' },
    'HAL_CAD_12_17': { celda: 'E24', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de CADMIO en la orina', filtro_orden: '8' },
    'HAL_CAD_18_29': { celda: 'F24', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de CADMIO en la orina', filtro_orden: '8' },
    'HAL_CAD_30_59': { celda: 'G24', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de CADMIO en la orina', filtro_orden: '8' },
    'HAL_CAD_60_M':  { celda: 'H24', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Hallazgos de niveles anormales de CADMIO en la orina', filtro_orden: '8' },

    // ORDEN 9: Evaluación y Entrega de Resultados de Diagnóstico
    'ENTREGA_00_11': { celda: 'D27', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación y Entrega de Resultados de Diagnóstico', filtro_orden: '9' },
    'ENTREGA_12_17': { celda: 'E27', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación y Entrega de Resultados de Diagnóstico', filtro_orden: '9' },
    'ENTREGA_18_29': { celda: 'F27', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación y Entrega de Resultados de Diagnóstico', filtro_orden: '9' },
    'ENTREGA_30_59': { celda: 'G27', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación y Entrega de Resultados de Diagnóstico', filtro_orden: '9' },
    'ENTREGA_60_M':  { celda: 'H27', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Evaluación y Entrega de Resultados de Diagnóstico', filtro_orden: '9' },

    // ORDEN 10: Consejería preventiva...
    'CONSEJ_00_11':  { celda: 'D29', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Consejería preventiva...', filtro_orden: '10' },
    'CONSEJ_12_17':  { celda: 'E29', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Consejería preventiva...', filtro_orden: '10' },
    'CONSEJ_18_29':  { celda: 'F29', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Consejería preventiva...', filtro_orden: '10' },
    'CONSEJ_30_59':  { celda: 'G29', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Consejería preventiva...', filtro_orden: '10' },
    'CONSEJ_60_M':   { celda: 'H29', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Consejería preventiva...', filtro_orden: '10' },

    // ORDEN 11: Evaluación Médica + Efecto Tóxico de metales: Arsenico...
    'EVAL_ARS_00_11': { celda: 'D31', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Arsenico...', filtro_orden: '11' },
    'EVAL_ARS_12_17': { celda: 'E31', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Arsenico...', filtro_orden: '11' },
    'EVAL_ARS_18_29': { celda: 'F31', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Arsenico...', filtro_orden: '11' },
    'EVAL_ARS_30_59': { celda: 'G31', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Arsenico...', filtro_orden: '11' },
    'EVAL_ARS_60_M':  { celda: 'H31', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Arsenico...', filtro_orden: '11' },

    // ORDEN 12: Evaluación Médica + Efecto Tóxico de metales: Cadmio...
    'EVAL_CAD_00_11': { celda: 'D32', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Cadmio...', filtro_orden: '12' },
    'EVAL_CAD_12_17': { celda: 'E32', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Cadmio...', filtro_orden: '12' },
    'EVAL_CAD_18_29': { celda: 'F32', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Cadmio...', filtro_orden: '12' },
    'EVAL_CAD_30_59': { celda: 'G32', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Cadmio...', filtro_orden: '12' },
    'EVAL_CAD_60_M':  { celda: 'H32', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Cadmio...', filtro_orden: '12' },

    // ORDEN 13: Evaluación Médica + Efecto Tóxico de metales: Mercurio...
    'EVAL_MER_00_11': { celda: 'D33', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Mercurio...', filtro_orden: '13' },
    'EVAL_MER_12_17': { celda: 'E33', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Mercurio...', filtro_orden: '13' },
    'EVAL_MER_18_29': { celda: 'F33', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Mercurio...', filtro_orden: '13' },
    'EVAL_MER_30_59': { celda: 'G33', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Mercurio...', filtro_orden: '13' },
    'EVAL_MER_60_M':  { celda: 'H33', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Mercurio...', filtro_orden: '13' },

    // ORDEN 14: Evaluación Médica + Efecto Tóxico de metales: Plomo...
    'EVAL_PLO_00_11': { celda: 'D34', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Plomo...', filtro_orden: '14' },
    'EVAL_PLO_12_17': { celda: 'E34', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Plomo...', filtro_orden: '14' },
    'EVAL_PLO_18_29': { celda: 'F34', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Plomo...', filtro_orden: '14' },
    'EVAL_PLO_30_59': { celda: 'G34', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Plomo...', filtro_orden: '14' },
    'EVAL_PLO_60_M':  { celda: 'H34', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Evaluación Médica + Efecto Tóxico de metales: Plomo...', filtro_orden: '14' },

    // ORDEN 15: Administración de Tratamiento a criterio médico
    'ADM_TRAT_00_11': { celda: 'D38', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Administración de Tratamiento a criterio médico', filtro_orden: '15' },
    'ADM_TRAT_12_17': { celda: 'E38', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Administración de Tratamiento a criterio médico', filtro_orden: '15' },
    'ADM_TRAT_18_29': { celda: 'F38', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Administración de Tratamiento a criterio médico', filtro_orden: '15' },
    'ADM_TRAT_30_59': { celda: 'G38', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Administración de Tratamiento a criterio médico', filtro_orden: '15' },
    'ADM_TRAT_60_M':  { celda: 'H38', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Administración de Tratamiento a criterio médico', filtro_orden: '15' },

    // ORDEN 16: Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I
    'CON_AMB1_00_11': { celda: 'D40', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I', filtro_orden: '16' },
    'CON_AMB1_12_17': { celda: 'E40', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I', filtro_orden: '16' },
    'CON_AMB1_18_29': { celda: 'F40', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I', filtro_orden: '16' },
    'CON_AMB1_30_59': { celda: 'G40', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I', filtro_orden: '16' },
    'CON_AMB1_60_M':  { celda: 'H40', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención I', filtro_orden: '16' },

    // ORDEN 17: Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II
    'CON_AMB2_00_11': { celda: 'D41', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II', filtro_orden: '17' },
    'CON_AMB2_12_17': { celda: 'E41', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II', filtro_orden: '17' },
    'CON_AMB2_18_29': { celda: 'F41', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II', filtro_orden: '17' },
    'CON_AMB2_30_59': { celda: 'G41', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II', filtro_orden: '17' },
    'CON_AMB2_60_M':  { celda: 'H41', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención II', filtro_orden: '17' },

    // ORDEN 18: Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III
    'CON_AMB3_00_11': { celda: 'D42', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III', filtro_orden: '18' },
    'CON_AMB3_12_17': { celda: 'E42', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III', filtro_orden: '18' },
    'CON_AMB3_18_29': { celda: 'F42', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III', filtro_orden: '18' },
    'CON_AMB3_30_59': { celda: 'G42', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III', filtro_orden: '18' },
    'CON_AMB3_60_M':  { celda: 'H42', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Consulta Ambulatoria - Evaluación Paciente Nuevo en el Nivel de Atención III', filtro_orden: '18' },

    // ORDEN 19: Referencias
    'REF_00_11': { celda: 'D44', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Referencias', filtro_orden: '19' },
    'REF_12_17': { celda: 'E44', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Referencias', filtro_orden: '19' },
    'REF_18_29': { celda: 'F44', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Referencias', filtro_orden: '19' },
    'REF_30_59': { celda: 'G44', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Referencias', filtro_orden: '19' },
    'REF_60_M':  { celda: 'H44', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Referencias', filtro_orden: '19' },

    // ORDEN 20: Contrareferencias
    'CONTRAREF_00_11': { celda: 'D45', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Contrareferencias', filtro_orden: '20' },
    'CONTRAREF_12_17': { celda: 'E45', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Contrareferencias', filtro_orden: '20' },
    'CONTRAREF_18_29': { celda: 'F45', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Contrareferencias', filtro_orden: '20' },
    'CONTRAREF_30_59': { celda: 'G45', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Contrareferencias', filtro_orden: '20' },
    'CONTRAREF_60_M':  { celda: 'H45', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Contrareferencias', filtro_orden: '20' },

    // ORDEN 21: Plan de atención integral de salud...
    'PLAN_INT_00_11': { celda: 'D47', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Plan de atención integral de salud...', filtro_orden: '21' },
    'PLAN_INT_12_17': { celda: 'E47', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Plan de atención integral de salud...', filtro_orden: '21' },
    'PLAN_INT_18_29': { celda: 'F47', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Plan de atención integral de salud...', filtro_orden: '21' },
    'PLAN_INT_30_59': { celda: 'G47', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Plan de atención integral de salud...', filtro_orden: '21' },
    'PLAN_INT_60_M':  { celda: 'H47', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Plan de atención integral de salud...', filtro_orden: '21' },

    // ORDEN 22: Examen de laboratorio para evaluar perfil...
    'EXAM_LAB_00_11': { celda: 'D49', campo: '00a-11a', tabla: '02_MONITOREO', filtro_actividad: 'Examen de laboratorio para evaluar perfil...', filtro_orden: '22' },
    'EXAM_LAB_12_17': { celda: 'E49', campo: '12a-17a', tabla: '02_MONITOREO', filtro_actividad: 'Examen de laboratorio para evaluar perfil...', filtro_orden: '22' },
    'EXAM_LAB_18_29': { celda: 'F49', campo: '18a-29a', tabla: '02_MONITOREO', filtro_actividad: 'Examen de laboratorio para evaluar perfil...', filtro_orden: '22' },
    'EXAM_LAB_30_59': { celda: 'G49', campo: '30a-59a', tabla: '02_MONITOREO', filtro_actividad: 'Examen de laboratorio para evaluar perfil...', filtro_orden: '22' },
    'EXAM_LAB_60_M':  { celda: 'H49', campo: '60a+',    tabla: '02_MONITOREO', filtro_actividad: 'Examen de laboratorio para evaluar perfil...', filtro_orden: '22' },
    // ========================================================================
    // SECCIÓN 03: 03_MORBILIDAD (27 Diagnósticos)
    // ========================================================================

    // Fila 39: Anemia Nutricional (D508+D509+D518+D528) aqui va las celdad 54
    '03_MORB_1_00': { celda: 'D54', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia Nutricional (D508+D509+D518+D528)', filtro_orden: '1' },
    '03_MORB_1_12': { celda: 'E54', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia Nutricional (D508+D509+D518+D528)', filtro_orden: '1' },
    '03_MORB_1_18': { celda: 'F54', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia Nutricional (D508+D509+D518+D528)', filtro_orden: '1' },
    '03_MORB_1_30': { celda: 'G54', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia Nutricional (D508+D509+D518+D528)', filtro_orden: '1' },
    '03_MORB_1_60': { celda: 'H54', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia Nutricional (D508+D509+D518+D528)', filtro_orden: '1' },

    // Fila 40: Anemia no especificada (D64.9)
    '03_MORB_2_00': { celda: 'D55', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia no especificada (D64.9)', filtro_orden: '2' },
    '03_MORB_2_12': { celda: 'E55', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia no especificada (D64.9)', filtro_orden: '2' },
    '03_MORB_2_18': { celda: 'F55', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia no especificada (D64.9)', filtro_orden: '2' },
    '03_MORB_2_30': { celda: 'G55', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia no especificada (D64.9)', filtro_orden: '2' },
    '03_MORB_2_60': { celda: 'H55', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia no especificada (D64.9)', filtro_orden: '2' },

    // Fila 41: Anemia sideroblastica secundaria (D64.1)
    '03_MORB_3_00': { celda: 'D56', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia sideroblastica secundaria (D64.1)', filtro_orden: '3' },
    '03_MORB_3_12': { celda: 'E56', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia sideroblastica secundaria (D64.1)', filtro_orden: '3' },
    '03_MORB_3_18': { celda: 'F56', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia sideroblastica secundaria (D64.1)', filtro_orden: '3' },
    '03_MORB_3_30': { celda: 'G56', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia sideroblastica secundaria (D64.1)', filtro_orden: '3' },
    '03_MORB_3_60': { celda: 'H56', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Anemia sideroblastica secundaria (D64.1)', filtro_orden: '3' },

    // Fila 42: Enfermedad de la sangre y de los órganos hematopoyéticos (D50-D80)
    '03_MORB_4_00': { celda: 'D57', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', filtro_orden: '4' },
    '03_MORB_4_12': { celda: 'E57', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', filtro_orden: '4' },
    '03_MORB_4_18': { celda: 'F57', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', filtro_orden: '4' },
    '03_MORB_4_30': { celda: 'G57', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', filtro_orden: '4' },
    '03_MORB_4_60': { celda: 'H57', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', filtro_orden: '4' },

    // Fila 43: Enfermedad de Bowen (D23)
    '03_MORB_5_00': { celda: 'D58', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', filtro_orden: '5' },
    '03_MORB_5_12': { celda: 'E58', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', filtro_orden: '5' },
    '03_MORB_5_18': { celda: 'F58', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', filtro_orden: '5' },
    '03_MORB_5_30': { celda: 'G58', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', filtro_orden: '5' },
    '03_MORB_5_60': { celda: 'H58', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', filtro_orden: '5' },

    // Fila 44: Carcinoma espinocelular (C44)
    '03_MORB_6_00': { celda: 'D59', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', filtro_orden: '6' },
    '03_MORB_6_12': { celda: 'E59', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', filtro_orden: '6' },
    '03_MORB_6_18': { celda: 'F59', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', filtro_orden: '6' },
    '03_MORB_6_30': { celda: 'G59', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', filtro_orden: '6' },
    '03_MORB_6_60': { celda: 'H59', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', filtro_orden: '6' },

    // Fila 45: Carcinoma basocelular (D04)
    '03_MORB_7_00': { celda: 'D60', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', filtro_orden: '7' },
    '03_MORB_7_12': { celda: 'E60', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', filtro_orden: '7' },
    '03_MORB_7_18': { celda: 'F60', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', filtro_orden: '7' },
    '03_MORB_7_30': { celda: 'G60', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', filtro_orden: '7' },
    '03_MORB_7_60': { celda: 'H60', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', filtro_orden: '7' },

    // Fila 46: Neoplasias (Lesiones) benignas de piel (D23)
    '03_MORB_8_00': { celda: 'D61', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neoplasias (Lesiones) benignas de piel (D23)', filtro_orden: '8' },
    '03_MORB_8_12': { celda: 'E61', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neoplasias (Lesiones) benignas de piel (D23)', filtro_orden: '8' },
    '03_MORB_8_18': { celda: 'F61', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neoplasias (Lesiones) benignas de piel (D23)', filtro_orden: '8' },
    '03_MORB_8_30': { celda: 'G61', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neoplasias (Lesiones) benignas de piel (D23)', filtro_orden: '8' },
    '03_MORB_8_60': { celda: 'H61', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neoplasias (Lesiones) benignas de piel (D23)', filtro_orden: '8' },

    // Fila 47: Neuropatía periferica (G900)
    '03_MORB_9_00': { celda: 'D62', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neuropatía periferica (G900)', filtro_orden: '9' },
    '03_MORB_9_12': { celda: 'E62', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neuropatía periferica (G900)', filtro_orden: '9' },
    '03_MORB_9_18': { celda: 'F62', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neuropatía periferica (G900)', filtro_orden: '9' },
    '03_MORB_9_30': { celda: 'G62', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neuropatía periferica (G900)', filtro_orden: '9' },
    '03_MORB_9_60': { celda: 'H62', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Neuropatía periferica (G900)', filtro_orden: '9' },

    // Fila 48: Polineuropatía (G618+G619)
    '03_MORB_10_00': { celda: 'D63', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Polineuropatía (G618+G619)', filtro_orden: '10' },
    '03_MORB_10_12': { celda: 'E63', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Polineuropatía (G618+G619)', filtro_orden: '10' },
    '03_MORB_10_18': { celda: 'F63', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Polineuropatía (G618+G619)', filtro_orden: '10' },
    '03_MORB_10_30': { celda: 'G63', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Polineuropatía (G618+G619)', filtro_orden: '10' },
    '03_MORB_10_60': { celda: 'H63', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Polineuropatía (G618+G619)', filtro_orden: '10' },

    // Fila 49: Deterioro cognitivo leve (G31.84)
    '03_MORB_11_00': { celda: 'D64', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Deterioro cognitivo leve (G31.84)', filtro_orden: '11' },
    '03_MORB_11_12': { celda: 'E64', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Deterioro cognitivo leve (G31.84)', filtro_orden: '11' },
    '03_MORB_11_18': { celda: 'F64', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Deterioro cognitivo leve (G31.84)', filtro_orden: '11' },
    '03_MORB_11_30': { celda: 'G64', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Deterioro cognitivo leve (G31.84)', filtro_orden: '11' },
    '03_MORB_11_60': { celda: 'H64', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Deterioro cognitivo leve (G31.84)', filtro_orden: '11' },

    // Fila 50: Otros déficits cognitivos especificados (R41.84)
    '03_MORB_12_00': { celda: 'D65', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros déficits cognitivos especificados (R41.84)', filtro_orden: '12' },
    '03_MORB_12_12': { celda: 'E65', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros déficits cognitivos especificados (R41.84)', filtro_orden: '12' },
    '03_MORB_12_18': { celda: 'F65', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros déficits cognitivos especificados (R41.84)', filtro_orden: '12' },
    '03_MORB_12_30': { celda: 'G65', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros déficits cognitivos especificados (R41.84)', filtro_orden: '12' },
    '03_MORB_12_60': { celda: 'H65', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros déficits cognitivos especificados (R41.84)', filtro_orden: '12' },

    // Fila 51: Gastritis no específica (K29.7)
    '03_MORB_13_00': { celda: 'D66', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Gastritis no específica (K29.7)', filtro_orden: '13' },
    '03_MORB_13_12': { celda: 'E66', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Gastritis no específica (K29.7)', filtro_orden: '13' },
    '03_MORB_13_18': { celda: 'F66', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Gastritis no específica (K29.7)', filtro_orden: '13' },
    '03_MORB_13_30': { celda: 'G66', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Gastritis no específica (K29.7)', filtro_orden: '13' },
    '03_MORB_13_60': { celda: 'H66', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Gastritis no específica (K29.7)', filtro_orden: '13' },

    // Fila 52: Perdida anormal de peso (R63.4)
    '03_MORB_14_00': { celda: 'D67', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Perdida anormal de peso (R63.4)', filtro_orden: '14' },
    '03_MORB_14_12': { celda: 'E67', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Perdida anormal de peso (R63.4)', filtro_orden: '14' },
    '03_MORB_14_18': { celda: 'F67', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Perdida anormal de peso (R63.4)', filtro_orden: '14' },
    '03_MORB_14_30': { celda: 'G67', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Perdida anormal de peso (R63.4)', filtro_orden: '14' },
    '03_MORB_14_60': { celda: 'H67', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Perdida anormal de peso (R63.4)', filtro_orden: '14' },

    // Fila 53: Pancitopenia (D61.81)
    '03_MORB_15_00': { celda: 'D68', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Pancitopenia (D61.81)', filtro_orden: '15' },
    '03_MORB_15_12': { celda: 'E68', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Pancitopenia (D61.81)', filtro_orden: '15' },
    '03_MORB_15_18': { celda: 'F68', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Pancitopenia (D61.81)', filtro_orden: '15' },
    '03_MORB_15_30': { celda: 'G68', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Pancitopenia (D61.81)', filtro_orden: '15' },
    '03_MORB_15_60': { celda: 'H68', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Pancitopenia (D61.81)', filtro_orden: '15' },

    // Fila 54: Policitemia (D45+D75.1)
    '03_MORB_16_00': { celda: 'D69', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Policitemia (D45+D75.1)', filtro_orden: '16' },
    '03_MORB_16_12': { celda: 'E69', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Policitemia (D45+D75.1)', filtro_orden: '16' },
    '03_MORB_16_18': { celda: 'F69', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Policitemia (D45+D75.1)', filtro_orden: '16' },
    '03_MORB_16_30': { celda: 'G69', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Policitemia (D45+D75.1)', filtro_orden: '16' },
    '03_MORB_16_60': { celda: 'H69', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Policitemia (D45+D75.1)', filtro_orden: '16' },

    // Fila 55: Higado graso (K76.0)
    '03_MORB_17_00': { celda: 'D70', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Higado graso (K76.0)', filtro_orden: '17' },
    '03_MORB_17_12': { celda: 'E70', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Higado graso (K76.0)', filtro_orden: '17' },
    '03_MORB_17_18': { celda: 'F70', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Higado graso (K76.0)', filtro_orden: '17' },
    '03_MORB_17_30': { celda: 'G70', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Higado graso (K76.0)', filtro_orden: '17' },
    '03_MORB_17_60': { celda: 'H70', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Higado graso (K76.0)', filtro_orden: '17' },

    // Fila 56: Otros trastornos de los globulos blancos (D60-D77)
    '03_MORB_18_00': { celda: 'D71', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros trastornos de los globulos blancos (D60-D77)', filtro_orden: '18' },
    '03_MORB_18_12': { celda: 'E71', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros trastornos de los globulos blancos (D60-D77)', filtro_orden: '18' },
    '03_MORB_18_18': { celda: 'F71', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros trastornos de los globulos blancos (D60-D77)', filtro_orden: '18' },
    '03_MORB_18_30': { celda: 'G71', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros trastornos de los globulos blancos (D60-D77)', filtro_orden: '18' },
    '03_MORB_18_60': { celda: 'H71', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Otros trastornos de los globulos blancos (D60-D77)', filtro_orden: '18' },

    // Fila 57: Arritmias cardiaca no especificada (I498+I499)
    '03_MORB_19_00': { celda: 'D72', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Arritmias cardiaca no especificada (I498+I499)', filtro_orden: '19' },
    '03_MORB_19_12': { celda: 'E72', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Arritmias cardiaca no especificada (I498+I499)', filtro_orden: '19' },
    '03_MORB_19_18': { celda: 'F72', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Arritmias cardiaca no especificada (I498+I499)', filtro_orden: '19' },
    '03_MORB_19_30': { celda: 'G72', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Arritmias cardiaca no especificada (I498+I499)', filtro_orden: '19' },
    '03_MORB_19_60': { celda: 'H72', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Arritmias cardiaca no especificada (I498+I499)', filtro_orden: '19' },

    // Fila 58: Artropatias reactivas (M28+M29)
    '03_MORB_20_00': { celda: 'D73', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Artropatias reactivas (M28+M29)', filtro_orden: '20' },
    '03_MORB_20_12': { celda: 'E73', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Artropatias reactivas (M28+M29)', filtro_orden: '20' },
    '03_MORB_20_18': { celda: 'F73', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Artropatias reactivas (M28+M29)', filtro_orden: '20' },
    '03_MORB_20_30': { celda: 'G73', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Artropatias reactivas (M28+M29)', filtro_orden: '20' },
    '03_MORB_20_60': { celda: 'H73', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Artropatias reactivas (M28+M29)', filtro_orden: '20' },

    // Fila 59: Retardo en el desarrollo (R620)
    '03_MORB_21_00': { celda: 'D74', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Retardo en el desarrollo (R620)', filtro_orden: '21' },
    '03_MORB_21_12': { celda: 'E74', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Retardo en el desarrollo (R620)', filtro_orden: '21' },
    '03_MORB_21_18': { celda: 'F74', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Retardo en el desarrollo (R620)', filtro_orden: '21' },
    '03_MORB_21_30': { celda: 'G74', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Retardo en el desarrollo (R620)', filtro_orden: '21' },
    '03_MORB_21_60': { celda: 'H74', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Retardo en el desarrollo (R620)', filtro_orden: '21' },

    // Fila 60: Dificultad de aprendizaje (F81.8 + F81.9)
    '03_MORB_22_00': { celda: 'D75', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Dificultad de aprendizaje (F81.8 + F81.9)', filtro_orden: '22' },
    '03_MORB_22_12': { celda: 'E75', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Dificultad de aprendizaje (F81.8 + F81.9)', filtro_orden: '22' },
    '03_MORB_22_18': { celda: 'F75', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Dificultad de aprendizaje (F81.8 + F81.9)', filtro_orden: '22' },
    '03_MORB_22_30': { celda: 'G75', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Dificultad de aprendizaje (F81.8 + F81.9)', filtro_orden: '22' },
    '03_MORB_22_60': { celda: 'H75', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Dificultad de aprendizaje (F81.8 + F81.9)', filtro_orden: '22' },

    // Fila 61: Hipertensión Esencial Primaria (I10X)
    '03_MORB_23_00': { celda: 'D76', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', filtro_orden: '23' },
    '03_MORB_23_12': { celda: 'E76', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', filtro_orden: '23' },
    '03_MORB_23_18': { celda: 'F76', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', filtro_orden: '23' },
    '03_MORB_23_30': { celda: 'G76', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', filtro_orden: '23' },
    '03_MORB_23_60': { celda: 'H76', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', filtro_orden: '23' },

    // Fila 62: Conjuntivitis
    '03_MORB_24_00': { celda: 'D77', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Conjuntivitis', filtro_orden: '24' },
    '03_MORB_24_12': { celda: 'E77', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Conjuntivitis', filtro_orden: '24' },
    '03_MORB_24_18': { celda: 'F77', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Conjuntivitis', filtro_orden: '24' },
    '03_MORB_24_30': { celda: 'G77', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Conjuntivitis', filtro_orden: '24' },
    '03_MORB_24_60': { celda: 'H77', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Conjuntivitis', filtro_orden: '24' },

    // Fila 63: Cataratas
    '03_MORB_25_00': { celda: 'D78', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Cataratas', filtro_orden: '25' },
    '03_MORB_25_12': { celda: 'E78', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Cataratas', filtro_orden: '25' },
    '03_MORB_25_18': { celda: 'F78', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Cataratas', filtro_orden: '25' },
    '03_MORB_25_30': { celda: 'G78', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Cataratas', filtro_orden: '25' },
    '03_MORB_25_60': { celda: 'H78', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Cataratas', filtro_orden: '25' },

    // Fila 64: Infecciones Respiratorias Agudas Complicadas
    '03_MORB_26_00': { celda: 'D79', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas Complicadas', filtro_orden: '26' },
    '03_MORB_26_12': { celda: 'E79', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas Complicadas', filtro_orden: '26' },
    '03_MORB_26_18': { celda: 'F79', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas Complicadas', filtro_orden: '26' },
    '03_MORB_26_30': { celda: 'G79', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas Complicadas', filtro_orden: '26' },
    '03_MORB_26_60': { celda: 'H79', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas Complicadas', filtro_orden: '26' },

    // Fila 65: Infecciones Respiratorias Agudas No Complicadas
    '03_MORB_27_00': { celda: 'D80', campo: '0a-11a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas No Complicadas', filtro_orden: '27' },
    '03_MORB_27_12': { celda: 'E80', campo: '12a-17a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas No Complicadas', filtro_orden: '27' },
    '03_MORB_27_18': { celda: 'F80', campo: '18a-29a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas No Complicadas', filtro_orden: '27' },
    '03_MORB_27_30': { celda: 'G80', campo: '30a-59a', tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas No Complicadas', filtro_orden: '27' },
    '03_MORB_27_60': { celda: 'H80', campo: '60a+',    tabla: '03_MORBILIDAD', filtro_diagnostico: 'Infecciones Respiratorias Agudas No Complicadas', filtro_orden: '27' },

    // ========================================================================
    // SECCIÓN 4: 04_SIGNOS_Y_SINTOMAS
    // ========================================================================
    
    // ORDEN 1: Anemia por Deficiencia de Hierro sin Especificación
    '04_SIG_ANEHIE_00': { celda: 'D84', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS',  filtro_orden: '1' },
    '04_SIG_ANEHIE_12': { celda: 'E84', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS',  filtro_orden: '1' },
    '04_SIG_ANEHIE_18': { celda: 'F84', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS',  filtro_orden: '1' },
    '04_SIG_ANEHIE_30': { celda: 'G84', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS',  filtro_orden: '1' },
    '04_SIG_ANEHIE_60': { celda: 'H84', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS',  filtro_orden: '1' },

    // ORDEN 2: Anemia que afecta al Embarazo, Parto o Puerperio
    '04_SIG_ANEEMB_00': { celda: 'D85', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '04_SIG_ANEEMB_12': { celda: 'E85', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '04_SIG_ANEEMB_18': { celda: 'F85', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '04_SIG_ANEEMB_30': { celda: 'G85', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '04_SIG_ANEEMB_60': { celda: 'H85', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },

    // ORDEN 3: Administración de Tratamiento (Anemia)
    '04_SIG_ADMTRAT_00': { celda: 'D86', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '04_SIG_ADMTRAT_12': { celda: 'E86', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '04_SIG_ADMTRAT_18': { celda: 'F86', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '04_SIG_ADMTRAT_30': { celda: 'G86', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '04_SIG_ADMTRAT_60': { celda: 'H86', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },

    // ORDEN 4: Asma No Especificada
    '04_SIG_ASMA_00': { celda: 'D87', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '04_SIG_ASMA_12': { celda: 'E87', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '04_SIG_ASMA_18': { celda: 'F87', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '04_SIG_ASMA_30': { celda: 'G87', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '04_SIG_ASMA_60': { celda: 'H87', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },

    // ORDEN 5: Cefalea
    '04_SIG_CEFALE_00': { celda: 'D88', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cefalea', filtro_orden: '5' },
    '04_SIG_CEFALE_12': { celda: 'E88', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cefalea', filtro_orden: '5' },
    '04_SIG_CEFALE_18': { celda: 'F88', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cefalea', filtro_orden: '5' },
    '04_SIG_CEFALE_30': { celda: 'G88', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cefalea', filtro_orden: '5' },
    '04_SIG_CEFALE_60': { celda: 'H88', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cefalea', filtro_orden: '5' },

    // ORDEN 6: Masa No Especificada en la Mama
    '04_SIG_MASA_00': { celda: 'D89', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '6' },
    '04_SIG_MASA_12': { celda: 'E89', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '6' },
    '04_SIG_MASA_18': { celda: 'F89', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '6' },
    '04_SIG_MASA_30': { celda: 'G89', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '6' },
    '04_SIG_MASA_60': { celda: 'H89', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '6' },

    // ORDEN 7: Dolor de hueso
    '04_SIG_DOLHUE_00': { celda: 'D90', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor de hueso', filtro_orden: '7' },
    '04_SIG_DOLHUE_12': { celda: 'E90', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor de hueso', filtro_orden: '7' },
    '04_SIG_DOLHUE_18': { celda: 'F90', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor de hueso', filtro_orden: '7' },
    '04_SIG_DOLHUE_30': { celda: 'G90', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor de hueso', filtro_orden: '7' },
    '04_SIG_DOLHUE_60': { celda: 'H90', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor de hueso', filtro_orden: '7' },

    // ORDEN 8: Dolor articular
    '04_SIG_DOLART_00': { celda: 'D91', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor articular', filtro_orden: '8' },
    '04_SIG_DOLART_12': { celda: 'E91', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor articular', filtro_orden: '8' },
    '04_SIG_DOLART_18': { celda: 'F91', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor articular', filtro_orden: '8' },
    '04_SIG_DOLART_30': { celda: 'G91', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor articular', filtro_orden: '8' },
    '04_SIG_DOLART_60': { celda: 'H91', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor articular', filtro_orden: '8' },

    // ORDEN 9: Cansancio
    '04_SIG_CANSAN_00': { celda: 'D92', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cansancio', filtro_orden: '9' },
    '04_SIG_CANSAN_12': { celda: 'E92', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cansancio', filtro_orden: '9' },
    '04_SIG_CANSAN_18': { celda: 'F92', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cansancio', filtro_orden: '9' },
    '04_SIG_CANSAN_30': { celda: 'G92', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cansancio', filtro_orden: '9' },
    '04_SIG_CANSAN_60': { celda: 'H92', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Cansancio', filtro_orden: '9' },

    // ORDEN 10: Dolor abdominal
    '04_SIG_DOLABD_00': { celda: 'D93', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor abdominal', filtro_orden: '10' },
    '04_SIG_DOLABD_12': { celda: 'E93', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor abdominal', filtro_orden: '10' },
    '04_SIG_DOLABD_18': { celda: 'F93', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor abdominal', filtro_orden: '10' },
    '04_SIG_DOLABD_30': { celda: 'G93', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor abdominal', filtro_orden: '10' },
    '04_SIG_DOLABD_60': { celda: 'H93', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Dolor abdominal', filtro_orden: '10' },

    // ORDEN 11: Parestesia (hormigueo y adormecimiento)
    '04_SIG_PAREST_00': { celda: 'D94', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Parestesia (hormigueo y adormecimiento)', filtro_orden: '11' },
    '04_SIG_PAREST_12': { celda: 'E94', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Parestesia (hormigueo y adormecimiento)', filtro_orden: '11' },
    '04_SIG_PAREST_18': { celda: 'F94', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Parestesia (hormigueo y adormecimiento)', filtro_orden: '11' },
    '04_SIG_PAREST_30': { celda: 'G94', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Parestesia (hormigueo y adormecimiento)', filtro_orden: '11' },
    '04_SIG_PAREST_60': { celda: 'H94', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Parestesia (hormigueo y adormecimiento)', filtro_orden: '11' },

    // ORDEN 12: Ansiedad
    '04_SIG_ANSIED_00': { celda: 'D95', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Ansiedad', filtro_orden: '12' },
    '04_SIG_ANSIED_12': { celda: 'E95', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Ansiedad', filtro_orden: '12' },
    '04_SIG_ANSIED_18': { celda: 'F95', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Ansiedad', filtro_orden: '12' },
    '04_SIG_ANSIED_30': { celda: 'G95', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Ansiedad', filtro_orden: '12' },
    '04_SIG_ANSIED_60': { celda: 'H95', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Ansiedad', filtro_orden: '12' },

    // ORDEN 13: Depresión
    '04_SIG_DEPRES_00': { celda: 'D96', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Depresión', filtro_orden: '13' },
    '04_SIG_DEPRES_12': { celda: 'E96', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Depresión', filtro_orden: '13' },
    '04_SIG_DEPRES_18': { celda: 'F96', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Depresión', filtro_orden: '13' },
    '04_SIG_DEPRES_30': { celda: 'G96', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Depresión', filtro_orden: '13' },
    '04_SIG_DEPRES_60': { celda: 'H96', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Depresión', filtro_orden: '13' },

    // ORDEN 14: Queratodermia
    '04_SIG_QUERAT_00': { celda: 'D97', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Queratodermia', filtro_orden: '14' },
    '04_SIG_QUERAT_12': { celda: 'E97', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Queratodermia', filtro_orden: '14' },
    '04_SIG_QUERAT_18': { celda: 'F97', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Queratodermia', filtro_orden: '14' },
    '04_SIG_QUERAT_30': { celda: 'G97', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Queratodermia', filtro_orden: '14' },
    '04_SIG_QUERAT_60': { celda: 'H97', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Queratodermia', filtro_orden: '14' },

    // ORDEN 15: Hiperpigmentación
    '04_SIG_HIPERP_00': { celda: 'D98', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Hiperpigmentación', filtro_orden: '15' },
    '04_SIG_HIPERP_12': { celda: 'E98', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Hiperpigmentación', filtro_orden: '15' },
    '04_SIG_HIPERP_18': { celda: 'F98', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Hiperpigmentación', filtro_orden: '15' },
    '04_SIG_HIPERP_30': { celda: 'G98', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Hiperpigmentación', filtro_orden: '15' },
    '04_SIG_HIPERP_60': { celda: 'H98', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Hiperpigmentación', filtro_orden: '15' },

    // ORDEN 16: Leucodermia
    '04_SIG_LEUCOD_00': { celda: 'D99', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leucodermia', filtro_orden: '16' },
    '04_SIG_LEUCOD_12': { celda: 'E99', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leucodermia', filtro_orden: '16' },
    '04_SIG_LEUCOD_18': { celda: 'F99', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leucodermia', filtro_orden: '16' },
    '04_SIG_LEUCOD_30': { celda: 'G99', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leucodermia', filtro_orden: '16' },
    '04_SIG_LEUCOD_60': { celda: 'H99', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leucodermia', filtro_orden: '16' },

    // ORDEN 17: Leuconiquia
    '04_SIG_LEUCON_00': { celda: 'D100', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leuconiquia', filtro_orden: '17' },
    '04_SIG_LEUCON_12': { celda: 'E100', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leuconiquia', filtro_orden: '17' },
    '04_SIG_LEUCON_18': { celda: 'F100', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leuconiquia', filtro_orden: '17' },
    '04_SIG_LEUCON_30': { celda: 'G100', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leuconiquia', filtro_orden: '17' },
    '04_SIG_LEUCON_60': { celda: 'H100', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Leuconiquia', filtro_orden: '17' },

    // ORDEN 18: Sabor Metálico en la boca (Disgeusia)
    '04_SIG_SABORM_00': { celda: 'D101', campo: '00a-11a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Sabor Metálico en la boca (Disgeusia)', filtro_orden: '18' },
    '04_SIG_SABORM_12': { celda: 'E101', campo: '12a-17a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Sabor Metálico en la boca (Disgeusia)', filtro_orden: '18' },
    '04_SIG_SABORM_18': { celda: 'F101', campo: '18a-29a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Sabor Metálico en la boca (Disgeusia)', filtro_orden: '18' },
    '04_SIG_SABORM_30': { celda: 'G101', campo: '30a-59a', tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Sabor Metálico en la boca (Disgeusia)', filtro_orden: '18' },
    '04_SIG_SABORM_60': { celda: 'H101', campo: '60a+',    tabla: '04_SIGNOS_Y_SINTOMAS', filtro_actividad: 'Sabor Metálico en la boca (Disgeusia)', filtro_orden: '18' },

    // ========================================================================
    // SECCIÓN 5: 05_VISITAS_DOMICILIARIAS
    // ========================================================================
    
    // ORDEN 1: Visita Domiciliaria - 1° visita
    '05_VI_VISITA1_00': { celda: 'D105', campo: '00a-11a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 1° visita', filtro_orden: '1' },
    '05_VI_VISITA1_12': { celda: 'E105', campo: '12a-17a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 1° visita', filtro_orden: '1' },
    '05_VI_VISITA1_18': { celda: 'F105', campo: '18a-29a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 1° visita', filtro_orden: '1' },
    '05_VI_VISITA1_30': { celda: 'G105', campo: '30a-59a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 1° visita', filtro_orden: '1' },
    '05_VI_VISITA1_60': { celda: 'H105', campo: '60a+',    tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 1° visita', filtro_orden: '1' },

    // ORDEN 2: Visita Domiciliaria - 2° visita
    '05_VI_VISITA2_00': { celda: 'D106', campo: '00a-11a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 2° visita', filtro_orden: '2' },
    '05_VI_VISITA2_12': { celda: 'E106', campo: '12a-17a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 2° visita', filtro_orden: '2' },
    '05_VI_VISITA2_18': { celda: 'F106', campo: '18a-29a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 2° visita', filtro_orden: '2' },
    '05_VI_VISITA2_30': { celda: 'G106', campo: '30a-59a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 2° visita', filtro_orden: '2' },
    '05_VI_VISITA2_60': { celda: 'H106', campo: '60a+',    tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - 2° visita', filtro_orden: '2' },

    // ORDEN 3: Visita Domiciliaria - Con 3 a + visitas
    '05_VI_VISITA3_00': { celda: 'D107', campo: '00a-11a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - Con 3 a + visitas', filtro_orden: '3' },
    '05_VI_VISITA3_12': { celda: 'E107', campo: '12a-17a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - Con 3 a + visitas', filtro_orden: '3' },
    '05_VI_VISITA3_18': { celda: 'F107', campo: '18a-29a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - Con 3 a + visitas', filtro_orden: '3' },
    '05_VI_VISITA3_30': { celda: 'G107', campo: '30a-59a', tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - Con 3 a + visitas', filtro_orden: '3' },
    '05_VI_VISITA3_60': { celda: 'H107', campo: '60a+',    tabla: '05_VISITAS_DOMICILIARIAS', filtro_actividad: 'Visita Domiciliaria - Con 3 a + visitas', filtro_orden: '3' },

    // ========================================================================
    // SECCIÓN 6: 06_SALUD_BUCAL (Adaptado al SP y 11 columnas)
    // ========================================================================
    
    // ORDEN 1: Examen Estomatológico (Fila 113)
    '06_BUC_EXAMEN_TOTAL': { celda: 'C113', campo: 'TOTAL',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_0_6M':  { celda: 'D113', campo: '0-6m',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_7_11M': { celda: 'E113', campo: '7-11m',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_1_2A':  { celda: 'F113', campo: '1-2a',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_3_5A':  { celda: 'G113', campo: '3-5a',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_6_11A': { celda: 'H113', campo: '6-11a',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_ADOLE': { celda: 'I113', campo: 'Adolesc.', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_JOVEN': { celda: 'J113', campo: 'Joven',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_ADULT': { celda: 'K113', campo: 'Adulto',   tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_ADUMA': { celda: 'L113', campo: 'Adulto M', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },
    '06_BUC_EXAMEN_GESTA': { celda: 'M113', campo: 'Gestante', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Examen Estomatológico', filtro_orden: '1' },

    // ORDEN 2: Consulta Estomatológica (Fila 115)
    '06_BUC_CONSUL_TOTAL': { celda: 'C115', campo: 'TOTAL',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_0_6M':  { celda: 'D115', campo: '0-6m',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_7_11M': { celda: 'E115', campo: '7-11m',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_1_2A':  { celda: 'F115', campo: '1-2a',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_3_5A':  { celda: 'G115', campo: '3-5a',     tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_6_11A': { celda: 'H115', campo: '6-11a',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_ADOLE': { celda: 'I115', campo: 'Adolesc.', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_JOVEN': { celda: 'J115', campo: 'Joven',    tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_ADULT': { celda: 'K115', campo: 'Adulto',   tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_ADUMA': { celda: 'L115', campo: 'Adulto M', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },
    '06_BUC_CONSUL_GESTA': { celda: 'M115', campo: 'Gestante', tabla: '06_SALUD_BUCAL', filtro_actividad: 'Consulta Estomatológica', filtro_orden: '2' },

    // ========================================================================
    // SECCIÓN 7: 07_E_FISICA_NUTRICIONAL
    // ========================================================================
    
    // ORDEN 1: Examen médico general (Z000)
    '07_NUT_EXAMEN_00': { celda: 'D119', campo: '00a-11a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Examen médico general (Z000)', filtro_orden: '1' },
    '07_NUT_EXAMEN_12': { celda: 'E119', campo: '12a-17a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Examen médico general (Z000)', filtro_orden: '1' },
    '07_NUT_EXAMEN_18': { celda: 'F119', campo: '18a-29a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Examen médico general (Z000)', filtro_orden: '1' },
    '07_NUT_EXAMEN_30': { celda: 'G119', campo: '30a-59a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Examen médico general (Z000)', filtro_orden: '1' },
    '07_NUT_EXAMEN_60': { celda: 'H119', campo: '60a+',    tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Examen médico general (Z000)', filtro_orden: '1' },

    // ORDEN 2: Peso Normal (Z006)
    '07_NUT_PESO_N_00': { celda: 'D120', campo: '00a-11a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Peso Normal (Z006)', filtro_orden: '2' },
    '07_NUT_PESO_N_12': { celda: 'E120', campo: '12a-17a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Peso Normal (Z006)', filtro_orden: '2' },
    '07_NUT_PESO_N_18': { celda: 'F120', campo: '18a-29a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Peso Normal (Z006)', filtro_orden: '2' },
    '07_NUT_PESO_N_30': { celda: 'G120', campo: '30a-59a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Peso Normal (Z006)', filtro_orden: '2' },
    '07_NUT_PESO_N_60': { celda: 'H120', campo: '60a+',    tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Peso Normal (Z006)', filtro_orden: '2' },

    // ORDEN 3: Talla Normal (Z006)
    '07_NUT_TALLA__00': { celda: 'D121', campo: '00a-11a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Talla Normal (Z006)', filtro_orden: '3' },
    '07_NUT_TALLA__12': { celda: 'E121', campo: '12a-17a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Talla Normal (Z006)', filtro_orden: '3' },
    '07_NUT_TALLA__18': { celda: 'F121', campo: '18a-29a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Talla Normal (Z006)', filtro_orden: '3' },
    '07_NUT_TALLA__30': { celda: 'G121', campo: '30a-59a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Talla Normal (Z006)', filtro_orden: '3' },
    '07_NUT_TALLA__60': { celda: 'H121', campo: '60a+',    tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Talla Normal (Z006)', filtro_orden: '3' },

    // ORDEN 4: Suplementación de sulfato ferroso y ácido fólico (99199.26)
    '07_NUT_SUPLEM_00': { celda: 'D122', campo: '00a-11a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Suplementación de sulfato ferroso y ácido fólico (99199.26)', filtro_orden: '4' },
    '07_NUT_SUPLEM_12': { celda: 'E122', campo: '12a-17a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Suplementación de sulfato ferroso y ácido fólico (99199.26)', filtro_orden: '4' },
    '07_NUT_SUPLEM_18': { celda: 'F122', campo: '18a-29a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Suplementación de sulfato ferroso y ácido fólico (99199.26)', filtro_orden: '4' },
    '07_NUT_SUPLEM_30': { celda: 'G122', campo: '30a-59a', tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Suplementación de sulfato ferroso y ácido fólico (99199.26)', filtro_orden: '4' },
    '07_NUT_SUPLEM_60': { celda: 'H122', campo: '60a+',    tabla: '07_E_FISICA_NUTRICIONAL', filtro_actividad: 'Suplementación de sulfato ferroso y ácido fólico (99199.26)', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 8: 08_INMUNIZACIONES (Adaptado a Dosis Múltiples)
    // ========================================================================
    
    // ORDEN 01: Vacunación Antihepatitis Viral B (HvB) 90746 - 1° Dosis
    '08_INM_HVB1_00': { celda: 'E136', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '1' },
    '08_INM_HVB1_12': { celda: 'F136', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '1' },
    '08_INM_HVB1_18': { celda: 'G136', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '1' },
    '08_INM_HVB1_30': { celda: 'H136', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '1' },
    '08_INM_HVB1_60': { celda: 'I136', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '1' },

    // ORDEN 02: Vacunación Antihepatitis Viral B (HvB) 90746 - 2° Dosis
    '08_INM_HVB2_00': { celda: 'E137', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '2' },
    '08_INM_HVB2_12': { celda: 'F137', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '2' },
    '08_INM_HVB2_18': { celda: 'G137', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '2' },
    '08_INM_HVB2_30': { celda: 'H137', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '2' },
    '08_INM_HVB2_60': { celda: 'I137', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '2' },

    // ORDEN 03: Vacunación Antihepatitis Viral B (HvB) 90746 - 3° Dosis
    '08_INM_HVB3_00': { celda: 'E138', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '3' },
    '08_INM_HVB3_12': { celda: 'F138', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '3' },
    '08_INM_HVB3_18': { celda: 'G138', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '3' },
    '08_INM_HVB3_30': { celda: 'H138', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '3' },
    '08_INM_HVB3_60': { celda: 'I138', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '3' },

    // ORDEN 04: Vacuna contra la Influenza (Estacional) 90658
    '08_INM_INFLU_00': { celda: 'E139', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '4' },
    '08_INM_INFLU_12': { celda: 'F139', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '4' },
    '08_INM_INFLU_18': { celda: 'G139', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '4' },
    '08_INM_INFLU_30': { celda: 'H139', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '4' },
    '08_INM_INFLU_60': { celda: 'I139', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '4' },

    // ORDEN 05: Vacunación Diftotetánica (dT) 90714 - 1° Dosis
    '08_INM_DT1_00': { celda: 'E140', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '5' },
    '08_INM_DT1_12': { celda: 'F140', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '5' },
    '08_INM_DT1_18': { celda: 'G140', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '5' },
    '08_INM_DT1_30': { celda: 'H140', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '5' },
    '08_INM_DT1_60': { celda: 'I140', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '5' },

    // ORDEN 06: Vacunación Diftotetánica (dT) 90714 - 2° Dosis
    '08_INM_DT2_00': { celda: 'E141', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '6' },
    '08_INM_DT2_12': { celda: 'F141', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '6' },
    '08_INM_DT2_18': { celda: 'G141', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '6' },
    '08_INM_DT2_30': { celda: 'H141', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '6' },
    '08_INM_DT2_60': { celda: 'I141', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '6' },

    // ORDEN 07: Vacunación Diftotetánica (dT) 90714 - 3° Dosis
    '08_INM_DT3_00': { celda: 'E142', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '7' },
    '08_INM_DT3_12': { celda: 'F142', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '7' },
    '08_INM_DT3_18': { celda: 'G142', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '7' },
    '08_INM_DT3_30': { celda: 'H142', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '7' },
    '08_INM_DT3_60': { celda: 'I142', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '7' },

    // ORDEN 08: Vacuna contra Virus de Papiloma Humano - 1° Dosis
    '08_INM_VPH1_00': { celda: 'E143', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '8' },
    '08_INM_VPH1_12': { celda: 'F143', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '8' },
    '08_INM_VPH1_18': { celda: 'G143', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '8' },
    '08_INM_VPH1_30': { celda: 'H143', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '8' },
    '08_INM_VPH1_60': { celda: 'I143', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '8' },

    // ORDEN 09: Vacuna contra Virus de Papiloma Humano - 2° Dosis
    '08_INM_VPH2_00': { celda: 'E144', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '9' },
    '08_INM_VPH2_12': { celda: 'F144', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '9' },
    '08_INM_VPH2_18': { celda: 'G144', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '9' },
    '08_INM_VPH2_30': { celda: 'H144', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '9' },
    '08_INM_VPH2_60': { celda: 'I144', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '9' },

    // ORDEN 10: Vacuna Antiamarílica 90717
    '08_INM_AMAR_00': { celda: 'E145', campo: '00a-11a', tabla: '08_INMUNIZACIONES',   filtro_orden: '10' },
    '08_INM_AMAR_12': { celda: 'F145', campo: '12a-17a', tabla: '08_INMUNIZACIONES',   filtro_orden: '10' },
    '08_INM_AMAR_18': { celda: 'G145', campo: '18a-29a', tabla: '08_INMUNIZACIONES',   filtro_orden: '10' },
    '08_INM_AMAR_30': { celda: 'H145', campo: '30a-59a', tabla: '08_INMUNIZACIONES',   filtro_orden: '10' },
    '08_INM_AMAR_60': { celda: 'I145', campo: '60a+',    tabla: '08_INMUNIZACIONES',   filtro_orden: '10' },

    // ========================================================================
    // SECCIÓN 9: 09_EVALUACION_CLINICA (Actualizado al SP)
    // ========================================================================
    
    // ORDEN 01: Anemia por Deficiencia de Hierro sin Especificación
    '09_CLI_ANEDEF_00': { celda: 'D149', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia por Deficiencia de Hierro sin Especificación', filtro_orden: '1' },
    '09_CLI_ANEDEF_12': { celda: 'E149', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia por Deficiencia de Hierro sin Especificación', filtro_orden: '1' },
    '09_CLI_ANEDEF_18': { celda: 'F149', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia por Deficiencia de Hierro sin Especificación', filtro_orden: '1' },
    '09_CLI_ANEDEF_30': { celda: 'G149', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia por Deficiencia de Hierro sin Especificación', filtro_orden: '1' },
    '09_CLI_ANEDEF_60': { celda: 'H149', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia por Deficiencia de Hierro sin Especificación', filtro_orden: '1' },

    // ORDEN 02: Anemia que afecta al Embarazo, Parto o Puerperio
    '09_CLI_ANEEMB_00': { celda: 'D150', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '09_CLI_ANEEMB_12': { celda: 'E150', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '09_CLI_ANEEMB_18': { celda: 'F150', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '09_CLI_ANEEMB_30': { celda: 'G150', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },
    '09_CLI_ANEEMB_60': { celda: 'H150', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Anemia que afecta al Embarazo, Parto o Puerperio', filtro_orden: '2' },

    // ORDEN 03: Administración de Tratamiento (Anemia)
    '09_CLI_TRATAM_00': { celda: 'D151', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '09_CLI_TRATAM_12': { celda: 'E151', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '09_CLI_TRATAM_18': { celda: 'F151', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '09_CLI_TRATAM_30': { celda: 'G151', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },
    '09_CLI_TRATAM_60': { celda: 'H151', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Administración de Tratamiento (Anemia)', filtro_orden: '3' },

    // ORDEN 04: Asma No Especificada
    '09_CLI_ASMA_00': { celda: 'D152', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '09_CLI_ASMA_12': { celda: 'E152', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '09_CLI_ASMA_18': { celda: 'F152', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '09_CLI_ASMA_30': { celda: 'G152', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },
    '09_CLI_ASMA_60': { celda: 'H152', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Asma No Especificada', filtro_orden: '4' },

    // ORDEN 05: Hipertensión Esencial Primaria (Hipertensión Arterial)
    '09_CLI_HIPERT_00': { celda: 'D153', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Hipertensión Esencial Primaria (Hipertensión Arterial)', filtro_orden: '5' },
    '09_CLI_HIPERT_12': { celda: 'E153', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Hipertensión Esencial Primaria (Hipertensión Arterial)', filtro_orden: '5' },
    '09_CLI_HIPERT_18': { celda: 'F153', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Hipertensión Esencial Primaria (Hipertensión Arterial)', filtro_orden: '5' },
    '09_CLI_HIPERT_30': { celda: 'G153', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Hipertensión Esencial Primaria (Hipertensión Arterial)', filtro_orden: '5' },
    '09_CLI_HIPERT_60': { celda: 'H153', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Hipertensión Esencial Primaria (Hipertensión Arterial)', filtro_orden: '5' },

    // ORDEN 06: Cefalea
    '09_CLI_CEFALE_00': { celda: 'D154', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Cefalea', filtro_orden: '6' },
    '09_CLI_CEFALE_12': { celda: 'E154', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Cefalea', filtro_orden: '6' },
    '09_CLI_CEFALE_18': { celda: 'F154', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Cefalea', filtro_orden: '6' },
    '09_CLI_CEFALE_30': { celda: 'G154', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Cefalea', filtro_orden: '6' },
    '09_CLI_CEFALE_60': { celda: 'H154', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Cefalea', filtro_orden: '6' },

    // ORDEN 07: Masa No Especificada en la Mama
    '09_CLI_MASAMA_00': { celda: 'D155', campo: '00a-11a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '7' },
    '09_CLI_MASAMA_12': { celda: 'E155', campo: '12a-17a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '7' },
    '09_CLI_MASAMA_18': { celda: 'F155', campo: '18a-29a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '7' },
    '09_CLI_MASAMA_30': { celda: 'G155', campo: '30a-59a', tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '7' },
    '09_CLI_MASAMA_60': { celda: 'H155', campo: '60a+',    tabla: '09_EVALUACION_CLINICA', filtro_actividad: 'Masa No Especificada en la Mama', filtro_orden: '7' },

    // ========================================================================
    // SECCIÓN 10: 10_SALUD_MENTAL (Actualizado con textos de BD)
    // ========================================================================
    
    // ORDEN 01: Entrevista de Tamizaje
    '10_SM_TAMIZAJ_00': { celda: 'D158', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Entrevista de Tamizaje', filtro_orden: '1' },
    '10_SM_TAMIZAJ_12': { celda: 'E158', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Entrevista de Tamizaje', filtro_orden: '1' },
    '10_SM_TAMIZAJ_18': { celda: 'F158', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Entrevista de Tamizaje', filtro_orden: '1' },
    '10_SM_TAMIZAJ_30': { celda: 'G158', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Entrevista de Tamizaje', filtro_orden: '1' },
    '10_SM_TAMIZAJ_60': { celda: 'H158', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'Entrevista de Tamizaje', filtro_orden: '1' },

    // ORDEN 02: Trastorno de ansiedad, no Especificado
    '10_SM_ANSIEDA_00': { celda: 'D159', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Trastorno de ansiedad, no Especificado', filtro_orden: '2' },
    '10_SM_ANSIEDA_12': { celda: 'E159', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Trastorno de ansiedad, no Especificado', filtro_orden: '2' },
    '10_SM_ANSIEDA_18': { celda: 'F159', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Trastorno de ansiedad, no Especificado', filtro_orden: '2' },
    '10_SM_ANSIEDA_30': { celda: 'G159', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Trastorno de ansiedad, no Especificado', filtro_orden: '2' },
    '10_SM_ANSIEDA_60': { celda: 'H159', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'Trastorno de ansiedad, no Especificado', filtro_orden: '2' },

    // ORDEN 03: Problemas Relacionados con el Bajo Rendimiento Escolar
    '10_SM_RENDIMI_00': { celda: 'D160', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Problemas Relacionados con el Bajo Rendimiento Escolar', filtro_orden: '3' },
    '10_SM_RENDIMI_12': { celda: 'E160', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Problemas Relacionados con el Bajo Rendimiento Escolar', filtro_orden: '3' },
    '10_SM_RENDIMI_18': { celda: 'F160', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Problemas Relacionados con el Bajo Rendimiento Escolar', filtro_orden: '3' },
    '10_SM_RENDIMI_30': { celda: 'G160', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'Problemas Relacionados con el Bajo Rendimiento Escolar', filtro_orden: '3' },
    '10_SM_RENDIMI_60': { celda: 'H160', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'Problemas Relacionados con el Bajo Rendimiento Escolar', filtro_orden: '3' },

    // ORDEN 04: VIOLENCIA FAMILIAR / MALTRATO INFANTIL
    '10_SM_VIOLENC_00': { celda: 'D162', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '4' },
    '10_SM_VIOLENC_12': { celda: 'E162', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '4' },
    '10_SM_VIOLENC_18': { celda: 'F162', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '4' },
    '10_SM_VIOLENC_30': { celda: 'G162', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '4' },
    '10_SM_VIOLENC_60': { celda: 'H162', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '4' },

    // ORDEN 05: TRASTORNO DEPRESIVO
    '10_SM_DEPRESI_00': { celda: 'D163', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '5' },
    '10_SM_DEPRESI_12': { celda: 'E163', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '5' },
    '10_SM_DEPRESI_18': { celda: 'F163', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '5' },
    '10_SM_DEPRESI_30': { celda: 'G163', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '5' },
    '10_SM_DEPRESI_60': { celda: 'H163', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '5' },

    // ORDEN 06: ALCOHOL Y DROGAS
    '10_SM_ALCOHOL_00': { celda: 'D164', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'ALCOHOL Y DROGAS', filtro_orden: '6' },
    '10_SM_ALCOHOL_12': { celda: 'E164', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'ALCOHOL Y DROGAS', filtro_orden: '6' },
    '10_SM_ALCOHOL_18': { celda: 'F164', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'ALCOHOL Y DROGAS', filtro_orden: '6' },
    '10_SM_ALCOHOL_30': { celda: 'G164', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'ALCOHOL Y DROGAS', filtro_orden: '6' },
    '10_SM_ALCOHOL_60': { celda: 'H164', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'ALCOHOL Y DROGAS', filtro_orden: '6' },

    // ORDEN 07: PSICOSIS
    '10_SM_PSICOSI_00': { celda: 'D165', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PSICOSIS', filtro_orden: '7' },
    '10_SM_PSICOSI_12': { celda: 'E165', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PSICOSIS', filtro_orden: '7' },
    '10_SM_PSICOSI_18': { celda: 'F165', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PSICOSIS', filtro_orden: '7' },
    '10_SM_PSICOSI_30': { celda: 'G165', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PSICOSIS', filtro_orden: '7' },
    '10_SM_PSICOSI_60': { celda: 'H165', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'PSICOSIS', filtro_orden: '7' },

    // ORDEN 08: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS
    '10_SM_NEURODE_00': { celda: 'D166', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '8' },
    '10_SM_NEURODE_12': { celda: 'E166', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '8' },
    '10_SM_NEURODE_18': { celda: 'F166', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '8' },
    '10_SM_NEURODE_30': { celda: 'G166', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '8' },
    '10_SM_NEURODE_60': { celda: 'H166', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '8' },

    // ORDEN 09: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS
    '10_SM_TRASTOR_00': { celda: 'D167', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '9' },
    '10_SM_TRASTOR_12': { celda: 'E167', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '9' },
    '10_SM_TRASTOR_18': { celda: 'F167', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '9' },
    '10_SM_TRASTOR_30': { celda: 'G167', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '9' },
    '10_SM_TRASTOR_60': { celda: 'H167', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '9' },

    // ORDEN 10: POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL
    '10_SM_POS_VIO_00': { celda: 'D169', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '10' },
    '10_SM_POS_VIO_12': { celda: 'E169', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '10' },
    '10_SM_POS_VIO_18': { celda: 'F169', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '10' },
    '10_SM_POS_VIO_30': { celda: 'G169', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '10' },
    '10_SM_POS_VIO_60': { celda: 'H169', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: VIOLENCIA FAMILIAR / MALTRATO INFANTIL', filtro_orden: '10' },

    // ORDEN 11: POS: TRASTORNO DEPRESIVO
    '10_SM_POS_DEP_00': { celda: 'D170', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DEPRESIVO', filtro_orden: '11' },
    '10_SM_POS_DEP_12': { celda: 'E170', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DEPRESIVO', filtro_orden: '11' },
    '10_SM_POS_DEP_18': { celda: 'F170', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DEPRESIVO', filtro_orden: '11' },
    '10_SM_POS_DEP_30': { celda: 'G170', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DEPRESIVO', filtro_orden: '11' },
    '10_SM_POS_DEP_60': { celda: 'H170', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DEPRESIVO', filtro_orden: '11' },

    // ORDEN 12: POS: TRASTORNO DE CONSUMO DE ALCOHOL
    '10_SM_POS_ALC_00': { celda: 'D171', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE ALCOHOL', filtro_orden: '12' },
    '10_SM_POS_ALC_12': { celda: 'E171', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE ALCOHOL', filtro_orden: '12' },
    '10_SM_POS_ALC_18': { celda: 'F171', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE ALCOHOL', filtro_orden: '12' },
    '10_SM_POS_ALC_30': { celda: 'G171', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE ALCOHOL', filtro_orden: '12' },
    '10_SM_POS_ALC_60': { celda: 'H171', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE ALCOHOL', filtro_orden: '12' },

    // ORDEN 13: POS: TRASTORNO DE CONSUMO DE TABACO
    '10_SM_POS_TAB_00': { celda: 'D172', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE TABACO', filtro_orden: '13' },
    '10_SM_POS_TAB_12': { celda: 'E172', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE TABACO', filtro_orden: '13' },
    '10_SM_POS_TAB_18': { celda: 'F172', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE TABACO', filtro_orden: '13' },
    '10_SM_POS_TAB_30': { celda: 'G172', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE TABACO', filtro_orden: '13' },
    '10_SM_POS_TAB_60': { celda: 'H172', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE TABACO', filtro_orden: '13' },

    // ORDEN 14: POS: TRASTORNO DE CONSUMO DE DROGAS
    '10_SM_POS_DRO_00': { celda: 'D173', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE DROGAS', filtro_orden: '14' },
    '10_SM_POS_DRO_12': { celda: 'E173', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE DROGAS', filtro_orden: '14' },
    '10_SM_POS_DRO_18': { celda: 'F173', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE DROGAS', filtro_orden: '14' },
    '10_SM_POS_DRO_30': { celda: 'G173', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE DROGAS', filtro_orden: '14' },
    '10_SM_POS_DRO_60': { celda: 'H173', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNO DE CONSUMO DE DROGAS', filtro_orden: '14' },

    // ORDEN 15: POS: SINDROME Y/O TRASTORNO PSICÓTICO
    '10_SM_POS_PSI_00': { celda: 'D174', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: SINDROME Y/O TRASTORNO PSICÓTICO', filtro_orden: '15' },
    '10_SM_POS_PSI_12': { celda: 'E174', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: SINDROME Y/O TRASTORNO PSICÓTICO', filtro_orden: '15' },
    '10_SM_POS_PSI_18': { celda: 'F174', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: SINDROME Y/O TRASTORNO PSICÓTICO', filtro_orden: '15' },
    '10_SM_POS_PSI_30': { celda: 'G174', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: SINDROME Y/O TRASTORNO PSICÓTICO', filtro_orden: '15' },
    '10_SM_POS_PSI_60': { celda: 'H174', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: SINDROME Y/O TRASTORNO PSICÓTICO', filtro_orden: '15' },

    // ORDEN 16: POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS
    '10_SM_POS_NEU_00': { celda: 'D175', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '16' },
    '10_SM_POS_NEU_12': { celda: 'E175', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '16' },
    '10_SM_POS_NEU_18': { celda: 'F175', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '16' },
    '10_SM_POS_NEU_30': { celda: 'G175', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '16' },
    '10_SM_POS_NEU_60': { celda: 'H175', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: PROBLEMAS DEL NEURODESARROLLO EN NIÑAS Y NIÑOS DE 0 A 3 AÑOS', filtro_orden: '16' },

    // ORDEN 17: POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS
    '10_SM_POS_TRA_00': { celda: 'D176', campo: '00a-11a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '17' },
    '10_SM_POS_TRA_12': { celda: 'E176', campo: '12a-17a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '17' },
    '10_SM_POS_TRA_18': { celda: 'F176', campo: '18a-29a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '17' },
    '10_SM_POS_TRA_30': { celda: 'G176', campo: '30a-59a', tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '17' },
    '10_SM_POS_TRA_60': { celda: 'H176', campo: '60a+',    tabla: '10_SALUD_MENTAL', filtro_actividad: 'POS: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE NIÑOS, NIÑAS Y ADOLESCENTES DE 3 A 17 AÑOS', filtro_orden: '17' },

    // ========================================================================
    // SECCIÓN 11: 11_SALUD_MENTAL_1 (Tamizaje Trastornos - Dividido por Sexo)
    // ========================================================================
    
    // ORDEN 01: Problemas emocionales
    '11_SM_PROB_EMO_3_11F':  { celda: 'D181', campo: '3a-11a F',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas emocionales', filtro_orden: '1' },
    '11_SM_PROB_EMO_3_11M':  { celda: 'E181', campo: '3a-11a M',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas emocionales', filtro_orden: '1' },
    '11_SM_PROB_EMO_12_17F': { celda: 'F181', campo: '12a-17a F', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas emocionales', filtro_orden: '1' },
    '11_SM_PROB_EMO_12_17M': { celda: 'G181', campo: '12a-17a M', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas emocionales', filtro_orden: '1' },

    // ORDEN 02: Problemas de atención
    '11_SM_PROB_ATE_3_11F':  { celda: 'D182', campo: '3a-11a F',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de atención', filtro_orden: '2' },
    '11_SM_PROB_ATE_3_11M':  { celda: 'E182', campo: '3a-11a M',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de atención', filtro_orden: '2' },
    '11_SM_PROB_ATE_12_17F': { celda: 'F182', campo: '12a-17a F', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de atención', filtro_orden: '2' },
    '11_SM_PROB_ATE_12_17M': { celda: 'G182', campo: '12a-17a M', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de atención', filtro_orden: '2' },

    // ORDEN 03: Problemas de conducta
    '11_SM_PROB_CON_3_11F':  { celda: 'D183', campo: '3a-11a F',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de conducta', filtro_orden: '3' },
    '11_SM_PROB_CON_3_11M':  { celda: 'E183', campo: '3a-11a M',  tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de conducta', filtro_orden: '3' },
    '11_SM_PROB_CON_12_17F': { celda: 'F183', campo: '12a-17a F', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de conducta', filtro_orden: '3' },
    '11_SM_PROB_CON_12_17M': { celda: 'G183', campo: '12a-17a M', tabla: '11_SALUD_MENTAL_1', filtro_actividad: 'Problemas de conducta', filtro_orden: '3' },

    // ========================================================================
    // SECCIÓN 12: 12_SALUD_MENTAL_2 (Dividido por Sexo - 10 Columnas)
    // ========================================================================

    // ORDEN 01: TRASTORNO DEL ESPECTRO AUTISTA (Fila 188)
    '12_SM_AUTISMO_00F': { celda: 'D188', campo: '00a-11a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_00M': { celda: 'E188', campo: '00a-11a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_12F': { celda: 'F188', campo: '12a-17a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_12M': { celda: 'G188', campo: '12a-17a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_18F': { celda: 'H188', campo: '18a-29a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_18M': { celda: 'I188', campo: '18a-29a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_30F': { celda: 'J188', campo: '30a-59a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_30M': { celda: 'K188', campo: '30a-59a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_60F': { celda: 'L188', campo: '60a+ F',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },
    '12_SM_AUTISMO_60M': { celda: 'M188', campo: '60a+ M',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEL ESPECTRO AUTISTA', filtro_orden: '1' },

    // ORDEN 02: TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años (Fila 189)
    '12_SM_COMPORT_00F': { celda: 'D189', campo: '00a-11a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_00M': { celda: 'E189', campo: '00a-11a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_12F': { celda: 'F189', campo: '12a-17a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_12M': { celda: 'G189', campo: '12a-17a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_18F': { celda: 'H189', campo: '18a-29a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_18M': { celda: 'I189', campo: '18a-29a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_30F': { celda: 'J189', campo: '30a-59a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_30M': { celda: 'K189', campo: '30a-59a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_60F': { celda: 'L189', campo: '60a+ F',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },
    '12_SM_COMPORT_60M': { celda: 'M189', campo: '60a+ M',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNOS MENTALES Y DEL COMPORTAMIENTO DE 0-17 años', filtro_orden: '2' },

    // ORDEN 03: TRASTORNO DEPRESIVO (Fila 190)
    '12_SM_DEPRESI_00F': { celda: 'D190', campo: '00a-11a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_00M': { celda: 'E190', campo: '00a-11a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_12F': { celda: 'F190', campo: '12a-17a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_12M': { celda: 'G190', campo: '12a-17a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_18F': { celda: 'H190', campo: '18a-29a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_18M': { celda: 'I190', campo: '18a-29a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_30F': { celda: 'J190', campo: '30a-59a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_30M': { celda: 'K190', campo: '30a-59a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_60F': { celda: 'L190', campo: '60a+ F',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },
    '12_SM_DEPRESI_60M': { celda: 'M190', campo: '60a+ M',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'TRASTORNO DEPRESIVO', filtro_orden: '3' },

    // ORDEN 04: DETERIORO COGNITIVO (Fila 191)
    '12_SM_DETCOGN_00F': { celda: 'D191', campo: '00a-11a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_00M': { celda: 'E191', campo: '00a-11a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_12F': { celda: 'F191', campo: '12a-17a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_12M': { celda: 'G191', campo: '12a-17a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_18F': { celda: 'H191', campo: '18a-29a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_18M': { celda: 'I191', campo: '18a-29a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_30F': { celda: 'J191', campo: '30a-59a F', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_30M': { celda: 'K191', campo: '30a-59a M', tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_60F': { celda: 'L191', campo: '60a+ F',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },
    '12_SM_DETCOGN_60M': { celda: 'M191', campo: '60a+ M',    tabla: '12_SALUD_MENTAL_2', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 13: 13_SALUD_MENTAL_3 (CSMC y Hospitales - 10 Columnas por Sexo)
    // ========================================================================

    // ORDEN 01: DETERIORO COGNITIVO (Fila 196)
    '13_SM_DETCOGN_00F': { celda: 'D196', campo: '00a-11a F', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_00M': { celda: 'E196', campo: '00a-11a M', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_12F': { celda: 'F196', campo: '12a-17a F', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_12M': { celda: 'G196', campo: '12a-17a M', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_18F': { celda: 'H196', campo: '18a-29a F', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_18M': { celda: 'I196', campo: '18a-29a M', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_30F': { celda: 'J196', campo: '30a-59a F', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_30M': { celda: 'K196', campo: '30a-59a M', tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_60F': { celda: 'L196', campo: '60a+ F',    tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },
    '13_SM_DETCOGN_60M': { celda: 'M196', campo: '60a+ M',    tabla: '13_SALUD_MENTAL_3', filtro_actividad: 'DETERIORO COGNITIVO', filtro_orden: '1' },

    // ========================================================================
    // SECCIÓN 14: 14_ETAPA_DE_VIDA_NINO_1 (Controles de Crecimiento)
    // ========================================================================

    // ORDEN 01: De 1d - 7d
    '14_NIN1_D1_7_1': { celda: 'D200', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    '14_NIN1_D1_7_2': { celda: 'E200', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    //'14_NIN1_D1_7_3': { celda: 'F200', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    //'14_NIN1_D1_7_4': { celda: 'G200', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    '14_NIN1_D1_7_T': { celda: 'O200', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '1' },

    // ORDEN 02: De 8d - 14d
    '14_NIN1_D8_14_1': { celda: 'D201', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '14_NIN1_D8_14_2': { celda: 'E201', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '14_NIN1_D8_14_3': { celda: 'F201', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    //'14_NIN1_D8_14_4': { celda: 'G201', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '14_NIN1_D8_14_T': { celda: 'O201', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '2' },

    // ORDEN 03: De 15d - 21d
    '14_NIN1_D15_21_1': { celda: 'D202', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '14_NIN1_D15_21_2': { celda: 'E202', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '14_NIN1_D15_21_3': { celda: 'F202', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '14_NIN1_D15_21_4': { celda: 'G202', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '14_NIN1_D15_21_T': { celda: 'O202', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '3' },

    // ORDEN 04: De 22d - +d
    '14_NIN1_D22_M_1': { celda: 'D203', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '14_NIN1_D22_M_2': { celda: 'E203', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '14_NIN1_D22_M_3': { celda: 'F203', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '14_NIN1_D22_M_4': { celda: 'G203', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '14_NIN1_D22_M_T': { celda: 'O203', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '4' },

    // ORDEN 05: 29 dias - 11 meses (Sin tilde según SP)
    '14_NIN1_29D_11M_1': { celda: 'D204', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_2': { celda: 'E204', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_3': { celda: 'F204', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_4': { celda: 'G204', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_5': { celda: 'H204', campo: '5°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_6': { celda: 'I204', campo: '6°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_7': { celda: 'J204', campo: '7°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_8': { celda: 'K204', campo: '8°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_9': { celda: 'L204', campo: '9°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_10': { celda: 'M204', campo: '10°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_11': { celda: 'N204', campo: '11°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '14_NIN1_29D_11M_T': { celda: 'O204', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '5' },



    // ORDEN 06: 01 año
    '14_NIN1_01A_1': { celda: 'D205', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_2': { celda: 'E205', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_3': { celda: 'F205', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_4': { celda: 'G205', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_5': { celda: 'H205', campo: '5°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_6': { celda: 'I205', campo: '6°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '14_NIN1_01A_T': { celda: 'O205', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '6' },
    

    // ORDEN 07: 02 años
    '14_NIN1_02A_1': { celda: 'D206', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '14_NIN1_02A_2': { celda: 'E206', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '14_NIN1_02A_3': { celda: 'F206', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '14_NIN1_02A_4': { celda: 'G206', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '14_NIN1_02A_T': { celda: 'O206', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '7' },

    // ORDEN 08: 03 años
    '14_NIN1_03A_1': { celda: 'D207', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '14_NIN1_03A_2': { celda: 'E207', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '14_NIN1_03A_3': { celda: 'F207', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '14_NIN1_03A_4': { celda: 'G207', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '14_NIN1_03A_T': { celda: 'O207', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '8' },

    // ORDEN 09: 4 años
    '14_NIN1_04A_1': { celda: 'D208', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '14_NIN1_04A_2': { celda: 'E208', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '14_NIN1_04A_3': { celda: 'F208', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '14_NIN1_04A_4': { celda: 'G208', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '14_NIN1_04A_T': { celda: 'O208', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '9' },

    // ORDEN 10: 5 años
    '14_NIN1_05A_1': { celda: 'D209', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '5 años', filtro_orden: '10' },
    //'14_NIN1_05A_2': { celda: 'E209', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '5 años', filtro_orden: '10' },
    //'14_NIN1_05A_3': { celda: 'F209', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '5 años', filtro_orden: '10' },
    //'14_NIN1_05A_4': { celda: 'G209', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '5 años', filtro_orden: '10' },
    '14_NIN1_05A_T': { celda: 'O209', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '10' },

    // ORDEN 11: 6 años
    '14_NIN1_06A_1': { celda: 'D210', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '6 años', filtro_orden: '11' },
    //'14_NIN1_06A_2': { celda: 'E210', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '6 años', filtro_orden: '11' },
    //'14_NIN1_06A_3': { celda: 'F210', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '6 años', filtro_orden: '11' },
    //'14_NIN1_06A_4': { celda: 'G210', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '6 años', filtro_orden: '11' },
    '14_NIN1_06A_T': { celda: 'O210', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '11' },

    // ORDEN 12: 7 años
    '14_NIN1_07A_1': { celda: 'D211', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '7 años', filtro_orden: '12' },
    //'14_NIN1_07A_2': { celda: 'E211', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '7 años', filtro_orden: '12' },
    //'14_NIN1_07A_3': { celda: 'F211', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '7 años', filtro_orden: '12' },
    //'14_NIN1_07A_4': { celda: 'G211', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '7 años', filtro_orden: '12' },
    '14_NIN1_07A_T': { celda: 'O211', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '12' },

    // ORDEN 13: 8 años
    '14_NIN1_08A_1': { celda: 'D212', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '8 años', filtro_orden: '13' },
    //'14_NIN1_08A_2': { celda: 'E212', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '8 años', filtro_orden: '13' },
    //'14_NIN1_08A_3': { celda: 'F212', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '8 años', filtro_orden: '13' },
    //'14_NIN1_08A_4': { celda: 'G212', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '8 años', filtro_orden: '13' },
    '14_NIN1_08A_T': { celda: 'O212', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '13' },

    // ORDEN 14: 9 años
    '14_NIN1_09A_1': { celda: 'D213', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '9 años', filtro_orden: '14' },
    //'14_NIN1_09A_2': { celda: 'E213', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '9 años', filtro_orden: '14' },
    //'14_NIN1_09A_3': { celda: 'F213', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '9 años', filtro_orden: '14' },
    //'14_NIN1_09A_4': { celda: 'G213', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '9 años', filtro_orden: '14' },
    '14_NIN1_09A_T': { celda: 'O213', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '14' },

    // ORDEN 15: 10 años
    '14_NIN1_10A_1': { celda: 'D214', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '10 años', filtro_orden: '15' },
    //'14_NIN1_10A_2': { celda: 'E214', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '10 años', filtro_orden: '15' },
    //'14_NIN1_10A_3': { celda: 'F214', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '10 años', filtro_orden: '15' },
    //'14_NIN1_10A_4': { celda: 'G214', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '10 años', filtro_orden: '15' },
    '14_NIN1_10A_T': { celda: 'O214', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '15' },

    // ORDEN 16: 11 años
    '14_NIN1_11A_1': { celda: 'D215', campo: '1°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '11 años', filtro_orden: '16' },
    //'14_NIN1_11A_2': { celda: 'E215', campo: '2°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '11 años', filtro_orden: '16' },
    //'14_NIN1_11A_3': { celda: 'F215', campo: '3°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '11 años', filtro_orden: '16' },
    //'14_NIN1_11A_4': { celda: 'G215', campo: '4°', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: '11 años', filtro_orden: '16' },
    '14_NIN1_11A_T': { celda: 'O215', campo: 'Total', tabla: '14_ETAPA_DE_VIDA_NINO_1', filtro_grupo_edad: 'Total', filtro_orden: '16' },

    // ========================================================================
    // SECCIÓN 15: 15_ETAPA_DE_VIDA_NINO_2 (Evaluación Antropométrica)
    // ========================================================================

    // ORDEN 01: De 1d - 7d
    '15_NIN2_D1_7_1': { celda: 'C226', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    '15_NIN2_D1_7_2': { celda: 'D226', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    //'15_NIN2_D1_7_3': { celda: 'F226', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    //'15_NIN2_D1_7_4': { celda: 'G226', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 1d - 7d', filtro_orden: '1' },
    '15_NIN2_D1_7_T': { celda: 'N226', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '1' },

    // ORDEN 02: De 8d - 14d
    '15_NIN2_D8_14_1': { celda: 'C227', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '15_NIN2_D8_14_2': { celda: 'D227', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '15_NIN2_D8_14_3': { celda: 'E227', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    //'15_NIN2_D8_14_4': { celda: 'G227', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 8d - 14d', filtro_orden: '2' },
    '15_NIN2_D8_14_T': { celda: 'N227', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '2' },

    // ORDEN 03: De 15d - 21d
    '15_NIN2_D15_21_1': { celda: 'C228', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '15_NIN2_D15_21_2': { celda: 'D228', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '15_NIN2_D15_21_3': { celda: 'E228', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '15_NIN2_D15_21_4': { celda: 'F228', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 15d - 21d', filtro_orden: '3' },
    '15_NIN2_D15_21_T': { celda: 'N228', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '3' },

    // ORDEN 04: De 22d - +d
    '15_NIN2_D22_M_1': { celda: 'C229', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '15_NIN2_D22_M_2': { celda: 'D229', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '15_NIN2_D22_M_3': { celda: 'E229', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '15_NIN2_D22_M_4': { celda: 'F229', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'De 22d - +d', filtro_orden: '4' },
    '15_NIN2_D22_M_T': { celda: 'N229', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '4' },

    // ORDEN 05: 29 dias - 11 meses
    '15_NIN2_29D_11M_1': { celda: 'C230', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_2': { celda: 'D230', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_3': { celda: 'E230', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_4': { celda: 'F230', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_5': { celda: 'G230', campo: '5°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_6': { celda: 'H230', campo: '6°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_7': { celda: 'I230', campo: '7°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_8': { celda: 'J230', campo: '8°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_9': { celda: 'K230', campo: '9°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_10': { celda: 'L230', campo: '10°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_11': { celda: 'M230', campo: '11°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '29 dias - 11 meses', filtro_orden: '5' },
    '15_NIN2_29D_11M_T': { celda: 'N230', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '5' },
    
    
    // ORDEN 06: 01 año
    '15_NIN2_01A_1': { celda: 'C231', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_2': { celda: 'D231', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_3': { celda: 'E231', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_4': { celda: 'F231', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_5': { celda: 'G231', campo: '5°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_6': { celda: 'H231', campo: '6°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '01 año', filtro_orden: '6' },
    '15_NIN2_01A_T': { celda: 'N231', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '6' },

    // ORDEN 07: 02 años
    '15_NIN2_02A_1': { celda: 'D232', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '15_NIN2_02A_2': { celda: 'E232', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '15_NIN2_02A_3': { celda: 'F232', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '15_NIN2_02A_4': { celda: 'G232', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '02 años', filtro_orden: '7' },
    '15_NIN2_02A_5': { celda: 'N232', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '7' },

    // ORDEN 08: 03 años
    '15_NIN2_03A_1': { celda: 'D233', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '15_NIN2_03A_2': { celda: 'E233', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '15_NIN2_03A_3': { celda: 'F233', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '15_NIN2_03A_4': { celda: 'G233', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '03 años', filtro_orden: '8' },
    '15_NIN2_03A_T': { celda: 'N233', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '8' },

    // ORDEN 09: 4 años
    '15_NIN2_04A_1': { celda: 'D234', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '15_NIN2_04A_2': { celda: 'E234', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '15_NIN2_04A_3': { celda: 'F234', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '15_NIN2_04A_4': { celda: 'G234', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '4 años', filtro_orden: '9' },
    '15_NIN2_04A_T': { celda: 'N234', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '9' },

    // ORDEN 10: 5a - 11a
    '15_NIN2_5_11A_1': { celda: 'D235', campo: '1°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '5a - 11a', filtro_orden: '10' },
    //'15_NIN2_5_11A_2': { celda: 'E235', campo: '2°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '5a - 11a', filtro_orden: '10' },
    //'15_NIN2_5_11A_3': { celda: 'F235', campo: '3°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '5a - 11a', filtro_orden: '10' },
    //'15_NIN2_5_11A_4': { celda: 'G235', campo: '4°', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: '5a - 11a', filtro_orden: '10' },
    '15_NIN2_5_11A_T': { celda: 'N235', campo: 'TOTAL', tabla: '15_ETAPA_DE_VIDA_NINO_2', filtro_grupo_edad: 'TOTAL', filtro_orden: '10' },

    // ========================================================================
    // SECCIÓN 16: 16_ETAPA_DE_VIDA_NINO_3 (Estado Nutricional - 10 Columnas)
    // ========================================================================

    // ORDEN 01: < 1 año (Fila 240)
    '16_NIN3_MENOR1_PE_DX':     { celda: 'C251', campo: 'PE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_PE_REC':    { celda: 'D251', campo: 'PE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPOB_DX':   { celda: 'E251', campo: 'TP_Ob_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPOB_REC':  { celda: 'F251', campo: 'TP_Ob_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPSB_DX':   { celda: 'G251', campo: 'TP_Sb_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPSB_REC':  { celda: 'H251', campo: 'TP_Sb_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPDES_DX':  { celda: 'I251', campo: 'TP_Des_Dx',    tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TPDES_REC': { celda: 'J251', campo: 'TP_Des_Recup', tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TE_DX':     { celda: 'K251', campo: 'TE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '16_NIN3_MENOR1_TE_REC':    { celda: 'L251', campo: 'TE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },

    // ORDEN 02: 01 año (Fila 241)
    '16_NIN3_01A_PE_DX':     { celda: 'C252', campo: 'PE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_PE_REC':    { celda: 'D252', campo: 'PE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPOB_DX':   { celda: 'E252', campo: 'TP_Ob_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPOB_REC':  { celda: 'F252', campo: 'TP_Ob_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPSB_DX':   { celda: 'G252', campo: 'TP_Sb_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPSB_REC':  { celda: 'H252', campo: 'TP_Sb_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPDES_DX':  { celda: 'I252', campo: 'TP_Des_Dx',    tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TPDES_REC': { celda: 'J252', campo: 'TP_Des_Recup', tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TE_DX':     { celda: 'K252', campo: 'TE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '16_NIN3_01A_TE_REC':    { celda: 'L252', campo: 'TE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '01 año', filtro_orden: '2' },

    // ORDEN 03: 02 años (Fila 242)
    '16_NIN3_02A_PE_DX':     { celda: 'C253', campo: 'PE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_PE_REC':    { celda: 'D253', campo: 'PE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPOB_DX':   { celda: 'E253', campo: 'TP_Ob_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPOB_REC':  { celda: 'F253', campo: 'TP_Ob_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPSB_DX':   { celda: 'G253', campo: 'TP_Sb_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPSB_REC':  { celda: 'H253', campo: 'TP_Sb_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPDES_DX':  { celda: 'I253', campo: 'TP_Des_Dx',    tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TPDES_REC': { celda: 'J253', campo: 'TP_Des_Recup', tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TE_DX':     { celda: 'K253', campo: 'TE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '16_NIN3_02A_TE_REC':    { celda: 'L253', campo: 'TE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '02 años', filtro_orden: '3' },

    // ORDEN 04: 03 años (Fila 243)
    '16_NIN3_03A_PE_DX':     { celda: 'C254', campo: 'PE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_PE_REC':    { celda: 'D254', campo: 'PE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPOB_DX':   { celda: 'E254', campo: 'TP_Ob_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPOB_REC':  { celda: 'F254', campo: 'TP_Ob_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPSB_DX':   { celda: 'G254', campo: 'TP_Sb_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPSB_REC':  { celda: 'H254', campo: 'TP_Sb_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPDES_DX':  { celda: 'I254', campo: 'TP_Des_Dx',    tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TPDES_REC': { celda: 'J254', campo: 'TP_Des_Recup', tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TE_DX':     { celda: 'K254', campo: 'TE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },
    '16_NIN3_03A_TE_REC':    { celda: 'L254', campo: 'TE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '03 años', filtro_orden: '4' },

    // ORDEN 05: 04 años (Fila 244)
    '16_NIN3_04A_PE_DX':     { celda: 'C255', campo: 'PE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_PE_REC':    { celda: 'D255', campo: 'PE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPOB_DX':   { celda: 'E255', campo: 'TP_Ob_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPOB_REC':  { celda: 'F255', campo: 'TP_Ob_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPSB_DX':   { celda: 'G255', campo: 'TP_Sb_Dx',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPSB_REC':  { celda: 'H255', campo: 'TP_Sb_Recup',  tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPDES_DX':  { celda: 'I255', campo: 'TP_Des_Dx',    tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TPDES_REC': { celda: 'J255', campo: 'TP_Des_Recup', tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TE_DX':     { celda: 'K255', campo: 'TE_Dx',        tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },
    '16_NIN3_04A_TE_REC':    { celda: 'L255', campo: 'TE_Recup',     tabla: '16_ETAPA_DE_VIDA_NINO_3', filtro_grupo_edad: '04 años', filtro_orden: '5' },

    // ========================================================================
    // SECCIÓN 17: 17_ETAPA_DE_VIDA_NINO_4 (Nutricional 5 a 11 años - 6 Columnas)
    // ========================================================================

    // ORDEN 01: 05a - 11a (Fila 245)
    '17_NIN4_5_11A_OB_DX':    { celda: 'C261', campo: 'IMC_Obes_Dx',      tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },
    '17_NIN4_5_11A_OB_REC':   { celda: 'D261', campo: 'IMC_Obes_Recup',   tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },
    '17_NIN4_5_11A_SOB_DX':   { celda: 'E261', campo: 'IMC_Sobr_Dx',      tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },
    '17_NIN4_5_11A_SOB_REC':  { celda: 'F261', campo: 'IMC_Sobr_Recup',   tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },
    '17_NIN4_5_11A_TEA_DX':   { celda: 'G261', campo: 'TE_Alto_Dx',       tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },
    '17_NIN4_5_11A_TEA_REC':  { celda: 'H261', campo: 'TE_Alto_Recup',    tabla: '17_ETAPA_DE_VIDA_NINO_4', filtro_grupo_edad: '05a - 11a', filtro_orden: '1' },

    // ========================================================================
    // SECCIÓN 18: 18_ETAPA_DE_VIDA_NINO_5 (Desarrollo del Niño - 11 Columnas)
    // ========================================================================

    // ORDEN 01: < 1 año (Fila 246)
    '18_NIN5_MENOR1_LEN_DX':  { celda: 'D271', campo: 'Lenguaje_Dx',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_LEN_REC': { celda: 'E271', campo: 'Lenguaje_Recup', tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_MOT_DX':  { celda: 'F271', campo: 'Motora_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_MOT_REC': { celda: 'G271', campo: 'Motora_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_SOC_DX':  { celda: 'H271', campo: 'Social_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_SOC_REC': { celda: 'I271', campo: 'Social_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_COO_DX':  { celda: 'J271', campo: 'Coord_Dx',       tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_COO_REC': { celda: 'K271', campo: 'Coord_Recup',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_COG_DX':  { celda: 'L271', campo: 'Cognit_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_COG_REC': { celda: 'M271', campo: 'Cognit_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },
    '18_NIN5_MENOR1_NORMAL':  { celda: 'N271', campo: 'Normal',         tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '< 1 año', filtro_orden: '1' },

    // ORDEN 02: 01 año (Fila 247)
    '18_NIN5_01A_LEN_DX':  { celda: 'D272', campo: 'Lenguaje_Dx',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_LEN_REC': { celda: 'E272', campo: 'Lenguaje_Recup', tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_MOT_DX':  { celda: 'F272', campo: 'Motora_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_MOT_REC': { celda: 'G272', campo: 'Motora_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_SOC_DX':  { celda: 'H272', campo: 'Social_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_SOC_REC': { celda: 'I272', campo: 'Social_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_COO_DX':  { celda: 'J272', campo: 'Coord_Dx',       tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_COO_REC': { celda: 'K272', campo: 'Coord_Recup',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_COG_DX':  { celda: 'L272', campo: 'Cognit_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_COG_REC': { celda: 'M272', campo: 'Cognit_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },
    '18_NIN5_01A_NORMAL':  { celda: 'N272', campo: 'Normal',         tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '01 año', filtro_orden: '2' },

    // ORDEN 03: 02 años (Fila 248)
    '18_NIN5_02A_LEN_DX':  { celda: 'D273', campo: 'Lenguaje_Dx',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_LEN_REC': { celda: 'E273', campo: 'Lenguaje_Recup', tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_MOT_DX':  { celda: 'F273', campo: 'Motora_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_MOT_REC': { celda: 'G273', campo: 'Motora_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_SOC_DX':  { celda: 'H273', campo: 'Social_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_SOC_REC': { celda: 'I273', campo: 'Social_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_COO_DX':  { celda: 'J273', campo: 'Coord_Dx',       tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_COO_REC': { celda: 'K273', campo: 'Coord_Recup',    tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_COG_DX':  { celda: 'L273', campo: 'Cognit_Dx',      tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_COG_REC': { celda: 'M273', campo: 'Cognit_Recup',   tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },
    '18_NIN5_02A_NORMAL':  { celda: 'N273', campo: 'Normal',         tabla: '18_ETAPA_DE_VIDA_NINO_5', filtro_grupo_edad: '02 años', filtro_orden: '3' },

    // ========================================================================
    // SECCIÓN 19: 19_CONTROL_ADOLESCENTE (6 filas x 2 columnas)
    // ========================================================================

    // ORDEN 01: Entrevista de Tamizaje - Iniciado (Fila 276)
    '19_ADO_TAM_INI_12': { celda: 'F277', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Entrevista de Tamizaje - Iniciado', filtro_orden: '1' },
    '19_ADO_TAM_INI_15': { celda: 'G277', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Entrevista de Tamizaje - Iniciado', filtro_orden: '1' },

    // ORDEN 02: Entrevista de Tamizaje - Concluido (Fila 277)
    '19_ADO_TAM_CON_12': { celda: 'F278', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Entrevista de Tamizaje - Concluido', filtro_orden: '2' },
    '19_ADO_TAM_CON_15': { celda: 'G278', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Entrevista de Tamizaje - Concluido', filtro_orden: '2' },

    // ORDEN 03: Examen del estado de desarrollo del adolescente (Fila 278)
    '19_ADO_EXAMEN_12':  { celda: 'F279', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Examen del estado de desarrollo del adolescente', filtro_orden: '3' },
    '19_ADO_EXAMEN_15':  { celda: 'G279', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Examen del estado de desarrollo del adolescente', filtro_orden: '3' },

    // ORDEN 04: Evaluación Integral - 1° Control (Fila 279)
    '19_ADO_EVAL_1_12':  { celda: 'F280', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 1° Control', filtro_orden: '4' },
    '19_ADO_EVAL_1_15':  { celda: 'G280', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 1° Control', filtro_orden: '4' },

    // ORDEN 05: Evaluación Integral - 2° Control (Fila 280)
    '19_ADO_EVAL_2_12':  { celda: 'F281', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 2° Control', filtro_orden: '5' },
    '19_ADO_EVAL_2_15':  { celda: 'G281', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 2° Control', filtro_orden: '5' },

    // ORDEN 06: Evaluación Integral - 3° Control a + (Fila 281)
    '19_ADO_EVAL_3_12':  { celda: 'F282', campo: '12a-14a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 3° Control a +', filtro_orden: '6' },
    '19_ADO_EVAL_3_15':  { celda: 'G282', campo: '15a-17a', tabla: '19_CONTROL_ADOLESCENTE', filtro_actividad: 'Evaluación Integral - 3° Control a +', filtro_orden: '6' },

    // ========================================================================
    // SECCIÓN 20: 20_MATERNO (4 Grupos de Edad x 10 Columnas)
    // ========================================================================

    // ORDEN 01: < 12 años (Fila 287)
    '20_MAT_MENOR12_1TRIM': { celda: 'E288', campo: 'I Trim',          tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_2TRIM': { celda: 'F288', campo: 'II Trim',         tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_3TRIM': { celda: 'G288', campo: 'III Trim',        tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_ATC':   { celda: 'H288', campo: 'ATC',             tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_CONTR': { celda: 'I288', campo: 'Controlada',      tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_BAT1':  { celda: 'J288', campo: '1° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_BAT2':  { celda: 'K288', campo: '2° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_VBG':   { celda: 'L288', campo: 'Tamizaje VBG',    tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_REENF': { celda: 'M288', campo: 'Gestante AP Reenfocada', tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },
    '20_MAT_MENOR12_ODONT': { celda: 'N288', campo: 'Atencion Odontologica Protegidas', tabla: '20_MATERNO', filtro_grupo_edad: '< 12 años', filtro_orden: '1' },

    // ORDEN 02: 12a - 17a (Fila 288)
    '20_MAT_12_17_1TRIM': { celda: 'E289', campo: 'I Trim',          tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_2TRIM': { celda: 'F289', campo: 'II Trim',         tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_3TRIM': { celda: 'G289', campo: 'III Trim',        tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_ATC':   { celda: 'H289', campo: 'ATC',             tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_CONTR': { celda: 'I289', campo: 'Controlada',      tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_BAT1':  { celda: 'J289', campo: '1° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_BAT2':  { celda: 'K289', campo: '2° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_VBG':   { celda: 'L289', campo: 'Tamizaje VBG',    tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_REENF': { celda: 'M289', campo: 'Gestante AP Reenfocada', tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },
    '20_MAT_12_17_ODONT': { celda: 'N289', campo: 'Atencion Odontologica Protegidas', tabla: '20_MATERNO', filtro_grupo_edad: '12a - 17a', filtro_orden: '2' },

    // ORDEN 03: 18a - 29a (Fila 289)
    '20_MAT_18_29_1TRIM': { celda: 'E290', campo: 'I Trim',          tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_2TRIM': { celda: 'F290', campo: 'II Trim',         tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_3TRIM': { celda: 'G290', campo: 'III Trim',        tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_ATC':   { celda: 'H290', campo: 'ATC',             tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_CONTR': { celda: 'I290', campo: 'Controlada',      tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_BAT1':  { celda: 'J290', campo: '1° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_BAT2':  { celda: 'K290', campo: '2° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_VBG':   { celda: 'L290', campo: 'Tamizaje VBG',    tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_REENF': { celda: 'M290', campo: 'Gestante AP Reenfocada', tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },
    '20_MAT_18_29_ODONT': { celda: 'N290', campo: 'Atencion Odontologica Protegidas', tabla: '20_MATERNO', filtro_grupo_edad: '18a - 29a', filtro_orden: '3' },

    // ORDEN 04: 30a - 59a (Fila 290)
    '20_MAT_30_59_1TRIM': { celda: 'E291', campo: 'I Trim',          tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_2TRIM': { celda: 'F291', campo: 'II Trim',         tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_3TRIM': { celda: 'G291', campo: 'III Trim',        tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_ATC':   { celda: 'H291', campo: 'ATC',             tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_CONTR': { celda: 'I291', campo: 'Controlada',      tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_BAT1':  { celda: 'J291', campo: '1° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_BAT2':  { celda: 'K291', campo: '2° Bateria',      tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_VBG':   { celda: 'L291', campo: 'Tamizaje VBG',    tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_REENF': { celda: 'M291', campo: 'Gestante AP Reenfocada', tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },
    '20_MAT_30_59_ODONT': { celda: 'N291', campo: 'Atencion Odontologica Protegidas', tabla: '20_MATERNO', filtro_grupo_edad: '30a - 59a', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 21: 21_VACAM (Valoración Clínica Adulto Mayor - 3 Columnas)
    // ========================================================================

    // ORDEN 01: Persona Adulta Mayor Saludable (Fila 295)
    '21_VAC_SALUD_60_69_pri': { celda: 'D295', campo: '60a-69a', tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Saludable', filtro_orden: '1' },
    '21_VAC_SALUD_70_79_pri': { celda: 'E295', campo: '70a-79a', tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Saludable', filtro_orden: '1' },
    '21_VAC_SALUD_80_M_pri':  { celda: 'F295', campo: '80a+',    tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Saludable', filtro_orden: '1' },

    // ORDEN 02: Persona Adulta Mayor Enferma (Fila 296)
    '21_VAC_ENFER_60_69_se': { celda: 'D296', campo: '60a-69a', tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Enferma', filtro_orden: '2' },
    '21_VAC_ENFER_70_79_se': { celda: 'E296', campo: '70a-79a', tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Enferma', filtro_orden: '2' },
    '21_VAC_ENFER_80_M_se':  { celda: 'F296', campo: '80a+',    tabla: '21_VACAM', filtro_situacion: 'Persona Adulta Mayor Enferma', filtro_orden: '2' },

    // ========================================================================
    // SECCIÓN 22: 22_CONSEJERIAS (5 Grupos de Edad)
    // ========================================================================

    // ORDEN 01: Consejería Integral (Fila 300)
    '22_CON_INTEG_00': { celda: 'D300', campo: '00a-11a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral', filtro_orden: '1' },
    '22_CON_INTEG_12': { celda: 'E300', campo: '12a-17a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral', filtro_orden: '1' },
    '22_CON_INTEG_18': { celda: 'F300', campo: '18a-29a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral', filtro_orden: '1' },
    '22_CON_INTEG_30': { celda: 'G300', campo: '30a-59a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral', filtro_orden: '1' },
    '22_CON_INTEG_60': { celda: 'H300', campo: '60a+',    tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral', filtro_orden: '1' },

    // ORDEN 02: Consejería Integral (Finalizada) (Fila 301)
    '22_CON_INTFIN_00': { celda: 'D301', campo: '00a-11a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral (Finalizada)', filtro_orden: '2' },
    '22_CON_INTFIN_12': { celda: 'E301', campo: '12a-17a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral (Finalizada)', filtro_orden: '2' },
    '22_CON_INTFIN_18': { celda: 'F301', campo: '18a-29a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral (Finalizada)', filtro_orden: '2' },
    '22_CON_INTFIN_30': { celda: 'G301', campo: '30a-59a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral (Finalizada)', filtro_orden: '2' },
    '22_CON_INTFIN_60': { celda: 'H301', campo: '60a+',    tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Integral (Finalizada)', filtro_orden: '2' },

    // ORDEN 03: Consejería Nutricional (Fila 302)
    '22_CON_NUTRI_00': { celda: 'D302', campo: '00a-11a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Nutricional', filtro_orden: '3' },
    '22_CON_NUTRI_12': { celda: 'E302', campo: '12a-17a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Nutricional', filtro_orden: '3' },
    '22_CON_NUTRI_18': { celda: 'F302', campo: '18a-29a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Nutricional', filtro_orden: '3' },
    '22_CON_NUTRI_30': { celda: 'G302', campo: '30a-59a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Nutricional', filtro_orden: '3' },
    '22_CON_NUTRI_60': { celda: 'H302', campo: '60a+',    tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería Nutricional', filtro_orden: '3' },

    // ORDEN 04: Consejería en Prevención de Enfermedades no transmisibles (Fila 303)
    '22_CON_PREVEN_00': { celda: 'D303', campo: '00a-11a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería en Prevención de Enfermedades no transmisibles', filtro_orden: '4' },
    '22_CON_PREVEN_12': { celda: 'E303', campo: '12a-17a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería en Prevención de Enfermedades no transmisibles', filtro_orden: '4' },
    '22_CON_PREVEN_18': { celda: 'F303', campo: '18a-29a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería en Prevención de Enfermedades no transmisibles', filtro_orden: '4' },
    '22_CON_PREVEN_30': { celda: 'G303', campo: '30a-59a', tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería en Prevención de Enfermedades no transmisibles', filtro_orden: '4' },
    '22_CON_PREVEN_60': { celda: 'H303', campo: '60a+',    tabla: '22_CONSEJERIAS', filtro_tipo_de_consejeria: 'Consejería en Prevención de Enfermedades no transmisibles', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 23: 23_NO_TRANSMISIBLES_1 (Factores de Riesgo - 5 Columnas)
    // ========================================================================

    // ORDEN 01: Valoración Clínica de Factores de Riesgo (Fila 307)
    '23_NT1_VAL_CLI_00': { celda: 'D307', campo: '00a-11a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica de Factores de Riesgo', filtro_orden: '1' },
    '23_NT1_VAL_CLI_12': { celda: 'E307', campo: '12a-17a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica de Factores de Riesgo', filtro_orden: '1' },
    '23_NT1_VAL_CLI_18': { celda: 'F307', campo: '18a-29a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica de Factores de Riesgo', filtro_orden: '1' },
    '23_NT1_VAL_CLI_30': { celda: 'G307', campo: '30a-59a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica de Factores de Riesgo', filtro_orden: '1' },
    '23_NT1_VAL_CLI_60': { celda: 'H307', campo: '60a+',    tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica de Factores de Riesgo', filtro_orden: '1' },

    // ORDEN 02: Valoración clínica sin factores de riesgo (Fila 308)
    '23_NT1_SIN_FAC_00': { celda: 'D308', campo: '00a-11a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clínica sin factores de riesgo', filtro_orden: '2' },
    '23_NT1_SIN_FAC_12': { celda: 'E308', campo: '12a-17a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clínica sin factores de riesgo', filtro_orden: '2' },
    '23_NT1_SIN_FAC_18': { celda: 'F308', campo: '18a-29a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clínica sin factores de riesgo', filtro_orden: '2' },
    '23_NT1_SIN_FAC_30': { celda: 'G308', campo: '30a-59a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clínica sin factores de riesgo', filtro_orden: '2' },
    '23_NT1_SIN_FAC_60': { celda: 'H308', campo: '60a+',    tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clínica sin factores de riesgo', filtro_orden: '2' },

    // ORDEN 03: Valoración clinica con factores de riesgo (Fila 309 - ¡Ojo, "clinica" sin tilde como en la BD!)
    '23_NT1_CON_FAC_00': { celda: 'D309', campo: '00a-11a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clinica con factores de riesgo', filtro_orden: '3' },
    '23_NT1_CON_FAC_12': { celda: 'E309', campo: '12a-17a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clinica con factores de riesgo', filtro_orden: '3' },
    '23_NT1_CON_FAC_18': { celda: 'F309', campo: '18a-29a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clinica con factores de riesgo', filtro_orden: '3' },
    '23_NT1_CON_FAC_30': { celda: 'G309', campo: '30a-59a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clinica con factores de riesgo', filtro_orden: '3' },
    '23_NT1_CON_FAC_60': { celda: 'H309', campo: '60a+',    tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración clinica con factores de riesgo', filtro_orden: '3' },

    // ORDEN 04: Valoración Clínica y tamizaje de laboratorio (Fila 310)
    '23_NT1_TAMIZAJ_00': { celda: 'D310', campo: '00a-11a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica y tamizaje de laboratorio', filtro_orden: '4' },
    '23_NT1_TAMIZAJ_12': { celda: 'E310', campo: '12a-17a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica y tamizaje de laboratorio', filtro_orden: '4' },
    '23_NT1_TAMIZAJ_18': { celda: 'F310', campo: '18a-29a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica y tamizaje de laboratorio', filtro_orden: '4' },
    '23_NT1_TAMIZAJ_30': { celda: 'G310', campo: '30a-59a', tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica y tamizaje de laboratorio', filtro_orden: '4' },
    '23_NT1_TAMIZAJ_60': { celda: 'H310', campo: '60a+',    tabla: '23_NO_TRANSMISIBLES_1', filtro_clasificacion: 'Valoración Clínica y tamizaje de laboratorio', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 24: 24_NO_TRANSMISIBLES_2 (Hipertensión - 5 Columnas)
    // ========================================================================

    // ORDEN 01: Hipertensión esencial (primaria) (Fila 313)
    '24_NT2_HIP_ESC_00': { celda: 'D313', campo: '00a-11a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Hipertensión esencial (primaria)', filtro_orden: '1' },
    '24_NT2_HIP_ESC_12': { celda: 'E313', campo: '12a-17a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Hipertensión esencial (primaria)', filtro_orden: '1' },
    '24_NT2_HIP_ESC_18': { celda: 'F313', campo: '18a-29a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Hipertensión esencial (primaria)', filtro_orden: '1' },
    '24_NT2_HIP_ESC_30': { celda: 'G313', campo: '30a-59a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Hipertensión esencial (primaria)', filtro_orden: '1' },
    '24_NT2_HIP_ESC_60': { celda: 'H313', campo: '60a+',    tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Hipertensión esencial (primaria)', filtro_orden: '1' },

    // ORDEN 02: Nefropatía hipertensiva (Fila 314)
    '24_NT2_NEFRO_00': { celda: 'D314', campo: '00a-11a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Nefropatía hipertensiva', filtro_orden: '2' },
    '24_NT2_NEFRO_12': { celda: 'E314', campo: '12a-17a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Nefropatía hipertensiva', filtro_orden: '2' },
    '24_NT2_NEFRO_18': { celda: 'F314', campo: '18a-29a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Nefropatía hipertensiva', filtro_orden: '2' },
    '24_NT2_NEFRO_30': { celda: 'G314', campo: '30a-59a', tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Nefropatía hipertensiva', filtro_orden: '2' },
    '24_NT2_NEFRO_60': { celda: 'H314', campo: '60a+',    tabla: '24_NO_TRANSMISIBLES_2', filtro_casos_diagnosticados_hta: 'Nefropatía hipertensiva', filtro_orden: '2' },

    // ========================================================================
    // SECCIÓN 25: 25_NO_TRANSMISIBLES_3 (Diabetes - 5 Columnas)
    // ========================================================================

    // ORDEN 01: Diabetes mellitus tipo 1 (Fila 318)
    '25_NT3_DM1_00': { celda: 'D318', campo: '00a-11a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 1', filtro_orden: '1' },
    '25_NT3_DM1_12': { celda: 'E318', campo: '12a-17a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 1', filtro_orden: '1' },
    '25_NT3_DM1_18': { celda: 'F318', campo: '18a-29a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 1', filtro_orden: '1' },
    '25_NT3_DM1_30': { celda: 'G318', campo: '30a-59a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 1', filtro_orden: '1' },
    '25_NT3_DM1_60': { celda: 'H318', campo: '60a+',    tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 1', filtro_orden: '1' },

    // ORDEN 02: Diabetes mellitus tipo 2 (Fila 319)
    '25_NT3_DM2_00': { celda: 'D319', campo: '00a-11a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 2', filtro_orden: '2' },
    '25_NT3_DM2_12': { celda: 'E319', campo: '12a-17a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 2', filtro_orden: '2' },
    '25_NT3_DM2_18': { celda: 'F319', campo: '18a-29a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 2', filtro_orden: '2' },
    '25_NT3_DM2_30': { celda: 'G319', campo: '30a-59a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 2', filtro_orden: '2' },
    '25_NT3_DM2_60': { celda: 'H319', campo: '60a+',    tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Diabetes mellitus tipo 2', filtro_orden: '2' },

    // ORDEN 03: Nefropatia diabética (Fila 320 - "Nefropatia" sin tilde según BD)
    '25_NT3_NEFRO_00': { celda: 'D320', campo: '00a-11a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Nefropatia diabética', filtro_orden: '3' },
    '25_NT3_NEFRO_12': { celda: 'E320', campo: '12a-17a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Nefropatia diabética', filtro_orden: '3' },
    '25_NT3_NEFRO_18': { celda: 'F320', campo: '18a-29a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Nefropatia diabética', filtro_orden: '3' },
    '25_NT3_NEFRO_30': { celda: 'G320', campo: '30a-59a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Nefropatia diabética', filtro_orden: '3' },
    '25_NT3_NEFRO_60': { celda: 'H320', campo: '60a+',    tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Nefropatia diabética', filtro_orden: '3' },

    // ORDEN 04: Retinopatia diabética (Fila 321 - "Retinopatia" sin tilde según BD)
    '25_NT3_RETIN_00': { celda: 'D321', campo: '00a-11a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Retinopatia diabética', filtro_orden: '4' },
    '25_NT3_RETIN_12': { celda: 'E321', campo: '12a-17a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Retinopatia diabética', filtro_orden: '4' },
    '25_NT3_RETIN_18': { celda: 'F321', campo: '18a-29a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Retinopatia diabética', filtro_orden: '4' },
    '25_NT3_RETIN_30': { celda: 'G321', campo: '30a-59a', tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Retinopatia diabética', filtro_orden: '4' },
    '25_NT3_RETIN_60': { celda: 'H321', campo: '60a+',    tabla: '25_NO_TRANSMISIBLES_3', filtro_casos_diagnosticados_diabetes_mellitus: 'Retinopatia diabética', filtro_orden: '4' },

    // ========================================================================
    // SECCIÓN 26: 26_TBC (Detección de TBC - 5 Columnas)
    // ========================================================================

    // ORDEN 01: Sintomáticos Respiratorios Examinados (TBC) (Fila 324)
    '26_TBC_SINTOM_00': { celda: 'D325', campo: '00a-11a', tabla: '26_TBC', filtro_deteccion_de_tbc: 'Sintomáticos Respiratorios Examinados (TBC)', filtro_orden: '1' },
    '26_TBC_SINTOM_12': { celda: 'E325', campo: '12a-17a', tabla: '26_TBC', filtro_deteccion_de_tbc: 'Sintomáticos Respiratorios Examinados (TBC)', filtro_orden: '1' },
    '26_TBC_SINTOM_18': { celda: 'F325', campo: '18a-29a', tabla: '26_TBC', filtro_deteccion_de_tbc: 'Sintomáticos Respiratorios Examinados (TBC)', filtro_orden: '1' },
    '26_TBC_SINTOM_30': { celda: 'G325', campo: '30a-59a', tabla: '26_TBC', filtro_deteccion_de_tbc: 'Sintomáticos Respiratorios Examinados (TBC)', filtro_orden: '1' },
    '26_TBC_SINTOM_60': { celda: 'H325', campo: '60a+',    tabla: '26_TBC', filtro_deteccion_de_tbc: 'Sintomáticos Respiratorios Examinados (TBC)', filtro_orden: '1' },

    // ========================================================================
    // SECCIÓN 27: 27_SALUD_OCULAR (5 Grupos de Edad)
    // ========================================================================

    // ORDEN 01: Examen de los ojos y la visión (Normal) (Fila 329)
    '27_OCU_NORMAL_00': { celda: 'D329', campo: '00a-11a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Normal)', filtro_orden: '1' },
    '27_OCU_NORMAL_12': { celda: 'E329', campo: '12a-17a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Normal)', filtro_orden: '1' },
    '27_OCU_NORMAL_18': { celda: 'F329', campo: '18a-29a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Normal)', filtro_orden: '1' },
    '27_OCU_NORMAL_30': { celda: 'G329', campo: '30a-59a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Normal)', filtro_orden: '1' },
    '27_OCU_NORMAL_60': { celda: 'H329', campo: '60a+',    tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Normal)', filtro_orden: '1' },

    // ORDEN 02: Examen de los ojos y la visión (Anormal) (Fila 330)
    '27_OCU_ANORMAL_00': { celda: 'D330', campo: '00a-11a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Anormal)', filtro_orden: '2' },
    '27_OCU_ANORMAL_12': { celda: 'E330', campo: '12a-17a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Anormal)', filtro_orden: '2' },
    '27_OCU_ANORMAL_18': { celda: 'F330', campo: '18a-29a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Anormal)', filtro_orden: '2' },
    '27_OCU_ANORMAL_30': { celda: 'G330', campo: '30a-59a', tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Anormal)', filtro_orden: '2' },
    '27_OCU_ANORMAL_60': { celda: 'H330', campo: '60a+',    tabla: '27_SALUD_OCULAR', filtro_salud_ocular: 'Examen de los ojos y la visión (Anormal)', filtro_orden: '2' },

    // ========================================================================
    // SECCIÓN 28: 28_VISITA_FAMILIAR (5 Grupos de Edad)
    // ========================================================================

    // ORDEN 01: Con 1 Visita (Fila 334)
    '28_VIS_FI_1V_00': { celda: 'D334', campo: '00a-11a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 1 Visita', filtro_orden: '1' },
    '28_VIS_FI_1V_12': { celda: 'E334', campo: '12a-17a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 1 Visita', filtro_orden: '1' },
    '28_VIS_FI_1V_18': { celda: 'F334', campo: '18a-29a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 1 Visita', filtro_orden: '1' },
    '28_VIS_FI_1V_30': { celda: 'G334', campo: '30a-59a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 1 Visita', filtro_orden: '1' },
    '28_VIS_FI_1V_60': { celda: 'H334', campo: '60a+',    tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 1 Visita', filtro_orden: '1' },

    // ORDEN 02: Con 2 Visitas (Fila 335)
    '28_VIS_FI_2V_00': { celda: 'D335', campo: '00a-11a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 2 Visitas', filtro_orden: '2' },
    '28_VIS_FI_2V_12': { celda: 'E335', campo: '12a-17a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 2 Visitas', filtro_orden: '2' },
    '28_VIS_FI_2V_18': { celda: 'F335', campo: '18a-29a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 2 Visitas', filtro_orden: '2' },
    '28_VIS_FI_2V_30': { celda: 'G335', campo: '30a-59a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 2 Visitas', filtro_orden: '2' },
    '28_VIS_FI_2V_60': { celda: 'H335', campo: '60a+',    tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 2 Visitas', filtro_orden: '2' },

    // ORDEN 03: Con 3 a + visitas (Fila 336 - ¡Ojo, "visitas" en minúscula!)
    '28_VIS_FI_3V_00': { celda: 'D336', campo: '00a-11a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 3 a + visitas', filtro_orden: '3' },
    '28_VIS_FI_3V_12': { celda: 'E336', campo: '12a-17a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 3 a + visitas', filtro_orden: '3' },
    '28_VIS_FI_3V_18': { celda: 'F336', campo: '18a-29a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 3 a + visitas', filtro_orden: '3' },
    '28_VIS_FI_3V_30': { celda: 'G336', campo: '30a-59a', tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 3 a + visitas', filtro_orden: '3' },
    '28_VIS_FI_3V_60': { celda: 'H336', campo: '60a+',    tabla: '28_VISITA_FAMILIAR', filtro_visita_familiar_integral: 'Con 3 a + visitas', filtro_orden: '3' }
};

const CONFIG_METALES = {
    nombre: 'Metales Pesados',
    codigo: 'METALES',
    icono: '🧪',
    color: '#3b82f6',
    plantilla: 'plantillas/Plantilla_Metales_Pesados.xlsx',
    api: 'api/api_reporte_metales_pesados.php',

    catalogo: [
        { CODIGO: '01_MEDIO_AMBIENTE', NOMBRE: 'Exposición Medio Ambiente' },
        { CODIGO: '02_MONITOREO', NOMBRE: 'Monitoreo' },
        { CODIGO: '03_MORBILIDAD', NOMBRE: 'Morbilidad' },
        { CODIGO: '04_SIGNOS', NOMBRE: 'Signos y Síntomas' },
        { CODIGO: '05_VISITAS', NOMBRE: 'Visitas Domiciliarias' },
        { CODIGO: '06_SALUD_BUCAL', NOMBRE: 'Salud Bucal' },
        { CODIGO: '07_NUTRICIONAL', NOMBRE: 'Evaluación Física/Nutricional' },
        { CODIGO: '08_INMUNIZACIONES', NOMBRE: 'Inmunizaciones' },
        { CODIGO: '09_CLINICA', NOMBRE: 'Evaluación Clínica' },
        { CODIGO: '10_SALUD_MENTAL', NOMBRE: 'Salud Mental' },
        { CODIGO: '11_SALUD_MENTAL_1', NOMBRE: 'Salud Mental 1' },
        { CODIGO: '12_SALUD_MENTAL_2', NOMBRE: 'Salud Mental 2' },
        { CODIGO: '13_SALUD_MENTAL_3', NOMBRE: 'Salud Mental 3' },
        { CODIGO: '14_ETAPA_DE_VIDA_NINO_1', NOMBRE: 'Niño 1' },
        { CODIGO: '15_ETAPA_DE_VIDA_NINO_2', NOMBRE: 'Niño 2' },
        { CODIGO: '16_ETAPA_DE_VIDA_NINO_3', NOMBRE: 'Niño 3' },
        { CODIGO: '17_ETAPA_DE_VIDA_NINO_4', NOMBRE: 'Niño 4' },
        { CODIGO: '18_ETAPA_DE_VIDA_NINO_5', NOMBRE: 'Niño 5' },
        { CODIGO: '19_CONTROL_ADOLESCENTE', NOMBRE: 'Adolescente' },
        { CODIGO: '20_MATERNO', NOMBRE: 'Materno' },
        { CODIGO: '21_VACAM', NOMBRE: 'Adulto Mayor' },
        { CODIGO: '22_CONSEJERIAS', NOMBRE: 'Consejerías' },
        { CODIGO: '23_NO_TRANSMISIBLES_1', NOMBRE: 'No Transmisibles 1' },
        { CODIGO: '24_NO_TRANSMISIBLES_2', NOMBRE: 'No Transmisibles 2' },
        { CODIGO: '25_NO_TRANSMISIBLES_3', NOMBRE: 'No Transmisibles 3' },
        { CODIGO: '26_TBC', NOMBRE: 'TBC' },
        { CODIGO: '27_SALUD_OCULAR', NOMBRE: 'Salud Ocular' },
        { CODIGO: '28_VISITA_FAMILIAR', NOMBRE: 'Visita Familiar' }
    ],

    columnas_excel: [
        { wch: 5 }, { wch: 30 }, { wch: 8 }, { wch: 15 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }
    ],
    
    paleta_colores: [
        { header: '#8B0000', subheader: '#B22222', titulo: '#CD5C5C' },
        { header: '#006400', subheader: '#228B22', titulo: '#32CD32' },
        { header: '#1B4F72', subheader: '#2E86C1', titulo: '#85C1E9' }
    ],
    
    titulo_pdf: 'REPORTE NO METALES PESADOS',
    nombre_archivo: 'Reporte_Metales_Pesados',
    
    // Filtros organizados por tipo de tabla
    filtros: {
        filtro_actividad: ['Población en General', 'Gestantes', 'Población en General (Ocupacional)', 'Gestantes (Ocupacional)', 'Población en General (Mixto)', 'Gestantes (Mixto)'],
        filtro_diagnostico: ['Anemia Nutricional (D508+D509+D518+D528)', 'Anemia no especificada (D64.9)', 'Anemia sideroblastica secundaria (D64.1)', 'Enfermedad de la sangre y de los órganos hematopoyéticos y ciertos trastornos que afectan al mecanismo inmunologico (D50 - D80)', 'Enfermedad de Bowen (D23 Otras neoplasias benignas de piel)', 'Carcinoma espinocelular (C44 Otras neoplasias malignas de la piel)', 'Carcinoma basocelular (D04 Carcinoma in situ de la piel)', 'Neoplasias (Lesiones) benignas de piel (D23)', 'Neuropatía periferica (G900)', 'Polineuropatía (G618+G619)', 'Deterioro cognitivo leve (G31.84)', 'Otros déficits cognitivos especificados (R41.84)', 'Gastritis no específica (K29.7)', 'Perdida anormal de peso (R63.4)', 'Pancitopenia (D61.81)', 'Policitemia (D45+D75.1)', 'Higado graso (K76.0)', 'Otros trastornos de los globulos blancos (D60-D77)', 'Arritmias cardiaca no especificada (I498+I499)', 'Artropatias reactivas (M28+M29)', 'Retardo en el desarrollo (R620)', 'Dificultad de aprendizaje (F81.8 + F81.9)', 'Hipertensión Esencial Primaria (Hipertensión Arterial) I10X', 'Conjuntivitis', 'Cataratas', 'Infecciones Respiratorias Agudas Complicadas', 'Infecciones Respiratorias Agudas No Complicadas'],
        filtro_grupo_edad: ['< 1 año', '01 año', '02 años', '03 años', '04 años', '05a - 11a', 'De 1d - 7d', 'De 8d - 14d', 'De 15d - 21d', 'De 22d - +d', '29 dias - 11 meses', '1 año', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '< 12 años', '12a - 17a', '18a - 29a', '30a - 59a'],
        filtro_tipo_de_consejeria: ['Consejería Integral', 'Consejería Integral (Finalizada)', 'Consejería Nutricional', 'Consejería en Prevención de Enfermedades no transmisibles'],
        filtro_clasificacion: ['Valoración Clínica de Factores de Riesgo', 'Valoración clínica sin factores de riesgo', 'Valoración clinica con factores de riesgo', 'Valoración Clínica y tamizaje de laboratorio'],
        filtro_casos_diagnosticados_hta: ['Hipertensión esencial (primaria)', 'Nefropatía hipertensiva'],
        filtro_casos_diagnosticados_diabetes_mellitus: ['Diabetes mellitus tipo 1', 'Diabetes mellitus tipo 2', 'Nefropatia diabética', 'Retinopatia diabética'],
        filtro_deteccion_de_tbc: ['Sintomáticos Respiratorios Examinados (TBC)'],
        filtro_salud_ocular: ['Examen de los ojos y la visión (Normal)', 'Examen de los ojos y la visión (Anormal)'],
        filtro_visita_familiar_integral: ['Con 1 Visita', 'Con 2 Visitas', 'Con 3 a + visitas'],
        filtro_situacion: ['Persona Adulta Mayor Saludable', 'Persona Adulta Mayor Enferma']
    },
    
    estilos_css: `
        #excel-table td:not(:empty), #excel-table th:not(:empty) { 
            border: 1px solid #000000 !important; 
        }
        #excel-table td:empty, #excel-table th:empty { 
            border: none !important; 
        }
        #excel-table {
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif !important;
            font-size: 9px !important;
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
        }
        #excel-table td, #excel-table th {
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif !important;
            font-size: 9px !important;
            padding: 2px 4px;
            vertical-align: middle;
            white-space: normal;
            word-wrap: break-word;
            word-break: break-word;
        }
        #excel-table td:nth-child(1), #excel-table th:nth-child(1) {
            min-width: 5px; max-width: 100px; width: 80px;
            text-align: left !important;
            padding: 2px 2px;
        }
        #excel-table td:nth-child(2), #excel-table th:nth-child(2) {
            min-width: 30px; max-width: 100px; width: 80px;
            text-align: left !important;
        }
        #excel-table td:nth-child(3), #excel-table th:nth-child(3) {
            min-width: 20px; max-width: 100px; width: 80px;
            text-align: center !important;
        }
        #excel-table td:nth-child(4), #excel-table th:nth-child(4) {
            min-width: 180px; max-width: 300px; width: 250px;
            padding: 2px 6px;
            text-align: center !important;
        }
        #excel-table td:nth-child(n+5), #excel-table th:nth-child(n+5) {
            min-width: 25px; max-width: 45px; width: 35px;
            padding: 2px 3px;
            text-align: center !important;
            
        }
        #excel-table th {
            background-color: #1a3c6e !important;
            font-weight: bold !important;
            font-size: 9px !important;
            padding: 3px 4px;
            border-bottom: 2px solid #0d2b4f !important;
            border-top: 2px solid #0d2b4f !important;
            color: #ffffff !important;
            white-space: normal;
            word-break: break-word;
            line-height: 1.2;
        }
        #excel-table tr { min-height: 18px; }
    `
};

// ============================================
// 3. FUNCIONES DE INTEGRACIÓN
// ============================================
function getCatalogoMetalesPesados() {
    // Retorna los códigos de tus SPs para que tu backend sepa qué consultar
    return [
        '01_MEDIO_AMBIENTE',
        '02_MONITOREO',
        '03_MORBILIDAD',
        '04_SIGNOS_Y_SINTOMAS',
        '05_VISITAS_DOMICILIARIAS',
        '06_SALUD_BUCAL',
        '07_E_FISICA_NUTRICIONAL',
        '08_INMUNIZACIONES',
        '09_EVALUACION_CLINICA',
        '10_SALUD_MENTAL',
        '11_SALUD_MENTAL_1',
        '12_SALUD_MENTAL_2',
        '13_SALUD_MENTAL_3',
        '14_ETAPA_DE_VIDA_NINO_1',
        '15_ETAPA_DE_VIDA_NINO_2',
        '16_ETAPA_DE_VIDA_NINO_3',
        '17_ETAPA_DE_VIDA_NINO_4',
        '18_ETAPA_DE_VIDA_NINO_5',
        '19_CONTROL_ADOLESCENTE',
        '20_MATERNO',
        '21_VACAM',
        '22_CONSEJERIAS',
        '23_NO_TRANSMISIBLES_1',
        '24_NO_TRANSMISIBLES_2',
        '25_NO_TRANSMISIBLES_3',
        '26_TBC',
        '27_SALUD_OCULAR',
        '28_VISITA_FAMILIAR'
    ];
}

