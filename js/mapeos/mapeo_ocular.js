// js/mapeos/mapeo_ocular.js
// ============================================
// ESTRATEGIA: SALUD OCULAR
// Basado en: Plantilla_Ocular.xlsx
// ============================================

// js/mapeos/mapeo_ocular.js
// ============================================
// ESTRATEGIA: SALUD OCULAR
// Basado en: Plantilla_Ocular.xlsx
// ============================================

const MAPEO_CELDAS_OCULAR = {

    // ====================================================================
    // SECCIÓN: ROP
    // ====================================================================

    'TAMIZAJE_TOTAL_OC': { celda: 'G9', campo: 'TOTAL', seccion: 'ROP - Tamizaje', tabla: 'ROP', actividad: 'Tamizaje de recien nacidos con factores de riesgo' },
    'TAMIZAJE_1m_OC': { celda: 'H9', campo: '<1m', seccion: 'ROP - Tamizaje', tabla: 'ROP', actividad: 'Tamizaje de recien nacidos con factores de riesgo' },
    'TAMIZAJE_1m_6m_OC': { celda: 'I9', campo: '1m-6m', seccion: 'ROP - Tamizaje', tabla: 'ROP', actividad: 'Tamizaje de recien nacidos con factores de riesgo' },
    'TAMIZAJE_7m_11m_OC': { celda: 'J9', campo: '7m-11m', seccion: 'ROP - Tamizaje', tabla: 'ROP', actividad: 'Tamizaje de recien nacidos con factores de riesgo' },
    'TAMIZAJE_1a_3a_OC': { celda: 'K9', campo: '1a-3a', seccion: 'ROP - Tamizaje', tabla: 'ROP', actividad: 'Tamizaje de recien nacidos con factores de riesgo' },
    'SEGUIMIENTO_TOTAL_OC': { celda: 'G10', campo: 'TOTAL', seccion: 'ROP - Seguimiento', tabla: 'ROP', actividad: 'Seguimiento de recien nacidos con factores de riesgo' },
    'SEGUIMIENTO_1m_OC': { celda: 'H10', campo: '<1m', seccion: 'ROP - Seguimiento', tabla: 'ROP', actividad: 'Seguimiento de recien nacidos con factores de riesgo' },
    'SEGUIMIENTO_1m_6m_OC': { celda: 'I10', campo: '1m-6m', seccion: 'ROP - Seguimiento', tabla: 'ROP', actividad: 'Seguimiento de recien nacidos con factores de riesgo' },
    'SEGUIMIENTO_7m_11m_OC': { celda: 'J10', campo: '7m-11m', seccion: 'ROP - Seguimiento', tabla: 'ROP', actividad: 'Seguimiento de recien nacidos con factores de riesgo' },
    'SEGUIMIENTO_1a_3a_OC': { celda: 'K10', campo: '1a-3a', seccion: 'ROP - Seguimiento', tabla: 'ROP', actividad: 'Seguimiento de recien nacidos con factores de riesgo' },
    'REFERENCIA_TOTAL_OC': { celda: 'G11', campo: 'TOTAL', seccion: 'ROP - Referencia', tabla: 'ROP', actividad: 'Referencia de recien nacidos con factores de riesgo de ROP' },
    'REFERENCIA_1m_OC': { celda: 'H11', campo: '<1m', seccion: 'ROP - Referencia', tabla: 'ROP', actividad: 'Referencia de recien nacidos con factores de riesgo de ROP' },
    'REFERENCIA_1m_6m_OC': { celda: 'I11', campo: '1m-6m', seccion: 'ROP - Referencia', tabla: 'ROP', actividad: 'Referencia de recien nacidos con factores de riesgo de ROP' },
    'REFERENCIA_7m_11m_OC': { celda: 'J11', campo: '7m-11m', seccion: 'ROP - Referencia', tabla: 'ROP', actividad: 'Referencia de recien nacidos con factores de riesgo de ROP' },
    'REFERENCIA_1a_3a_OC': { celda: 'K11', campo: '1a-3a', seccion: 'ROP - Referencia', tabla: 'ROP', actividad: 'Referencia de recien nacidos con factores de riesgo de ROP' },
    'CASOS_TOTAL_OC': { celda: 'G14', campo: 'TOTAL', seccion: 'ROP - Diagnóstico', tabla: 'ROP', actividad: 'Casos de recien nacidos con ROP' },
    'CASOS_1m_OC': { celda: 'H14', campo: '<1m', seccion: 'ROP - Diagnóstico', tabla: 'ROP', actividad: 'Casos de recien nacidos con ROP' },
    'CASOS_1m_6m_OC': { celda: 'I14', campo: '1m-6m', seccion: 'ROP - Diagnóstico', tabla: 'ROP', actividad: 'Casos de recien nacidos con ROP' },
    'CASOS_7m_11m_OC': { celda: 'J14', campo: '7m-11m', seccion: 'ROP - Diagnóstico', tabla: 'ROP', actividad: 'Casos de recien nacidos con ROP' },
    'CASOS_1a_3a_OC': { celda: 'K14', campo: '1a-3a', seccion: 'ROP - Diagnóstico', tabla: 'ROP', actividad: 'Casos de recien nacidos con ROP' },
    'REFERENCIA1_TOTAL_OC': { celda: 'G15', campo: 'TOTAL', seccion: 'ROP - Referencia ROP', tabla: 'ROP', actividad: 'Referencia de recien nacidos con ROP' },
    'REFERENCIA1_1m_OC': { celda: 'H15', campo: '<1m', seccion: 'ROP - Referencia ROP', tabla: 'ROP', actividad: 'Referencia de recien nacidos con ROP' },
    'REFERENCIA1_1m_6m_OC': { celda: 'I15', campo: '1m-6m', seccion: 'ROP - Referencia ROP', tabla: 'ROP', actividad: 'Referencia de recien nacidos con ROP' },
    'REFERENCIA1_7m_11m_OC': { celda: 'J15', campo: '7m-11m', seccion: 'ROP - Referencia ROP', tabla: 'ROP', actividad: 'Referencia de recien nacidos con ROP' },
    'REFERENCIA1_1a_3a_OC': { celda: 'K15', campo: '1a-3a', seccion: 'ROP - Referencia ROP', tabla: 'ROP', actividad: 'Referencia de recien nacidos con ROP' },
    'TELE_TOTAL_OC': { celda: 'G16', campo: 'TOTAL', seccion: 'ROP - Teleinterconsulta', tabla: 'ROP', actividad: 'Teleinterconsulta' },
    'TELE_1m_OC': { celda: 'H16', campo: '<1m', seccion: 'ROP - Teleinterconsulta', tabla: 'ROP', actividad: 'Teleinterconsulta' },
    'TELE_1m_6m_OC': { celda: 'I16', campo: '1m-6m', seccion: 'ROP - Teleinterconsulta', tabla: 'ROP', actividad: 'Teleinterconsulta' },
    'TELE_7m_11m_OC': { celda: 'J16', campo: '7m-11m', seccion: 'ROP - Teleinterconsulta', tabla: 'ROP', actividad: 'Teleinterconsulta' },
    'TELE_1a_3a_OC': { celda: 'K16', campo: '1a-3a', seccion: 'ROP - Teleinterconsulta', tabla: 'ROP', actividad: 'Teleinterconsulta' },
    'TRATAMIENTO_LASER_TOTAL_OC': { celda: 'G19', campo: 'TOTAL', seccion: 'ROP - Tratamiento Laser', tabla: 'ROP', actividad: 'Tratamiento con Láser' },
    'TRATAMIENTO_LASER_1m_OC': { celda: 'H19', campo: '<1m', seccion: 'ROP - Tratamiento Laser', tabla: 'ROP', actividad: 'Tratamiento con Láser' },
    'TRATAMIENTO_LASER_1m_6m_OC': { celda: 'I19', campo: '1m-6m', seccion: 'ROP - Tratamiento Laser', tabla: 'ROP', actividad: 'Tratamiento con Láser' },
    'TRATAMIENTO_LASER_7m_11m_OC': { celda: 'J19', campo: '7m-11m', seccion: 'ROP - Tratamiento Laser', tabla: 'ROP', actividad: 'Tratamiento con Láser' },
    'TRATAMIENTO_LASER_1a_3a_OC': { celda: 'K19', campo: '1a-3a', seccion: 'ROP - Tratamiento Laser', tabla: 'ROP', actividad: 'Tratamiento con Láser' },
    'TRATAMIENTO_ANTIANGIOGENICO_TOTAL_OC': { celda: 'G20', campo: 'TOTAL', seccion: 'ROP - Tratamiento Antiangiogénico', tabla: 'ROP', actividad: 'Tratamiento con antiangiogénico' },
    'TRATAMIENTO_ANTIANGIOGENICO_1m_OC': { celda: 'H20', campo: '<1m', seccion: 'ROP - Tratamiento Antiangiogénico', tabla: 'ROP', actividad: 'Tratamiento con antiangiogénico' },
    'TRATAMIENTO_ANTIANGIOGENICO_1m_6m_OC': { celda: 'I20', campo: '1m-6m', seccion: 'ROP - Tratamiento Antiangiogénico', tabla: 'ROP', actividad: 'Tratamiento con antiangiogénico' },
    'TRATAMIENTO_ANTIANGIOGENICO_7m_11m_OC': { celda: 'J20', campo: '7m-11m', seccion: 'ROP - Tratamiento Antiangiogénico', tabla: 'ROP', actividad: 'Tratamiento con antiangiogénico' },
    'TRATAMIENTO_ANTIANGIOGENICO_1a_3a_OC': { celda: 'K20', campo: '1a-3a', seccion: 'ROP - Tratamiento Antiangiogénico', tabla: 'ROP', actividad: 'Tratamiento con antiangiogénico' },
    'TRATAMIENTO_LASER_ANTIANGIOGENICO_TOTAL_OC': { celda: 'G21', campo: 'TOTAL', seccion: 'ROP - Tratamiento Laser+Antiangio', tabla: 'ROP', actividad: 'Tratamiento con Láser + antiangiogénico' },
    'TRATAMIENTO_LASER_ANTIANGIOGENICO_1m_OC': { celda: 'H21', campo: '<1m', seccion: 'ROP - Tratamiento Laser+Antiangio', tabla: 'ROP', actividad: 'Tratamiento con Láser + antiangiogénico' },
    'TRATAMIENTO_LASER_ANTIANGIOGENICO_1m_6m_OC': { celda: 'I21', campo: '1m-6m', seccion: 'ROP - Tratamiento Laser+Antiangio', tabla: 'ROP', actividad: 'Tratamiento con Láser + antiangiogénico' },
    'TRATAMIENTO_LASER_ANTIANGIOGENICO_7m_11m_OC': { celda: 'J21', campo: '7m-11m', seccion: 'ROP - Tratamiento Laser+Antiangio', tabla: 'ROP', actividad: 'Tratamiento con Láser + antiangiogénico' },
    'TRATAMIENTO_LASER_ANTIANGIOGENICO_1a_3a_OC': { celda: 'K21', campo: '1a-3a', seccion: 'ROP - Tratamiento Laser+Antiangio', tabla: 'ROP', actividad: 'Tratamiento con Láser + antiangiogénico' },
    'TRATAMIENTO_INTRAVITREO_TOTAL_OC': { celda: 'G22', campo: 'TOTAL', seccion: 'ROP - Tratamiento Intravitreo', tabla: 'ROP', actividad: 'Tratamiento intravítreo' },
    'TRATAMIENTO_INTRAVITREO_1m_OC': { celda: 'H22', campo: '<1m', seccion: 'ROP - Tratamiento Intravitreo', tabla: 'ROP', actividad: 'Tratamiento intravítreo' },
    'TRATAMIENTO_INTRAVITREO_1m_6m_OC': { celda: 'I22', campo: '1m-6m', seccion: 'ROP - Tratamiento Intravitreo', tabla: 'ROP', actividad: 'Tratamiento intravítreo' },
    'TRATAMIENTO_INTRAVITREO_7m_11m_OC': { celda: 'J22', campo: '7m-11m', seccion: 'ROP - Tratamiento Intravitreo', tabla: 'ROP', actividad: 'Tratamiento intravítreo' },
    'TRATAMIENTO_INTRAVITREO_1a_3a_OC': { celda: 'K22', campo: '1a-3a', seccion: 'ROP - Tratamiento Intravitreo', tabla: 'ROP', actividad: 'Tratamiento intravítreo' },
    'REFERENCIA_ROP_TOTAL_OC': { celda: 'G23', campo: 'TOTAL', seccion: 'ROP - Referencia Tratamiento', tabla: 'ROP', actividad: 'Referencia de ROP' },
    'REFERENCIA_ROP_1m_OC': { celda: 'H23', campo: '<1m', seccion: 'ROP - Referencia Tratamiento', tabla: 'ROP', actividad: 'Referencia de ROP' },
    'REFERENCIA_ROP_1m_6m_OC': { celda: 'I23', campo: '1m-6m', seccion: 'ROP - Referencia Tratamiento', tabla: 'ROP', actividad: 'Referencia de ROP' },
    'REFERENCIA_ROP_7m_11m_OC': { celda: 'J23', campo: '7m-11m', seccion: 'ROP - Referencia Tratamiento', tabla: 'ROP', actividad: 'Referencia de ROP' },
    'REFERENCIA_ROP_1a_3a_OC': { celda: 'K23', campo: '1a-3a', seccion: 'ROP - Referencia Tratamiento', tabla: 'ROP', actividad: 'Referencia de ROP' },
    'CONTROL_POST_OP_TOTAL_OC': { celda: 'G26', campo: 'TOTAL', seccion: 'ROP - Control Post OP', tabla: 'ROP', actividad: 'Atención de Control Post Operatorio de recién nacidos' },
    'CONTROL_POST_OP_1m_OC': { celda: 'H26', campo: '<1m', seccion: 'ROP - Control Post OP', tabla: 'ROP', actividad: 'Atención de Control Post Operatorio de recién nacidos' },
    'CONTROL_POST_OP_1m_6m_OC': { celda: 'I26', campo: '1m-6m', seccion: 'ROP - Control Post OP', tabla: 'ROP', actividad: 'Atención de Control Post Operatorio de recién nacidos' },
    'CONTROL_POST_OP_7m_11m_OC': { celda: 'J26', campo: '7m-11m', seccion: 'ROP - Control Post OP', tabla: 'ROP', actividad: 'Atención de Control Post Operatorio de recién nacidos' },
    'CONTROL_POST_OP_1a_3a_OC': { celda: 'K26', campo: '1a-3a', seccion: 'ROP - Control Post OP', tabla: 'ROP', actividad: 'Atención de Control Post Operatorio de recién nacidos' },
    'ERRORES_REFACCION_TOTAL_OC': { celda: 'G29', campo: 'TOTAL', seccion: 'ROP - Complicación Refracción', tabla: 'ROP', actividad: 'Errores de refracción secundario al tratamiento de ROP' },
    'ERRORES_REFACCION_1m_OC': { celda: 'H29', campo: '<1m', seccion: 'ROP - Complicación Refracción', tabla: 'ROP', actividad: 'Errores de refracción secundario al tratamiento de ROP' },
    'ERRORES_REFACCION_1m_6m_OC': { celda: 'I29', campo: '1m-6m', seccion: 'ROP - Complicación Refracción', tabla: 'ROP', actividad: 'Errores de refracción secundario al tratamiento de ROP' },
    'ERRORES_REFACCION_7m_11m_OC': { celda: 'J29', campo: '7m-11m', seccion: 'ROP - Complicación Refracción', tabla: 'ROP', actividad: 'Errores de refracción secundario al tratamiento de ROP' },
    'ERRORES_REFACCION_1a_3a_OC': { celda: 'K29', campo: '1a-3a', seccion: 'ROP - Complicación Refracción', tabla: 'ROP', actividad: 'Errores de refracción secundario al tratamiento de ROP' },
    'NISTAGMO_TOTAL_OC': { celda: 'G30', campo: 'TOTAL', seccion: 'ROP - Complicación Nistagmo', tabla: 'ROP', actividad: 'Nistagmo secundario al tratamiento de ROP' },
    'NISTAGMO_1m_OC': { celda: 'H30', campo: '<1m', seccion: 'ROP - Complicación Nistagmo', tabla: 'ROP', actividad: 'Nistagmo secundario al tratamiento de ROP' },
    'NISTAGMO_1m_6m_OC': { celda: 'I30', campo: '1m-6m', seccion: 'ROP - Complicación Nistagmo', tabla: 'ROP', actividad: 'Nistagmo secundario al tratamiento de ROP' },
    'NISTAGMO_7m_11m_OC': { celda: 'J30', campo: '7m-11m', seccion: 'ROP - Complicación Nistagmo', tabla: 'ROP', actividad: 'Nistagmo secundario al tratamiento de ROP' },
    'NISTAGMO_1a_3a_OC': { celda: 'K30', campo: '1a-3a', seccion: 'ROP - Complicación Nistagmo', tabla: 'ROP', actividad: 'Nistagmo secundario al tratamiento de ROP' },
    'ESTRABISMO_TOTAL_OC': { celda: 'G31', campo: 'TOTAL', seccion: 'ROP - Complicación Estrabismo', tabla: 'ROP', actividad: 'Estrabismo secundario al tratamiento de ROP' },
    'ESTRABISMO_1m_OC': { celda: 'H31', campo: '<1m', seccion: 'ROP - Complicación Estrabismo', tabla: 'ROP', actividad: 'Estrabismo secundario al tratamiento de ROP' },
    'ESTRABISMO_1m_6m_OC': { celda: 'I31', campo: '1m-6m', seccion: 'ROP - Complicación Estrabismo', tabla: 'ROP', actividad: 'Estrabismo secundario al tratamiento de ROP' },
    'ESTRABISMO_7m_11m_OC': { celda: 'J31', campo: '7m-11m', seccion: 'ROP - Complicación Estrabismo', tabla: 'ROP', actividad: 'Estrabismo secundario al tratamiento de ROP' },
    'ESTRABISMO_1a_3a_OC': { celda: 'K31', campo: '1a-3a', seccion: 'ROP - Complicación Estrabismo', tabla: 'ROP', actividad: 'Estrabismo secundario al tratamiento de ROP' },
    'GLAUCOMA_ROP_TOTAL_OC': { celda: 'G32', campo: 'TOTAL', seccion: 'ROP - Complicación Glaucoma', tabla: 'ROP', actividad: 'Glaucoma secundario al tratamiento de ROP' },
    'GLAUCOMA_ROP_1m_OC': { celda: 'H32', campo: '<1m', seccion: 'ROP - Complicación Glaucoma', tabla: 'ROP', actividad: 'Glaucoma secundario al tratamiento de ROP' },
    'GLAUCOMA_ROP_1m_6m_OC': { celda: 'I32', campo: '1m-6m', seccion: 'ROP - Complicación Glaucoma', tabla: 'ROP', actividad: 'Glaucoma secundario al tratamiento de ROP' },
    'GLAUCOMA_ROP_7m_11m_OC': { celda: 'J32', campo: '7m-11m', seccion: 'ROP - Complicación Glaucoma', tabla: 'ROP', actividad: 'Glaucoma secundario al tratamiento de ROP' },
    'GLAUCOMA_ROP_1a_3a_OC': { celda: 'K32', campo: '1a-3a', seccion: 'ROP - Complicación Glaucoma', tabla: 'ROP', actividad: 'Glaucoma secundario al tratamiento de ROP' },
    'CATARATA_ROP_TOTAL_OC': { celda: 'G33', campo: 'TOTAL', seccion: 'ROP - Complicación Catarata', tabla: 'ROP', actividad: 'Catarata secundaria al tratamiento de ROP' },
    'CATARATA_ROP_1m_OC': { celda: 'H33', campo: '<1m', seccion: 'ROP - Complicación Catarata', tabla: 'ROP', actividad: 'Catarata secundaria al tratamiento de ROP' },
    'CATARATA_ROP_1m_6m_OC': { celda: 'I33', campo: '1m-6m', seccion: 'ROP - Complicación Catarata', tabla: 'ROP', actividad: 'Catarata secundaria al tratamiento de ROP' },
    'CATARATA_ROP_7m_11m_OC': { celda: 'J33', campo: '7m-11m', seccion: 'ROP - Complicación Catarata', tabla: 'ROP', actividad: 'Catarata secundaria al tratamiento de ROP' },
    'CATARATA_ROP_1a_3a_OC': { celda: 'K33', campo: '1a-3a', seccion: 'ROP - Complicación Catarata', tabla: 'ROP', actividad: 'Catarata secundaria al tratamiento de ROP' },
    'REHABILITACION_VISUAL_TOTAL_OC': { celda: 'G34', campo: 'TOTAL', seccion: 'ROP - Rehabilitación Visual', tabla: 'ROP', actividad: 'Rehabilitación visual de ceguera y baja visión secundaria a ROP' },
    'REHABILITACION_VISUAL_1m_OC': { celda: 'H34', campo: '<1m', seccion: 'ROP - Rehabilitación Visual', tabla: 'ROP', actividad: 'Rehabilitación visual de ceguera y baja visión secundaria a ROP' },
    'REHABILITACION_VISUAL_1m_6m_OC': { celda: 'I34', campo: '1m-6m', seccion: 'ROP - Rehabilitación Visual', tabla: 'ROP', actividad: 'Rehabilitación visual de ceguera y baja visión secundaria a ROP' },
    'REHABILITACION_VISUAL_7m_11m_OC': { celda: 'J34', campo: '7m-11m', seccion: 'ROP - Rehabilitación Visual', tabla: 'ROP', actividad: 'Rehabilitación visual de ceguera y baja visión secundaria a ROP' },
    'REHABILITACION_VISUAL_1a_3a_OC': { celda: 'K34', campo: '1a-3a', seccion: 'ROP - Rehabilitación Visual', tabla: 'ROP', actividad: 'Rehabilitación visual de ceguera y baja visión secundaria a ROP' },

    // ====================================================================
    // SECCIÓN: VISION
    // ====================================================================



    'VI2_TOTAL_OC': { celda: 'G43', campo: 'TOTAL', seccion: 'VISION - Examen N', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión N' },
    'VI2_menor1a_OC': { celda: 'H43', campo: '<1a', seccion: 'VISION - Examen N', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión N' },
    'VI2_1a_OC': { celda: 'I43', campo: '1a', seccion: 'VISION - Examen N', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión N' },
    'VI2_2a_OC': { celda: 'J43', campo: '2a', seccion: 'VISION - Examen N', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión N' },

    'VI3_TOTAL_OC': { celda: 'G44', campo: 'TOTAL', seccion: 'VISION - Examen A', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión A' },
    'VI3_menor1a_OC': { celda: 'H44', campo: '<1a', seccion: 'VISION - Examen A', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión A' },
    'VI3_1a_OC': { celda: 'I44', campo: '1a', seccion: 'VISION - Examen A', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión A' },
    'VI3_2a_OC': { celda: 'J44', campo: '2a', seccion: 'VISION - Examen A', tabla: 'VISION', actividad: 'Examen de los Ojos y de la Visión A' },

    'VI_TOTAL_OC': { celda: 'G47', campo: 'TOTAL', seccion: 'VISION - Evaluación sospecha', tabla: 'VISION', actividad: 'Evaluación de sospecha de alteraciones oculares' },
    'VI_menor1a_OC': { celda: 'H47', campo: '<1a', seccion: 'VISION - Evaluación sospecha', tabla: 'VISION', actividad: 'Evaluación de sospecha de alteraciones oculares' },
    'VI_1a_OC': { celda: 'I47', campo: '1a', seccion: 'VISION - Evaluación sospecha', tabla: 'VISION', actividad: 'Evaluación de sospecha de alteraciones oculares' },
    'VI_2a_OC': { celda: 'J47', campo: '2a', seccion: 'VISION - Evaluación sospecha', tabla: 'VISION', actividad: 'Evaluación de sospecha de alteraciones oculares' },

    'VI4_TOTAL_OC': { celda: 'G48', campo: 'TOTAL', seccion: 'VISION - Referencia', tabla: 'VISION', actividad: 'Referencia de alteraciones oculares' },
    'VI4_menor1a_OC': { celda: 'H48', campo: '<1a', seccion: 'VISION - Referencia', tabla: 'VISION', actividad: 'Referencia de alteraciones oculares' },
    'VI4_1a_OC': { celda: 'I48', campo: '1a', seccion: 'VISION - Referencia', tabla: 'VISION', actividad: 'Referencia de alteraciones oculares' },
    'VI4_2a_OC': { celda: 'J48', campo: '2a', seccion: 'VISION - Referencia', tabla: 'VISION', actividad: 'Referencia de alteraciones oculares' },

    // ====================================================================
    // SECCIÓN: REFRACCION
    // ====================================================================

    'RE1_TOTAL_OC': { celda: 'G56', campo: 'TOTAL', seccion: 'REFRACCION - Detección AV', tabla: 'REFRACCION', actividad: 'Detección de la Agudeza Visual' },
    'RE1_3_4a_OC': { celda: 'H56', campo: '3-4a', seccion: 'REFRACCION - Detección AV', tabla: 'REFRACCION', actividad: 'Detección de la Agudeza Visual' },
    'RE1_5_7a_OC': { celda: 'I56', campo: '5-7a', seccion: 'REFRACCION - Detección AV', tabla: 'REFRACCION', actividad: 'Detección de la Agudeza Visual' },
    'RE1_8_11a_OC': { celda: 'J56', campo: '8-11a', seccion: 'REFRACCION - Detección AV', tabla: 'REFRACCION', actividad: 'Detección de la Agudeza Visual' },
    'RE2_TOTAL_OC': { celda: 'G59', campo: 'TOTAL', seccion: 'REFRACCION - Evaluación ER', tabla: 'REFRACCION', actividad: 'Evaluacion Errores Refractivos' },
    'RE2_3_4a_OC': { celda: 'H59', campo: '3-4a', seccion: 'REFRACCION - Evaluación ER', tabla: 'REFRACCION', actividad: 'Evaluacion Errores Refractivos' },
    'RE2_5_7a_OC': { celda: 'I59', campo: '5-7a', seccion: 'REFRACCION - Evaluación ER', tabla: 'REFRACCION', actividad: 'Evaluacion Errores Refractivos' },
    'RE2_8_11a_OC': { celda: 'J59', campo: '8-11a', seccion: 'REFRACCION - Evaluación ER', tabla: 'REFRACCION', actividad: 'Evaluacion Errores Refractivos' },
    'RE3_TOTAL_OC': { celda: 'G60', campo: 'TOTAL', seccion: 'REFRACCION - Referencias ER', tabla: 'REFRACCION', actividad: 'Referencias  Errores Refractivos' },
    'RE3_3_4a_OC': { celda: 'H60', campo: '3-4a', seccion: 'REFRACCION - Referencias ER', tabla: 'REFRACCION', actividad: 'Referencias  Errores Refractivos' },
    'RE3_5_7a_OC': { celda: 'I60', campo: '5-7a', seccion: 'REFRACCION - Referencias ER', tabla: 'REFRACCION', actividad: 'Referencias  Errores Refractivos' },
    'RE3_8_11a_OC': { celda: 'J60', campo: '8-11a', seccion: 'REFRACCION - Referencias ER', tabla: 'REFRACCION', actividad: 'Referencias  Errores Refractivos' },
    'RE4_TOTAL_OC': { celda: 'G61', campo: 'TOTAL', seccion: 'REFRACCION - Consejería Evaluación', tabla: 'REFRACCION', actividad: 'Consejeria en Salud Ocular Evaluacion' },
    'RE4_3_4a_OC': { celda: 'H61', campo: '3-4a', seccion: 'REFRACCION - Consejería Evaluación', tabla: 'REFRACCION', actividad: 'Consejeria en Salud Ocular Evaluacion' },
    'RE4_5_7a_OC': { celda: 'I61', campo: '5-7a', seccion: 'REFRACCION - Consejería Evaluación', tabla: 'REFRACCION', actividad: 'Consejeria en Salud Ocular Evaluacion' },
    'RE4_8_11a_OC': { celda: 'J61', campo: '8-11a', seccion: 'REFRACCION - Consejería Evaluación', tabla: 'REFRACCION', actividad: 'Consejeria en Salud Ocular Evaluacion' },
    'RE5_TOTAL_OC': { celda: 'G64', campo: 'TOTAL', seccion: 'REFRACCION - Hipermetropía', tabla: 'REFRACCION', actividad: 'Hipermetropía' },
    'RE5_3_4a_OC': { celda: 'H64', campo: '3-4a', seccion: 'REFRACCION - Hipermetropía', tabla: 'REFRACCION', actividad: 'Hipermetropía' },
    'RE5_5_7a_OC': { celda: 'I64', campo: '5-7a', seccion: 'REFRACCION - Hipermetropía', tabla: 'REFRACCION', actividad: 'Hipermetropía' },
    'RE5_8_11a_OC': { celda: 'J64', campo: '8-11a', seccion: 'REFRACCION - Hipermetropía', tabla: 'REFRACCION', actividad: 'Hipermetropía' },
    'RE6_TOTAL_OC': { celda: 'G65', campo: 'TOTAL', seccion: 'REFRACCION - Miopía', tabla: 'REFRACCION', actividad: 'Miopía' },
    'RE6_3_4a_OC': { celda: 'H65', campo: '3-4a', seccion: 'REFRACCION - Miopía', tabla: 'REFRACCION', actividad: 'Miopía' },
    'RE6_5_7a_OC': { celda: 'I65', campo: '5-7a', seccion: 'REFRACCION - Miopía', tabla: 'REFRACCION', actividad: 'Miopía' },
    'RE6_8_11a_OC': { celda: 'J65', campo: '8-11a', seccion: 'REFRACCION - Miopía', tabla: 'REFRACCION', actividad: 'Miopía' },
    'RE7_TOTAL_OC': { celda: 'G66', campo: 'TOTAL', seccion: 'REFRACCION - Astigmatismo', tabla: 'REFRACCION', actividad: 'Astigmatismo' },
    'RE7_3_4a_OC': { celda: 'H66', campo: '3-4a', seccion: 'REFRACCION - Astigmatismo', tabla: 'REFRACCION', actividad: 'Astigmatismo' },
    'RE7_5_7a_OC': { celda: 'I66', campo: '5-7a', seccion: 'REFRACCION - Astigmatismo', tabla: 'REFRACCION', actividad: 'Astigmatismo' },
    'RE7_8_11a_OC': { celda: 'J66', campo: '8-11a', seccion: 'REFRACCION - Astigmatismo', tabla: 'REFRACCION', actividad: 'Astigmatismo' },
    'RE8_TOTAL_OC': { celda: 'G67', campo: 'TOTAL', seccion: 'REFRACCION - Anisometropía', tabla: 'REFRACCION', actividad: 'Anisometropía' },
    'RE8_3_4a_OC': { celda: 'H67', campo: '3-4a', seccion: 'REFRACCION - Anisometropía', tabla: 'REFRACCION', actividad: 'Anisometropía' },
    'RE8_5_7a_OC': { celda: 'I67', campo: '5-7a', seccion: 'REFRACCION - Anisometropía', tabla: 'REFRACCION', actividad: 'Anisometropía' },
    'RE8_8_11a_OC': { celda: 'J67', campo: '8-11a', seccion: 'REFRACCION - Anisometropía', tabla: 'REFRACCION', actividad: 'Anisometropía' },
    'RE9_TOTAL_OC': { celda: 'G70', campo: 'TOTAL', seccion: 'REFRACCION - Provisión Anteojos', tabla: 'REFRACCION', actividad: 'Provisión de Anteojos' },
    'RE9_3_4a_OC': { celda: 'H70', campo: '3-4a', seccion: 'REFRACCION - Provisión Anteojos', tabla: 'REFRACCION', actividad: 'Provisión de Anteojos' },
    'RE9_5_7a_OC': { celda: 'I70', campo: '5-7a', seccion: 'REFRACCION - Provisión Anteojos', tabla: 'REFRACCION', actividad: 'Provisión de Anteojos' },
    'RE9_8_11a_OC': { celda: 'J70', campo: '8-11a', seccion: 'REFRACCION - Provisión Anteojos', tabla: 'REFRACCION', actividad: 'Provisión de Anteojos' },
    'RE10_TOTAL_OC': { celda: 'G71', campo: 'TOTAL', seccion: 'REFRACCION - Consejería Tratamiento', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Errores' },
    'RE10_3_4a_OC': { celda: 'H71', campo: '3-4a', seccion: 'REFRACCION - Consejería Tratamiento', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Errores' },
    'RE10_5_7a_OC': { celda: 'I71', campo: '5-7a', seccion: 'REFRACCION - Consejería Tratamiento', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Errores' },
    'RE10_8_11a_OC': { celda: 'J71', campo: '8-11a', seccion: 'REFRACCION - Consejería Tratamiento', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Errores' },
    'RE11_TOTAL_OC': { celda: 'G74', campo: 'TOTAL', seccion: 'REFRACCION - Prueba y ajuste', tabla: 'REFRACCION', actividad: 'Prueba y ajuste de anteojos' },
    'RE11_3_4a_OC': { celda: 'H74', campo: '3-4a', seccion: 'REFRACCION - Prueba y ajuste', tabla: 'REFRACCION', actividad: 'Prueba y ajuste de anteojos' },
    'RE11_5_7a_OC': { celda: 'I74', campo: '5-7a', seccion: 'REFRACCION - Prueba y ajuste', tabla: 'REFRACCION', actividad: 'Prueba y ajuste de anteojos' },
    'RE11_8_11a_OC': { celda: 'J74', campo: '8-11a', seccion: 'REFRACCION - Prueba y ajuste', tabla: 'REFRACCION', actividad: 'Prueba y ajuste de anteojos' },
    'RE12_TOTAL_OC': { celda: 'G75', campo: 'TOTAL', seccion: 'REFRACCION - Consejería Control', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Control' },
    'RE12_3_4a_OC': { celda: 'H75', campo: '3-4a', seccion: 'REFRACCION - Consejería Control', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Control' },
    'RE12_5_7a_OC': { celda: 'I75', campo: '5-7a', seccion: 'REFRACCION - Consejería Control', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Control' },
    'RE12_8_11a_OC': { celda: 'J75', campo: '8-11a', seccion: 'REFRACCION - Consejería Control', tabla: 'REFRACCION', actividad: 'Consejería en salud ocular Control' },

    // ====================================================================
    // SECCIÓN: GLAUCOMA
    // ====================================================================

    'GLA1_TOTAL_OC': { celda: 'G83', campo: 'TOTAL', seccion: 'GLAUCOMA - Detección PIO', tabla: 'GLAUCOMA', actividad: 'Determinación de la Presión Intraocular' },
    'GLA1_Niños_OC': { celda: 'H83', campo: 'Niños', seccion: 'GLAUCOMA - Detección PIO', tabla: 'GLAUCOMA', actividad: 'Determinación de la Presión Intraocular' },
    'GLA1_40_49a_OC': { celda: 'I83', campo: '40-49a', seccion: 'GLAUCOMA - Detección PIO', tabla: 'GLAUCOMA', actividad: 'Determinación de la Presión Intraocular' },
    'GLA1_50_59a_OC': { celda: 'J83', campo: '50-+59a', seccion: 'GLAUCOMA - Detección PIO', tabla: 'GLAUCOMA', actividad: 'Determinación de la Presión Intraocular' },
    'GLA1_mayor60a_OC': { celda: 'K83', campo: '>60a', seccion: 'GLAUCOMA - Detección PIO', tabla: 'GLAUCOMA', actividad: 'Determinación de la Presión Intraocular' },
    'GLA2_TOTAL_OC': { celda: 'G86', campo: 'TOTAL', seccion: 'GLAUCOMA - Evaluación', tabla: 'GLAUCOMA', actividad: 'Evaluación de Glaucoma' },
    'GLA2_Niños_OC': { celda: 'H86', campo: 'Niños', seccion: 'GLAUCOMA - Evaluación', tabla: 'GLAUCOMA', actividad: 'Evaluación de Glaucoma' },
    'GLA2_40_49a_OC': { celda: 'I86', campo: '40-49a', seccion: 'GLAUCOMA - Evaluación', tabla: 'GLAUCOMA', actividad: 'Evaluación de Glaucoma' },
    'GLA2_50_59a_OC': { celda: 'J86', campo: '50-+59a', seccion: 'GLAUCOMA - Evaluación', tabla: 'GLAUCOMA', actividad: 'Evaluación de Glaucoma' },
    'GLA2_mayor60a_OC': { celda: 'K86', campo: '>60a', seccion: 'GLAUCOMA - Evaluación', tabla: 'GLAUCOMA', actividad: 'Evaluación de Glaucoma' },
    'GLA3_TOTAL_OC': { celda: 'G87', campo: 'TOTAL', seccion: 'GLAUCOMA - Referencias', tabla: 'GLAUCOMA', actividad: 'Referencias de sospecha de glaucoma' },
    'GLA3_Niños_OC': { celda: 'H87', campo: 'Niños', seccion: 'GLAUCOMA - Referencias', tabla: 'GLAUCOMA', actividad: 'Referencias de sospecha de glaucoma' },
    'GLA3_40_49a_OC': { celda: 'I87', campo: '40-49a', seccion: 'GLAUCOMA - Referencias', tabla: 'GLAUCOMA', actividad: 'Referencias de sospecha de glaucoma' },
    'GLA3_50_59a_OC': { celda: 'J87', campo: '50-+59a', seccion: 'GLAUCOMA - Referencias', tabla: 'GLAUCOMA', actividad: 'Referencias de sospecha de glaucoma' },
    'GLA3_mayor60a_OC': { celda: 'K87', campo: '>60a', seccion: 'GLAUCOMA - Referencias', tabla: 'GLAUCOMA', actividad: 'Referencias de sospecha de glaucoma' },
    'GLA4_TOTAL_OC': { celda: 'G88', campo: 'TOTAL', seccion: 'GLAUCOMA - Consejería', tabla: 'GLAUCOMA', actividad: 'Consejería en glaucoma' },
    'GLA4_Niños_OC': { celda: 'H88', campo: 'Niños', seccion: 'GLAUCOMA - Consejería', tabla: 'GLAUCOMA', actividad: 'Consejería en glaucoma' },
    'GLA4_40_49a_OC': { celda: 'I88', campo: '40-49a', seccion: 'GLAUCOMA - Consejería', tabla: 'GLAUCOMA', actividad: 'Consejería en glaucoma' },
    'GLA4_50_59a_OC': { celda: 'J88', campo: '50-+59a', seccion: 'GLAUCOMA - Consejería', tabla: 'GLAUCOMA', actividad: 'Consejería en glaucoma' },
    'GLA4_mayor60a_OC': { celda: 'K88', campo: '>60a', seccion: 'GLAUCOMA - Consejería', tabla: 'GLAUCOMA', actividad: 'Consejería en glaucoma' },
    'GLA5_TOTAL_OC': { celda: 'G91', campo: 'TOTAL', seccion: 'GLAUCOMA - Caso Glaucoma', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma' },
    'GLA5_Niños_OC': { celda: 'H91', campo: 'Niños', seccion: 'GLAUCOMA - Caso Glaucoma', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma' },
    'GLA5_40_49a_OC': { celda: 'I91', campo: '40-49a', seccion: 'GLAUCOMA - Caso Glaucoma', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma' },
    'GLA5_50_59a_OC': { celda: 'J91', campo: '50-+59a', seccion: 'GLAUCOMA - Caso Glaucoma', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma' },
    'GLA5_mayor60a_OC': { celda: 'K91', campo: '>60a', seccion: 'GLAUCOMA - Caso Glaucoma', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma' },
    'GLA6_TOTAL_OC': { celda: 'G92', campo: 'TOTAL', seccion: 'GLAUCOMA - Glaucoma Congénito', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma congénito' },
    'GLA6_Niños_OC': { celda: 'H92', campo: 'Niños', seccion: 'GLAUCOMA - Glaucoma Congénito', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma congénito' },
    'GLA6_40_49a_OC': { celda: 'I92', campo: '40-49a', seccion: 'GLAUCOMA - Glaucoma Congénito', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma congénito' },
    'GLA6_50_59a_OC': { celda: 'J92', campo: '50-+59a', seccion: 'GLAUCOMA - Glaucoma Congénito', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma congénito' },
    'GLA6_mayor60a_OC': { celda: 'K92', campo: '>60a', seccion: 'GLAUCOMA - Glaucoma Congénito', tabla: 'GLAUCOMA', actividad: 'Caso de Glaucoma congénito' },
    'GLA7_TOTAL_OC': { celda: 'G93', campo: 'TOTAL', seccion: 'GLAUCOMA - Referencia Caso', tabla: 'GLAUCOMA', actividad: 'Referencia de caso de Glaucoma' },
    'GLA7_Niños_OC': { celda: 'H93', campo: 'Niños', seccion: 'GLAUCOMA - Referencia Caso', tabla: 'GLAUCOMA', actividad: 'Referencia de caso de Glaucoma' },
    'GLA7_40_49a_OC': { celda: 'I93', campo: '40-49a', seccion: 'GLAUCOMA - Referencia Caso', tabla: 'GLAUCOMA', actividad: 'Referencia de caso de Glaucoma' },
    'GLA7_50_59a_OC': { celda: 'J93', campo: '50-+59a', seccion: 'GLAUCOMA - Referencia Caso', tabla: 'GLAUCOMA', actividad: 'Referencia de caso de Glaucoma' },
    'GLA7_mayor60a_OC': { celda: 'K93', campo: '>60a', seccion: 'GLAUCOMA - Referencia Caso', tabla: 'GLAUCOMA', actividad: 'Referencia de caso de Glaucoma' },
    'GLA8_TOTAL_OC': { celda: 'G96', campo: 'TOTAL', seccion: 'GLAUCOMA - Tto Farmacológico', tabla: 'GLAUCOMA', actividad: 'Tratamiento farmacológico' },
    'GLA8_Niños_OC': { celda: 'H96', campo: 'Niños', seccion: 'GLAUCOMA - Tto Farmacológico', tabla: 'GLAUCOMA', actividad: 'Tratamiento farmacológico' },
    'GLA8_40_49a_OC': { celda: 'I96', campo: '40-49a', seccion: 'GLAUCOMA - Tto Farmacológico', tabla: 'GLAUCOMA', actividad: 'Tratamiento farmacológico' },
    'GLA8_50_59a_OC': { celda: 'J96', campo: '50-+59a', seccion: 'GLAUCOMA - Tto Farmacológico', tabla: 'GLAUCOMA', actividad: 'Tratamiento farmacológico' },
    'GLA8_mayor60a_OC': { celda: 'K96', campo: '>60a', seccion: 'GLAUCOMA - Tto Farmacológico', tabla: 'GLAUCOMA', actividad: 'Tratamiento farmacológico' },
    'GLA9_TOTAL_OC': { celda: 'G97', campo: 'TOTAL', seccion: 'GLAUCOMA - Tto Láser', tabla: 'GLAUCOMA', actividad: 'Tratamiento Láser' },
    'GLA9_Niños_OC': { celda: 'H97', campo: 'Niños', seccion: 'GLAUCOMA - Tto Láser', tabla: 'GLAUCOMA', actividad: 'Tratamiento Láser' },
    'GLA9_40_49a_OC': { celda: 'I97', campo: '40-49a', seccion: 'GLAUCOMA - Tto Láser', tabla: 'GLAUCOMA', actividad: 'Tratamiento Láser' },
    'GLA9_50_59a_OC': { celda: 'J97', campo: '50-+59a', seccion: 'GLAUCOMA - Tto Láser', tabla: 'GLAUCOMA', actividad: 'Tratamiento Láser' },
    'GLA9_mayor60a_OC': { celda: 'K97', campo: '>60a', seccion: 'GLAUCOMA - Tto Láser', tabla: 'GLAUCOMA', actividad: 'Tratamiento Láser' },
    'GLA10_TOTAL_OC': { celda: 'G98', campo: 'TOTAL', seccion: 'GLAUCOMA - Tto Qx Filtrante', tabla: 'GLAUCOMA', actividad: 'Tratamiento Quirúrgico - cirugía filtrante' },
    'GLA10_Niños_OC': { celda: 'H98', campo: 'Niños', seccion: 'GLAUCOMA - Tto Qx Filtrante', tabla: 'GLAUCOMA', actividad: 'Tratamiento Quirúrgico - cirugía filtrante' },
    'GLA10_40_49a_OC': { celda: 'I98', campo: '40-49a', seccion: 'GLAUCOMA - Tto Qx Filtrante', tabla: 'GLAUCOMA', actividad: 'Tratamiento Quirúrgico - cirugía filtrante' },
    'GLA10_50_59a_OC': { celda: 'J98', campo: '50-+59a', seccion: 'GLAUCOMA - Tto Qx Filtrante', tabla: 'GLAUCOMA', actividad: 'Tratamiento Quirúrgico - cirugía filtrante' },
    'GLA10_mayor60a_OC': { celda: 'K98', campo: '>60a', seccion: 'GLAUCOMA - Tto Qx Filtrante', tabla: 'GLAUCOMA', actividad: 'Tratamiento Quirúrgico - cirugía filtrante' },
    'GLA11_TOTAL_OC': { celda: 'G99', campo: 'TOTAL', seccion: 'GLAUCOMA - Tto Qx Ciclodestructivo', tabla: 'GLAUCOMA', actividad: 'Tratamiento quirúrgico – ciclodestructivo' },
    'GLA11_Niños_OC': { celda: 'H99', campo: 'Niños', seccion: 'GLAUCOMA - Tto Qx Ciclodestructivo', tabla: 'GLAUCOMA', actividad: 'Tratamiento quirúrgico – ciclodestructivo' },
    'GLA11_40_49a_OC': { celda: 'I99', campo: '40-49a', seccion: 'GLAUCOMA - Tto Qx Ciclodestructivo', tabla: 'GLAUCOMA', actividad: 'Tratamiento quirúrgico – ciclodestructivo' },
    'GLA11_50_59a_OC': { celda: 'J99', campo: '50-+59a', seccion: 'GLAUCOMA - Tto Qx Ciclodestructivo', tabla: 'GLAUCOMA', actividad: 'Tratamiento quirúrgico – ciclodestructivo' },
    'GLA11_mayor60a_OC': { celda: 'K99', campo: '>60a', seccion: 'GLAUCOMA - Tto Qx Ciclodestructivo', tabla: 'GLAUCOMA', actividad: 'Tratamiento quirúrgico – ciclodestructivo' },
    'GLA12_TOTAL_OC': { celda: 'G102', campo: 'TOTAL', seccion: 'GLAUCOMA - Control Farmacológico', tabla: 'GLAUCOMA', actividad: 'Control farmacológico' },
    'GLA12_Niños_OC': { celda: 'H102', campo: 'Niños', seccion: 'GLAUCOMA - Control Farmacológico', tabla: 'GLAUCOMA', actividad: 'Control farmacológico' },
    'GLA12_40_49a_OC': { celda: 'I102', campo: '40-49a', seccion: 'GLAUCOMA - Control Farmacológico', tabla: 'GLAUCOMA', actividad: 'Control farmacológico' },
    'GLA12_50_59a_OC': { celda: 'J102', campo: '50-+59a', seccion: 'GLAUCOMA - Control Farmacológico', tabla: 'GLAUCOMA', actividad: 'Control farmacológico' },
    'GLA12_mayor60a_OC': { celda: 'K102', campo: '>60a', seccion: 'GLAUCOMA - Control Farmacológico', tabla: 'GLAUCOMA', actividad: 'Control farmacológico' },
    'GLA13_TOTAL_OC': { celda: 'G103', campo: 'TOTAL', seccion: 'GLAUCOMA - Control Post Qx', tabla: 'GLAUCOMA', actividad: 'Control Post quirúrgico' },
    'GLA13_Niños_OC': { celda: 'H103', campo: 'Niños', seccion: 'GLAUCOMA - Control Post Qx', tabla: 'GLAUCOMA', actividad: 'Control Post quirúrgico' },
    'GLA13_40_49a_OC': { celda: 'I103', campo: '40-49a', seccion: 'GLAUCOMA - Control Post Qx', tabla: 'GLAUCOMA', actividad: 'Control Post quirúrgico' },
    'GLA13_50_59a_OC': { celda: 'J103', campo: '50-+59a', seccion: 'GLAUCOMA - Control Post Qx', tabla: 'GLAUCOMA', actividad: 'Control Post quirúrgico' },
    'GLA13_mayor60a_OC': { celda: 'K103', campo: '>60a', seccion: 'GLAUCOMA - Control Post Qx', tabla: 'GLAUCOMA', actividad: 'Control Post quirúrgico' },

    // ====================================================================
    // SECCIÓN: CATARATA
    // ====================================================================

    'CATA1_TOTAL_OC': { celda: 'G111', campo: 'TOTAL', seccion: 'CATARATA - Tamizaje AV', tabla: 'CATARATA', actividad: 'Tamizaje Determinación de la Agudeza Visual' },
    'CATA1_Niños_OC': { celda: 'H111', campo: 'Niños', seccion: 'CATARATA - Tamizaje AV', tabla: 'CATARATA', actividad: 'Tamizaje Determinación de la Agudeza Visual' },
    'CATA1_50_59a_OC': { celda: 'I111', campo: '50-59a', seccion: 'CATARATA - Tamizaje AV', tabla: 'CATARATA', actividad: 'Tamizaje Determinación de la Agudeza Visual' },
    'CATA1_mayor60a_OC': { celda: 'J111', campo: '>60a', seccion: 'CATARATA - Tamizaje AV', tabla: 'CATARATA', actividad: 'Tamizaje Determinación de la Agudeza Visual' },

    'CATA2_TOTAL_OC': { celda: 'G114', campo: 'TOTAL', seccion: 'CATARATA - Evaluación', tabla: 'CATARATA', actividad: 'Evaluación catarata' },
    'CATA2_Niños_OC': { celda: 'H114', campo: 'Niños', seccion: 'CATARATA - Evaluación', tabla: 'CATARATA', actividad: 'Evaluación catarata' },
    'CATA2_50_59a_OC': { celda: 'I114', campo: '50-59a', seccion: 'CATARATA - Evaluación', tabla: 'CATARATA', actividad: 'Evaluación catarata' },
    'CATA2_mayor60a_OC': { celda: 'J114', campo: '>60a', seccion: 'CATARATA - Evaluación', tabla: 'CATARATA', actividad: 'Evaluación catarata' },
    'CATA3_TOTAL_OC': { celda: 'G115', campo: 'TOTAL', seccion: 'CATARATA - Referencia', tabla: 'CATARATA', actividad: 'Referencia catarata' },
    'CATA3_Niños_OC': { celda: 'H115', campo: 'Niños', seccion: 'CATARATA - Referencia', tabla: 'CATARATA', actividad: 'Referencia catarata' },
    'CATA3_50_59a_OC': { celda: 'I115', campo: '50-59a', seccion: 'CATARATA - Referencia', tabla: 'CATARATA', actividad: 'Referencia catarata' },
    'CATA3_mayor60a_OC': { celda: 'J115', campo: '>60a', seccion: 'CATARATA - Referencia', tabla: 'CATARATA', actividad: 'Referencia catarata' },
    'CATA4_TOTAL_OC': { celda: 'G116', campo: 'TOTAL', seccion: 'CATARATA - Consejería', tabla: 'CATARATA', actividad: 'Consejería catarata' },
    'CATA4_Niños_OC': { celda: 'H116', campo: 'Niños', seccion: 'CATARATA - Consejería', tabla: 'CATARATA', actividad: 'Consejería catarata' },
    'CATA4_50_59a_OC': { celda: 'I116', campo: '50-59a', seccion: 'CATARATA - Consejería', tabla: 'CATARATA', actividad: 'Consejería catarata' },
    'CATA4_mayor60a_OC': { celda: 'J116', campo: '>60a', seccion: 'CATARATA - Consejería', tabla: 'CATARATA', actividad: 'Consejería catarata' },

    'CATA5_TOTAL_OC': { celda: 'G119', campo: 'TOTAL', seccion: 'CATARATA - Diagnóstico Senil', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Senil' },
    'CATA5_Niños_OC': { celda: 'H119', campo: 'Niños', seccion: 'CATARATA - Diagnóstico Senil', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Senil' },
    'CATA5_50_59a_OC': { celda: 'I119', campo: '50-59a', seccion: 'CATARATA - Diagnóstico Senil', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Senil' },
    'CATA5_mayor60a_OC': { celda: 'J119', campo: '>60a', seccion: 'CATARATA - Diagnóstico Senil', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Senil' },
    'CATA6_TOTAL_OC': { celda: 'G120', campo: 'TOTAL', seccion: 'CATARATA - Diagnóstico Congénita', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Congénita' },
    'CATA6_Niños_OC': { celda: 'H120', campo: 'Niños', seccion: 'CATARATA - Diagnóstico Congénita', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Congénita' },
    'CATA6_50_59a_OC': { celda: 'I120', campo: '50-59a', seccion: 'CATARATA - Diagnóstico Congénita', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Congénita' },
    'CATA6_mayor60a_OC': { celda: 'J120', campo: '>60a', seccion: 'CATARATA - Diagnóstico Congénita', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Catarata Congénita' },
    'CATA7_TOTAL_OC': { celda: 'G121', campo: 'TOTAL', seccion: 'CATARATA - Diagnóstico Otras', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Otras Cataratas' },
    'CATA7_Niños_OC': { celda: 'H121', campo: 'Niños', seccion: 'CATARATA - Diagnóstico Otras', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Otras Cataratas' },
    'CATA7_50_59a_OC': { celda: 'I121', campo: '50-59a', seccion: 'CATARATA - Diagnóstico Otras', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Otras Cataratas' },
    'CATA7_mayor60a_OC': { celda: 'J121', campo: '>60a', seccion: 'CATARATA - Diagnóstico Otras', tabla: 'CATARATA', actividad: 'Diagnostico de casos de Otras Cataratas' },
    'CATA8_TOTAL_OC': { celda: 'G122', campo: 'TOTAL', seccion: 'CATARATA - Referencia Caso', tabla: 'CATARATA', actividad: 'Referencia en caso de catarata' },
    'CATA8_Niños_OC': { celda: 'H122', campo: 'Niños', seccion: 'CATARATA - Referencia Caso', tabla: 'CATARATA', actividad: 'Referencia en caso de catarata' },
    'CATA8_50_59a_OC': { celda: 'I122', campo: '50-59a', seccion: 'CATARATA - Referencia Caso', tabla: 'CATARATA', actividad: 'Referencia en caso de catarata' },
    'CATA8_mayor60a_OC': { celda: 'J122', campo: '>60a', seccion: 'CATARATA - Referencia Caso', tabla: 'CATARATA', actividad: 'Referencia en caso de catarata' },
    'CATA9_TOTAL_OC': { celda: 'G125', campo: 'TOTAL', seccion: 'CATARATA - Tto Facoemulsificación', tabla: 'CATARATA', actividad: 'Tratamiento de Facofragmentación (facoemulsificación) con aspiración' },
    'CATA9_Niños_OC': { celda: 'H125', campo: 'Niños', seccion: 'CATARATA - Tto Facoemulsificación', tabla: 'CATARATA', actividad: 'Tratamiento de Facofragmentación (facoemulsificación) con aspiración' },
    'CATA9_50_59a_OC': { celda: 'I125', campo: '50-59a', seccion: 'CATARATA - Tto Facoemulsificación', tabla: 'CATARATA', actividad: 'Tratamiento de Facofragmentación (facoemulsificación) con aspiración' },
    'CATA9_mayor60a_OC': { celda: 'J125', campo: '>60a', seccion: 'CATARATA - Tto Facoemulsificación', tabla: 'CATARATA', actividad: 'Tratamiento de Facofragmentación (facoemulsificación) con aspiración' },
    'CATA10_TOTAL_OC': { celda: 'G126', campo: 'TOTAL', seccion: 'CATARATA - Tto Extracción Extracapsular', tabla: 'CATARATA', actividad: 'Tratamiento de Extracción extracapsular de Catarata con implente de lente intraocular' },
    'CATA10_Niños_OC': { celda: 'H126', campo: 'Niños', seccion: 'CATARATA - Tto Extracción Extracapsular', tabla: 'CATARATA', actividad: 'Tratamiento de Extracción extracapsular de Catarata con implente de lente intraocular' },
    'CATA10_50_59a_OC': { celda: 'I126', campo: '50-59a', seccion: 'CATARATA - Tto Extracción Extracapsular', tabla: 'CATARATA', actividad: 'Tratamiento de Extracción extracapsular de Catarata con implente de lente intraocular' },
    'CATA10_mayor60a_OC': { celda: 'J126', campo: '>60a', seccion: 'CATARATA - Tto Extracción Extracapsular', tabla: 'CATARATA', actividad: 'Tratamiento de Extracción extracapsular de Catarata con implente de lente intraocular' },
    'CATA11_TOTAL_OC': { celda: 'G127', campo: 'TOTAL', seccion: 'CATARATA - Tto Mininuc', tabla: 'CATARATA', actividad: 'Tratamiento de Mininuc con implante de lente intraocular (LIO)' },
    'CATA11_Niños_OC': { celda: 'H127', campo: 'Niños', seccion: 'CATARATA - Tto Mininuc', tabla: 'CATARATA', actividad: 'Tratamiento de Mininuc con implante de lente intraocular (LIO)' },
    'CATA11_50_59a_OC': { celda: 'I127', campo: '50-59a', seccion: 'CATARATA - Tto Mininuc', tabla: 'CATARATA', actividad: 'Tratamiento de Mininuc con implante de lente intraocular (LIO)' },
    'CATA11_mayor60a_OC': { celda: 'J127', campo: '>60a', seccion: 'CATARATA - Tto Mininuc', tabla: 'CATARATA', actividad: 'Tratamiento de Mininuc con implante de lente intraocular (LIO)' },
    'CATA12_TOTAL_OC': { celda: 'G130', campo: 'TOTAL', seccion: 'CATARATA - Control 1º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 1º Control Post Operatorio' },
    'CATA12_Niños_OC': { celda: 'H130', campo: 'Niños', seccion: 'CATARATA - Control 1º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 1º Control Post Operatorio' },
    'CATA12_50_59a_OC': { celda: 'I130', campo: '50-59a', seccion: 'CATARATA - Control 1º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 1º Control Post Operatorio' },
    'CATA12_mayor60a_OC': { celda: 'J130', campo: '>60a', seccion: 'CATARATA - Control 1º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 1º Control Post Operatorio' },
    'CATA13_TOTAL_OC': { celda: 'G131', campo: 'TOTAL', seccion: 'CATARATA - Control 2º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 2º Control Post Operatorio' },
    'CATA13_Niños_OC': { celda: 'H131', campo: 'Niños', seccion: 'CATARATA - Control 2º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 2º Control Post Operatorio' },
    'CATA13_50_59a_OC': { celda: 'I131', campo: '50-59a', seccion: 'CATARATA - Control 2º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 2º Control Post Operatorio' },
    'CATA13_mayor60a_OC': { celda: 'J131', campo: '>60a', seccion: 'CATARATA - Control 2º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 2º Control Post Operatorio' },
    'CATA14_TOTAL_OC': { celda: 'G132', campo: 'TOTAL', seccion: 'CATARATA - Control 3º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 3º Control Post Operatorio' },
    'CATA14_Niños_OC': { celda: 'H132', campo: 'Niños', seccion: 'CATARATA - Control 3º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 3º Control Post Operatorio' },
    'CATA14_50_59a_OC': { celda: 'I132', campo: '50-59a', seccion: 'CATARATA - Control 3º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 3º Control Post Operatorio' },
    'CATA14_mayor60a_OC': { celda: 'J132', campo: '>60a', seccion: 'CATARATA - Control 3º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 3º Control Post Operatorio' },
    'CATA15_TOTAL_OC': { celda: 'G133', campo: 'TOTAL', seccion: 'CATARATA - Control 4º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 4º Control Post Operatorio' },
    'CATA15_Niños_OC': { celda: 'H133', campo: 'Niños', seccion: 'CATARATA - Control 4º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 4º Control Post Operatorio' },
    'CATA15_50_59a_OC': { celda: 'I133', campo: '50-59a', seccion: 'CATARATA - Control 4º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 4º Control Post Operatorio' },
    'CATA15_mayor60a_OC': { celda: 'J133', campo: '>60a', seccion: 'CATARATA - Control 4º Post OP', tabla: 'CATARATA', actividad: 'Paciente con 4º Control Post Operatorio' },
    'CATA16_TOTAL_OC': { celda: 'G136', campo: 'TOTAL', seccion: 'CATARATA - Complicaciones Post Qx', tabla: 'CATARATA', actividad: 'Complicaciones post quirúrgicas de Catarata' },
    'CATA16_Niños_OC': { celda: 'H136', campo: 'Niños', seccion: 'CATARATA - Complicaciones Post Qx', tabla: 'CATARATA', actividad: 'Complicaciones post quirúrgicas de Catarata' },
    'CATA16_50_59a_OC': { celda: 'I136', campo: '50-59a', seccion: 'CATARATA - Complicaciones Post Qx', tabla: 'CATARATA', actividad: 'Complicaciones post quirúrgicas de Catarata' },
    'CATA16_mayor60a_OC': { celda: 'J136', campo: '>60a', seccion: 'CATARATA - Complicaciones Post Qx', tabla: 'CATARATA', actividad: 'Complicaciones post quirúrgicas de Catarata' },

    // ====================================================================
    // SECCIÓN: RETINOPATIA
    // ====================================================================

    'RETI1_TOTAL_OC': { celda: 'G144', campo: 'TOTAL', seccion: 'RETINOPATIA - Detección RD', tabla: 'RETINOPATIA', actividad: 'Detección de Retinopatía Diabética' },
    'RETI1_18_29a_OC': { celda: 'H144', campo: '18-29a', seccion: 'RETINOPATIA - Detección RD', tabla: 'RETINOPATIA', actividad: 'Detección de Retinopatía Diabética' },
    'RETI1_30_59a_OC': { celda: 'I144', campo: '30-59a', seccion: 'RETINOPATIA - Detección RD', tabla: 'RETINOPATIA', actividad: 'Detección de Retinopatía Diabética' },
    'RETI1_mayor60a_OC': { celda: 'J144', campo: '>60a', seccion: 'RETINOPATIA - Detección RD', tabla: 'RETINOPATIA', actividad: 'Detección de Retinopatía Diabética' },
    'RETI2_TOTAL_OC': { celda: 'G147', campo: 'TOTAL', seccion: 'RETINOPATIA - Evaluación RD', tabla: 'RETINOPATIA', actividad: 'Evaluación de Retinopatía Diabética' },
    'RETI2_18_29a_OC': { celda: 'H147', campo: '18-29a', seccion: 'RETINOPATIA - Evaluación RD', tabla: 'RETINOPATIA', actividad: 'Evaluación de Retinopatía Diabética' },
    'RETI2_30_59a_OC': { celda: 'I147', campo: '30-59a', seccion: 'RETINOPATIA - Evaluación RD', tabla: 'RETINOPATIA', actividad: 'Evaluación de Retinopatía Diabética' },
    'RETI2_mayor60a_OC': { celda: 'J147', campo: '>60a', seccion: 'RETINOPATIA - Evaluación RD', tabla: 'RETINOPATIA', actividad: 'Evaluación de Retinopatía Diabética' },
    'RETI3_TOTAL_OC': { celda: 'G148', campo: 'TOTAL', seccion: 'RETINOPATIA - Retinografía Normal', tabla: 'RETINOPATIA', actividad: 'Retinografia Normal' },
    'RETI3_18_29a_OC': { celda: 'H148', campo: '18-29a', seccion: 'RETINOPATIA - Retinografía Normal', tabla: 'RETINOPATIA', actividad: 'Retinografia Normal' },
    'RETI3_30_59a_OC': { celda: 'I148', campo: '30-59a', seccion: 'RETINOPATIA - Retinografía Normal', tabla: 'RETINOPATIA', actividad: 'Retinografia Normal' },
    'RETI3_mayor60a_OC': { celda: 'J148', campo: '>60a', seccion: 'RETINOPATIA - Retinografía Normal', tabla: 'RETINOPATIA', actividad: 'Retinografia Normal' },
    'RETI4_TOTAL_OC': { celda: 'G149', campo: 'TOTAL', seccion: 'RETINOPATIA - Retinografía Anormal', tabla: 'RETINOPATIA', actividad: 'Retinografia Anormal' },
    'RETI4_18_29a_OC': { celda: 'H149', campo: '18-29a', seccion: 'RETINOPATIA - Retinografía Anormal', tabla: 'RETINOPATIA', actividad: 'Retinografia Anormal' },
    'RETI4_30_59a_OC': { celda: 'I149', campo: '30-59a', seccion: 'RETINOPATIA - Retinografía Anormal', tabla: 'RETINOPATIA', actividad: 'Retinografia Anormal' },
    'RETI4_mayor60a_OC': { celda: 'J149', campo: '>60a', seccion: 'RETINOPATIA - Retinografía Anormal', tabla: 'RETINOPATIA', actividad: 'Retinografia Anormal' },
    'RETI5_TOTAL_OC': { celda: 'G150', campo: 'TOTAL', seccion: 'RETINOPATIA - Referencias RD', tabla: 'RETINOPATIA', actividad: 'Referencias de Retinopatía Diabética' },
    'RETI5_18_29a_OC': { celda: 'H150', campo: '18-29a', seccion: 'RETINOPATIA - Referencias RD', tabla: 'RETINOPATIA', actividad: 'Referencias de Retinopatía Diabética' },
    'RETI5_30_59a_OC': { celda: 'I150', campo: '30-59a', seccion: 'RETINOPATIA - Referencias RD', tabla: 'RETINOPATIA', actividad: 'Referencias de Retinopatía Diabética' },
    'RETI5_mayor60a_OC': { celda: 'J150', campo: '>60a', seccion: 'RETINOPATIA - Referencias RD', tabla: 'RETINOPATIA', actividad: 'Referencias de Retinopatía Diabética' },
    'RETI6_TOTAL_OC': { celda: 'G151', campo: 'TOTAL', seccion: 'RETINOPATIA - Teleinterconsulta', tabla: 'RETINOPATIA', actividad: 'Teleinterconsulta' },
    'RETI6_18_29a_OC': { celda: 'H151', campo: '18-29a', seccion: 'RETINOPATIA - Teleinterconsulta', tabla: 'RETINOPATIA', actividad: 'Teleinterconsulta' },
    'RETI6_30_59a_OC': { celda: 'I151', campo: '30-59a', seccion: 'RETINOPATIA - Teleinterconsulta', tabla: 'RETINOPATIA', actividad: 'Teleinterconsulta' },
    'RETI6_mayor60a_OC': { celda: 'J151', campo: '>60a', seccion: 'RETINOPATIA - Teleinterconsulta', tabla: 'RETINOPATIA', actividad: 'Teleinterconsulta' },
    'RETI7_TOTAL_OC': { celda: 'G154', campo: 'TOTAL', seccion: 'RETINOPATIA - Diagnóstico RD', tabla: 'RETINOPATIA', actividad: 'Diagnóstico de Casos de Retinopatía Diabética' },
    'RETI7_18_29a_OC': { celda: 'H154', campo: '18-29a', seccion: 'RETINOPATIA - Diagnóstico RD', tabla: 'RETINOPATIA', actividad: 'Diagnóstico de Casos de Retinopatía Diabética' },
    'RETI7_30_59a_OC': { celda: 'I154', campo: '30-59a', seccion: 'RETINOPATIA - Diagnóstico RD', tabla: 'RETINOPATIA', actividad: 'Diagnóstico de Casos de Retinopatía Diabética' },
    'RETI7_mayor60a_OC': { celda: 'J154', campo: '>60a', seccion: 'RETINOPATIA - Diagnóstico RD', tabla: 'RETINOPATIA', actividad: 'Diagnóstico de Casos de Retinopatía Diabética' },
    'RETI8_TOTAL_OC': { celda: 'G157', campo: 'TOTAL', seccion: 'RETINOPATIA - Tto Laser RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Laser' },
    'RETI8_18_29a_OC': { celda: 'H157', campo: '18-29a', seccion: 'RETINOPATIA - Tto Laser RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Laser' },
    'RETI8_30_59a_OC': { celda: 'I157', campo: '30-59a', seccion: 'RETINOPATIA - Tto Laser RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Laser' },
    'RETI8_mayor60a_OC': { celda: 'J157', campo: '>60a', seccion: 'RETINOPATIA - Tto Laser RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Laser' },
    'RETI9_TOTAL_OC': { celda: 'G158', campo: 'TOTAL', seccion: 'RETINOPATIA - Tto Intravítreo RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Intravítrea' },
    'RETI9_18_29a_OC': { celda: 'H158', campo: '18-29a', seccion: 'RETINOPATIA - Tto Intravítreo RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Intravítrea' },
    'RETI9_30_59a_OC': { celda: 'I158', campo: '30-59a', seccion: 'RETINOPATIA - Tto Intravítreo RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Intravítrea' },
    'RETI9_mayor60a_OC': { celda: 'J158', campo: '>60a', seccion: 'RETINOPATIA - Tto Intravítreo RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Terapia Intravítrea' },
    'RETI10_TOTAL_OC': { celda: 'G159', campo: 'TOTAL', seccion: 'RETINOPATIA - Tto Cirugía Vítrea RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Cirugía Vítrea' },
    'RETI10_18_29a_OC': { celda: 'H159', campo: '18-29a', seccion: 'RETINOPATIA - Tto Cirugía Vítrea RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Cirugía Vítrea' },
    'RETI10_30_59a_OC': { celda: 'I159', campo: '30-59a', seccion: 'RETINOPATIA - Tto Cirugía Vítrea RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Cirugía Vítrea' },
    'RETI10_mayor60a_OC': { celda: 'J159', campo: '>60a', seccion: 'RETINOPATIA - Tto Cirugía Vítrea RD', tabla: 'RETINOPATIA', actividad: 'Tratamiento Cirugía Vítrea' },
    'RETI11_TOTAL_OC': { celda: 'G162', campo: 'TOTAL', seccion: 'RETINOPATIA - Control RD', tabla: 'RETINOPATIA', actividad: 'Atenciones de Control' },
    'RETI11_18_29a_OC': { celda: 'H162', campo: '18-29a', seccion: 'RETINOPATIA - Control RD', tabla: 'RETINOPATIA', actividad: 'Atenciones de Control' },
    'RETI11_30_59a_OC': { celda: 'I162', campo: '30-59a', seccion: 'RETINOPATIA - Control RD', tabla: 'RETINOPATIA', actividad: 'Atenciones de Control' },
    'RETI11_mayor60a_OC': { celda: 'J162', campo: '>60a', seccion: 'RETINOPATIA - Control RD', tabla: 'RETINOPATIA', actividad: 'Atenciones de Control' },

    // ====================================================================
    // SECCIÓN: TRACOMA
    // ====================================================================

    'TRACO1_TOTAL_OC': { celda: 'G169', campo: 'TOTAL', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO1_0_11a_OC': { celda: 'H169', campo: '0-11a', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO1_12_17a_OC': { celda: 'I169', campo: '12-17a', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO1_18_29a_OC': { celda: 'J169', campo: '18-29a', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO1_30_59a_OC': { celda: 'K169', campo: '30-59a', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO1_mayor60a_OC': { celda: 'L169', campo: '>60a', seccion: 'TRACOMA - Evaluación Sospecha', tabla: 'TRACOMA', actividad: 'Evaluación de personas con sospecha de tracoma' },
    'TRACO2_TOTAL_OC': { celda: 'G170', campo: 'TOTAL', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO2_0_11a_OC': { celda: 'H170', campo: '0-11a', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO2_12_17a_OC': { celda: 'I170', campo: '12-17a', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO2_18_29a_OC': { celda: 'J170', campo: '18-29a', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO2_30_59a_OC': { celda: 'K170', campo: '30-59a', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO2_mayor60a_OC': { celda: 'L170', campo: '>60a', seccion: 'TRACOMA - Referencia Sospecha', tabla: 'TRACOMA', actividad: 'Referencia de personas con sospecha de tracoma' },
    'TRACO3_TOTAL_OC': { celda: 'G171', campo: 'TOTAL', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO3_0_11a_OC': { celda: 'H171', campo: '0-11a', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO3_12_17a_OC': { celda: 'I171', campo: '12-17a', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO3_18_29a_OC': { celda: 'J171', campo: '18-29a', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO3_30_59a_OC': { celda: 'K171', campo: '30-59a', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO3_mayor60a_OC': { celda: 'L171', campo: '>60a', seccion: 'TRACOMA - Consejería Sospecha', tabla: 'TRACOMA', actividad: 'Consejeria en sospecha de tracoma' },
    'TRACO4_TOTAL_OC': { celda: 'G174', campo: 'TOTAL', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO4_0_11a_OC': { celda: 'H174', campo: '0-11a', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO4_12_17a_OC': { celda: 'I174', campo: '12-17a', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO4_18_29a_OC': { celda: 'J174', campo: '18-29a', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO4_30_59a_OC': { celda: 'K174', campo: '30-59a', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO4_mayor60a_OC': { celda: 'L174', campo: '>60a', seccion: 'TRACOMA - Diagnóstico Casos', tabla: 'TRACOMA', actividad: 'Diagnóstico Casos de Tracoma' },
    'TRACO5_TOTAL_OC': { celda: 'G175', campo: 'TOTAL', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO5_0_11a_OC': { celda: 'H175', campo: '0-11a', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO5_12_17a_OC': { celda: 'I175', campo: '12-17a', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO5_18_29a_OC': { celda: 'J175', campo: '18-29a', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO5_30_59a_OC': { celda: 'K175', campo: '30-59a', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO5_mayor60a_OC': { celda: 'L175', campo: '>60a', seccion: 'TRACOMA - Consejería Casos', tabla: 'TRACOMA', actividad: 'Consejeria en tracoma' },
    'TRACO6_TOTAL_OC': { celda: 'G178', campo: 'TOTAL', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO6_0_11a_OC': { celda: 'H178', campo: '0-11a', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO6_12_17a_OC': { celda: 'I178', campo: '12-17a', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO6_18_29a_OC': { celda: 'J178', campo: '18-29a', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO6_30_59a_OC': { celda: 'K178', campo: '30-59a', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO6_mayor60a_OC': { celda: 'L178', campo: '>60a', seccion: 'TRACOMA - Tto Farmacológico', tabla: 'TRACOMA', actividad: 'Tratamiento farmacológico' },
    'TRACO7_TOTAL_OC': { celda: 'G179', campo: 'TOTAL', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO7_0_11a_OC': { celda: 'H179', campo: '0-11a', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO7_12_17a_OC': { celda: 'I179', campo: '12-17a', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO7_18_29a_OC': { celda: 'J179', campo: '18-29a', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO7_30_59a_OC': { celda: 'K179', campo: '30-59a', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO7_mayor60a_OC': { celda: 'L179', campo: '>60a', seccion: 'TRACOMA - Tto Quirúrgico', tabla: 'TRACOMA', actividad: 'Tratamiento quirúrgico' },
    'TRACO8_TOTAL_OC': { celda: 'G182', campo: 'TOTAL', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },
    'TRACO8_0_11a_OC': { celda: 'H182', campo: '0-11a', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },
    'TRACO8_12_17a_OC': { celda: 'I182', campo: '12-17a', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },
    'TRACO8_18_29a_OC': { celda: 'J182', campo: '18-29a', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },
    'TRACO8_30_59a_OC': { celda: 'K182', campo: '30-59a', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },
    'TRACO8_mayor60a_OC': { celda: 'L182', campo: '>60a', seccion: 'TRACOMA - Control', tabla: 'TRACOMA', actividad: 'Atenciones de Control' },

    // ====================================================================
    // SECCIÓN: EEO
    // ====================================================================

    'EEO1_TOTAL_OC': { celda: 'G190', campo: 'TOTAL', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO1_0_11a_OC': { celda: 'H190', campo: '0-11a', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO1_12_17a_OC': { celda: 'I190', campo: '12-17a', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO1_18_29a_OC': { celda: 'J190', campo: '18-29a', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO1_30_59a_OC': { celda: 'K190', campo: '30-59a', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO1_mayor60a_OC': { celda: 'L190', campo: '>60a', seccion: 'EEO - Párpado/Lagrimal/Órbita', tabla: 'EEO', actividad: 'Trastornos del parpado, aparato lagrimal y orbita' },
    'EEO2_TOTAL_OC': { celda: 'G191', campo: 'TOTAL', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO2_0_11a_OC': { celda: 'H191', campo: '0-11a', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO2_12_17a_OC': { celda: 'I191', campo: '12-17a', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO2_18_29a_OC': { celda: 'J191', campo: '18-29a', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO2_30_59a_OC': { celda: 'K191', campo: '30-59a', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO2_mayor60a_OC': { celda: 'L191', campo: '>60a', seccion: 'EEO - Conjuntiva', tabla: 'EEO', actividad: 'Trastornos de la conjuntiva' },
    'EEO3_TOTAL_OC': { celda: 'G192', campo: 'TOTAL', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO3_0_11a_OC': { celda: 'H192', campo: '0-11a', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO3_12_17a_OC': { celda: 'I192', campo: '12-17a', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO3_18_29a_OC': { celda: 'J192', campo: '18-29a', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO3_30_59a_OC': { celda: 'K192', campo: '30-59a', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO3_mayor60a_OC': { celda: 'L192', campo: '>60a', seccion: 'EEO - Esclerótica/Córnea', tabla: 'EEO', actividad: 'Trastornos de la esclerótica, cornea' },
    'EEO4_TOTAL_OC': { celda: 'G193', campo: 'TOTAL', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO4_0_11a_OC': { celda: 'H193', campo: '0-11a', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO4_12_17a_OC': { celda: 'I193', campo: '12-17a', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO4_18_29a_OC': { celda: 'J193', campo: '18-29a', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO4_30_59a_OC': { celda: 'K193', campo: '30-59a', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO4_mayor60a_OC': { celda: 'L193', campo: '>60a', seccion: 'EEO - Referencia', tabla: 'EEO', actividad: 'Referencia de EEO' },
    'EEO5_TOTAL_OC': { celda: 'G194', campo: 'TOTAL', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO5_0_11a_OC': { celda: 'H194', campo: '0-11a', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO5_12_17a_OC': { celda: 'I194', campo: '12-17a', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO5_18_29a_OC': { celda: 'J194', campo: '18-29a', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO5_30_59a_OC': { celda: 'K194', campo: '30-59a', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO5_mayor60a_OC': { celda: 'L194', campo: '>60a', seccion: 'EEO - Consejería', tabla: 'EEO', actividad: 'Consejería en enfermedades externas del ojo' },
    'EEO6_TOTAL_OC': { celda: 'G197', campo: 'TOTAL', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO6_0_11a_OC': { celda: 'H197', campo: '0-11a', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO6_12_17a_OC': { celda: 'I197', campo: '12-17a', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO6_18_29a_OC': { celda: 'J197', campo: '18-29a', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO6_30_59a_OC': { celda: 'K197', campo: '30-59a', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO6_mayor60a_OC': { celda: 'L197', campo: '>60a', seccion: 'EEO - Tto Farmacológico', tabla: 'EEO', actividad: 'Tratamiento farmacológico' },
    'EEO7_TOTAL_OC': { celda: 'G198', campo: 'TOTAL', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO7_0_11a_OC': { celda: 'H198', campo: '0-11a', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO7_12_17a_OC': { celda: 'I198', campo: '12-17a', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO7_18_29a_OC': { celda: 'J198', campo: '18-29a', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO7_30_59a_OC': { celda: 'K198', campo: '30-59a', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO7_mayor60a_OC': { celda: 'L198', campo: '>60a', seccion: 'EEO - Tto Quirúrgico', tabla: 'EEO', actividad: 'Tratamiento quirúrgico' },
    'EEO8_TOTAL_OC': { celda: 'G201', campo: 'TOTAL', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO8_0_11a_OC': { celda: 'H201', campo: '0-11a', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO8_12_17a_OC': { celda: 'I201', campo: '12-17a', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO8_18_29a_OC': { celda: 'J201', campo: '18-29a', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO8_30_59a_OC': { celda: 'K201', campo: '30-59a', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO8_mayor60a_OC': { celda: 'L201', campo: '>60a', seccion: 'EEO - Control Farmacológico', tabla: 'EEO', actividad: 'Control farmacológico' },
    'EEO9_TOTAL_OC': { celda: 'G202', campo: 'TOTAL', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
    'EEO9_0_11a_OC': { celda: 'H202', campo: '0-11a', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
    'EEO9_12_17a_OC': { celda: 'I202', campo: '12-17a', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
    'EEO9_18_29a_OC': { celda: 'J202', campo: '18-29a', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
    'EEO9_30_59a_OC': { celda: 'K202', campo: '30-59a', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
    'EEO9_mayor60a_OC': { celda: 'L202', campo: '>60a', seccion: 'EEO - Control Post Qx', tabla: 'EEO', actividad: 'Control post quirúrgico' },
};

// ============================================
// 2. CONFIGURACIÓN COMPLETA DE OCULAR
// ============================================
// js/mapeos/mapeo_ocular.js
// ============================================

const CONFIG_OCULAR = {
    // --- Datos generales ---
    nombre: 'Salud Ocular',
    codigo: 'OCULAR',
    icono: '👁️',
    color: '#4f7df3',
    
    // --- Archivos ---
    plantilla: 'plantillas/Plantilla_Ocular.xlsx',
    api: 'api/api_reporte_ocular.php',
    
    // --- Catálogo de reportes ---
    catalogo: [
        { CODIGO: 'ROP', NOMBRE: 'ROP - Retinopatía del Prematuro' },
        { CODIGO: 'VISION', NOMBRE: 'Agudeza Visual' },
        { CODIGO: 'REFRACCION', NOMBRE: 'Refracción' },
        { CODIGO: 'RETINOPATIA', NOMBRE: 'Retinopatía Diabética' },
        { CODIGO: 'TRACOMA', NOMBRE: 'Tracoma' },
        { CODIGO: 'EEO', NOMBRE: 'Evaluación Externa Ocular' },
        { CODIGO: 'CATARATA', NOMBRE: 'Catarata' },
        { CODIGO: 'GLAUCOMA', NOMBRE: 'Glaucoma' }
    ],
    
    // --- Configuración de columnas para Excel ---
    columnas_excel: [
        { wch: 5 }, { wch: 8 }, { wch: 5 }, { wch: 35 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 },
        { wch: 7 }, { wch: 7 }
    ],
    
    // --- Paleta de colores para encabezados ---
    paleta_colores: [
        { header: '#1B4F72', subheader: '#2E86C1', titulo: '#85C1E9' },
        { header: '#7D3C98', subheader: '#AF7AC5', titulo: '#D2B4DE' },
        { header: '#0E6655', subheader: '#1ABC9C', titulo: '#76D7C4' },
        { header: '#B9770E', subheader: '#F39C12', titulo: '#F5B041' },
        { header: '#6C3483', subheader: '#BB8FCE', titulo: '#D7BDE2' },
    ],
    
    // --- Configuración para PDF ---
    titulo_pdf: 'REPORTE OCULAR',
    nombre_archivo: 'Reporte_Ocular',
    
    // --- Filtros especiales ---
    filtros: ['filtro_actividad_ocular'],
    
    // --- 🔥 ESTILOS CSS UNIFORMES PARA OCULAR CON BORDES ---
    estilos_css: `
        /* 🔥 BORDES NEGROS EN TODAS LAS CELDAS CON DATOS */
        #excel-table td:not(:empty), #excel-table th:not(:empty) { 
            border: 1px solid #000000 !important; 
        }
        #excel-table td:empty, #excel-table th:empty { 
            border: none !important; 
        }
        
        #excel-table {
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif !important;
            font-size: 10px !important;
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
        }
        
        #excel-table td, #excel-table th {
            font-family: 'Calibri', 'Segoe UI', Arial, sans-serif !important;
            font-size: 10px !important;
            padding: 3px 4px;
            vertical-align: middle;
            white-space: normal;
            word-wrap: break-word;
            word-break: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        /* COLUMNA 1 - Índice */
        #excel-table td:nth-child(1), #excel-table th:nth-child(1) {
            width: 15px !important;
            min-width: 15px !important;
            max-width: 15px !important;
            padding: 2px 2px;
            text-align: left !important;
        }
        
        /* COLUMNA 2 - Códigos cortos */
        #excel-table td:nth-child(2), #excel-table th:nth-child(2) {
            width: 45px !important;
            min-width: 45px !important;
            max-width: 45px !important;
            text-align: left !important;
        }
        
        /* COLUMNA 3 - Códigos */
        #excel-table td:nth-child(3), #excel-table th:nth-child(3) {
            width: 30px !important;
            min-width: 30px !important;
            max-width: 30px !important;
            padding: 3px 3px;
            text-align: center !important;
        }
        
        /* COLUMNA 4 - Descripciones */
        #excel-table td:nth-child(4), #excel-table th:nth-child(4) {
            width: 180px !important;
            min-width: 130px !important;
            max-width: 220px !important;
            padding: 3px 6px;
            text-align: center !important;
        }
        
        /* COLUMNA 5+ - Datos numéricos */
        #excel-table td:nth-child(n+5), #excel-table th:nth-child(n+5) {
            width: 35px !important;
            min-width: 25px !important;
            max-width: 45px !important;
            padding: 2px 3px;
            text-align: center !important;
        }
        
        /* ENCABEZADOS */
        #excel-table th {
            background-color: #1B4F72 !important;
            font-weight: bold !important;
            font-size: 10px !important;
            padding: 4px 4px;
            border-bottom: 2px solid #0D3B5E !important;
            border-top: 2px solid #0D3B5E !important;
            color: #ffffff !important;
            white-space: normal;
            word-break: break-word;
            line-height: 1.2;
        }
        
        /* Filas alternadas */
        #excel-table tbody tr:nth-child(even) {
            background-color: #f8fbff;
        }
        #excel-table tbody tr:nth-child(odd) {
            background-color: #ffffff;
        }
        
        #excel-table tr { min-height: 18px; }
    `
};

// ============================================
// 3. FUNCIONES EXPORTADAS
// ============================================
function getCatalogoOcular() {
    return CONFIG_OCULAR.catalogo;
}