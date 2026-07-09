// js/mapeos/mapeo_bucal.js
// ============================================
// Basado en la plantilla: plantillaV2.xlsx
// ============================================


const MAPEO_CELDAS_BUCAL = {
    // ==================== SECCIÓN 1: ALTA BÁSICA ODONTOLÓGICA ====================
    'ABO_TOTAL_ON': { celda: 'E5', campo: 'TOTAL', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_0_28d_ON': { celda: 'G5', campo: '0_a_28d', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_29d_6m_ON': { celda: 'H5', campo: '29dias_a_6meses', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_7m_11m_ON': { celda: 'J5', campo: '7meses_a_11meses', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_1_2a_ON': { celda: 'L5', campo: '1_a_2años', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_3_5a_ON': { celda: 'M5', campo: '3_a_5_años', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_6_11a_ON': { celda: 'O5', campo: '6_a_11_años', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Adolescente_ON': { celda: 'Q5', campo: 'Adolescente', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Joven_ON': { celda: 'S5', campo: 'Joven', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Adulto_ON': { celda: 'T5', campo: 'Adulto', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Adulto_Mayor_ON': { celda: 'U5', campo: 'Adulto_Mayor', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_6_11a_G_ON': { celda: 'W5', campo: '6_a_11_años_G', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Adolescente_G_ON': { celda: 'X5', campo: 'Adolescente_G', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Joven_G_ON': { celda: 'Z5', campo: 'Joven_G', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },
    'ABO_Adulto_G_ON': { celda: 'AA5', campo: 'Adulto_G', seccion: 'Alta Básica Odontológica', tabla: 'CURSO_VIDA_GENERAL', actividad: 'Alta Básica Odontológica' },

    // ==================== SECCIÓN 2: PREVALENCIA CARIES DENTAL ====================
    'CARIES_0_a_11_años': { celda: 'AF4', campo: '0_a_11_años', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },
    'CARIES_Adolescente': { celda: 'AG4', campo: 'Adolescente', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },
    'CARIES_Joven': { celda: 'AH4', campo: 'Joven', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },
    'CARIES_Adulto': { celda: 'AI4', campo: 'Adulto', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },
    'CARIES_Adulto_Mayor': { celda: 'AJ4', campo: 'Adulto_Mayor', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },
    'CARIES_Gestante': { celda: 'AK4', campo: 'Gestante', seccion: 'Prevalencia Caries Dental', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas Caries Dental' },

    // ==================== SECCIÓN 3: EVALUACIÓN ORAL COMPLETA ====================
    'EVAL_0_a_11_años': { celda: 'AF5', campo: '0_a_11_años', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },
    'EVAL_Adolescente': { celda: 'AG5', campo: 'Adolescente', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },
    'EVAL_Joven': { celda: 'AH5', campo: 'Joven', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },
    'EVAL_Adulto': { celda: 'AI5', campo: 'Adulto', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },
    'EVAL_Adulto_Mayor': { celda: 'AJ5', campo: 'Adulto_Mayor', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },
    'EVAL_Gestante': { celda: 'AK5', campo: 'Gestante', seccion: 'Evaluación Oral Completa', tabla: 'PREVALENCIA_CARIES', actividad: 'Personas con Evaluación Oral Completa' },

    // ==================== SECCIÓN 4: ASESORIA NUTRICIONAL (Fila 10) ====================
    'ASER_TOTAL_I': { celda: 'E10', campo: 'Ini_T', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_TOTAL_C': { celda: 'F10', campo: 'CT_T', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_28d': { celda: 'G10', campo: 'Ini_28d', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_28d': { celda: 'H10', campo: 'CT_28d', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_5m': { celda: 'I10', campo: 'Ini_5m', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_5m': { celda: 'J10', campo: 'CT_5m', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_11m': { celda: 'K10', campo: 'Ini_11m', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_11m': { celda: 'L10', campo: 'CT_11m', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_1a': { celda: 'M10', campo: 'Ini_1a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_1a': { celda: 'N10', campo: 'CT_1a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_2a': { celda: 'O10', campo: 'Ini_2a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_2a': { celda: 'P10', campo: 'CT_2a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_5a': { celda: 'Q10', campo: 'Ini_5a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_5a': { celda: 'R10', campo: 'CT_5a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_11a': { celda: 'S10', campo: 'Ini_11a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_11a': { celda: 'T10', campo: 'CT_11a', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_T_N': { celda: 'U10', campo: 'CT_T_N', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Mt_N': { celda: 'V10', campo: 'Mt_N', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Avan_N%': { celda: 'W10', campo: 'Avan_N%', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_Adls': { celda: 'X10', campo: 'Ini_Adls', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_Adls': { celda: 'Y10', campo: 'CT_Adls', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_Jven': { celda: 'Z10', campo: 'Ini_Jven', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_Jven': { celda: 'AA10', campo: 'CT_Jven', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_Adlt': { celda: 'AB10', campo: 'Ini_Adlt', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_Adlt': { celda: 'AC10', campo: 'CT_Adlt', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_AdltM': { celda: 'AD10', campo: 'Ini_AdltM', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_AdltM': { celda: 'AE10', campo: 'CT_AdltM', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Mt_A': { celda: 'AF10', campo: 'Mt_A', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Avan_A%': { celda: 'AG10', campo: 'Avan_A%', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Ini_Gst': { celda: 'AH10', campo: 'Ini_Gst', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_CT_Gst': { celda: 'AI10', campo: 'CT_Gst', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Mt_G': { celda: 'AJ10', campo: 'Mt_G', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },
    'ASER_Avan_G%': { celda: 'AK10', campo: 'Avan_G%', seccion: 'Asesoria Nutricional', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068001' },

    // ==================== SECCIÓN 5: EXAMEN ESTOMATOLOGICO (Fila 11) ====================
    'EXAM_TOTAL_C': { celda: 'E11', campo: 'CT_T', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_28d': { celda: 'G11', campo: 'CT_28d', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_5m': { celda: 'I11', campo: 'CT_5m', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_11m': { celda: 'K11', campo: 'CT_11m', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_1a': { celda: 'M11', campo: 'CT_1a', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_2a': { celda: 'O11', campo: 'CT_2a', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_5a': { celda: 'Q11', campo: 'CT_5a', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_11a': { celda: 'S11', campo: 'CT_11a', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_T_N': { celda: 'U11', campo: 'CT_T_N', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Mt_N': { celda: 'V11', campo: 'Mt_N', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Avan_N%': { celda: 'W11', campo: 'Avan_N%', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_Adls': { celda: 'X11', campo: 'CT_Adls', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_Jven': { celda: 'Z11', campo: 'CT_Jven', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_Adlt': { celda: 'AB11', campo: 'CT_Adlt', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_AdltM': { celda: 'AD11', campo: 'CT_AdltM', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Mt_A': { celda: 'AF11', campo: 'Mt_A', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Avan_A%': { celda: 'AG11', campo: 'Avan_A%', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_CT_Gst': { celda: 'AH11', campo: 'CT_Gst', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Mt_G': { celda: 'AJ11', campo: 'Mt_G', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },
    'EXAM_Avan_G%': { celda: 'AK11', campo: 'Avan_G%', seccion: 'Examen Estomatologico', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068002' },

    // ==================== SECCIÓN 6: INSTRUCCIÓN DE HIGIENE ORAL ====================
    'INSTRU_TOTAL_I': { celda: 'E12', campo: 'Ini_T', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_TOTAL_C': { celda: 'F12', campo: 'CT_T', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_28d': { celda: 'G12', campo: 'Ini_28d', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_28d': { celda: 'H12', campo: 'CT_28d', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_5m': { celda: 'I12', campo: 'Ini_5m', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_5m': { celda: 'J12', campo: 'CT_5m', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_11m': { celda: 'K12', campo: 'Ini_11m', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_11m': { celda: 'L12', campo: 'CT_11m', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_1a': { celda: 'M12', campo: 'Ini_1a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_1a': { celda: 'N12', campo: 'CT_1a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_2a': { celda: 'O12', campo: 'Ini_2a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_2a': { celda: 'P12', campo: 'CT_2a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_5a': { celda: 'Q12', campo: 'Ini_5a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_5a': { celda: 'R12', campo: 'CT_5a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_11a': { celda: 'S12', campo: 'Ini_11a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_11a': { celda: 'T12', campo: 'CT_11a', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_T_N': { celda: 'U12', campo: 'CT_T_N', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Mt_N': { celda: 'V12', campo: 'Mt_N', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Avan_N%': { celda: 'W12', campo: 'Avan_N%', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_Adls': { celda: 'X12', campo: 'Ini_Adls', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_Adls': { celda: 'Y12', campo: 'CT_Adls', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_Jven': { celda: 'Z12', campo: 'Ini_Jven', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_Jven': { celda: 'AA12', campo: 'CT_Jven', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_Adlt': { celda: 'AB12', campo: 'Ini_Adlt', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_Adlt': { celda: 'AC12', campo: 'CT_Adlt', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_AdltM': { celda: 'AD12', campo: 'Ini_AdltM', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_AdltM': { celda: 'AE12', campo: 'CT_AdltM', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Mt_A': { celda: 'AF12', campo: 'Mt_A', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Avan_A%': { celda: 'AG12', campo: 'Avan_A%', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Ini_Gst': { celda: 'AH12', campo: 'Ini_Gst', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_CT_Gst': { celda: 'AI12', campo: 'CT_Gst', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Mt_G': { celda: 'AJ12', campo: 'Mt_G', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },
    'INSTRU_Avan_G%': { celda: 'AK12', campo: 'Avan_G%', seccion: 'Instrucción de higiene oral', tabla: 'AT_PREVENTIVA', filtro_ppr: '0068003' },

    // ==================== SECCIÓN 7: APLICACIÓN DE SELLANTES ====================
    'APLIS_TOTAL_I': { celda: 'E13', campo: 'Ini_T', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_TOTAL_C': { celda: 'F13', campo: 'CT_T', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_28d': { celda: 'G13', campo: 'Ini_28d', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_28d': { celda: 'H13', campo: 'CT_28d', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_5m': { celda: 'I13', campo: 'Ini_5m', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_5m': { celda: 'J13', campo: 'CT_5m', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_11m': { celda: 'K13', campo: 'Ini_11m', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_11m': { celda: 'L13', campo: 'CT_11m', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_1a': { celda: 'M13', campo: 'Ini_1a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_1a': { celda: 'N13', campo: 'CT_1a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_2a': { celda: 'O13', campo: 'Ini_2a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_2a': { celda: 'P13', campo: 'CT_2a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_5a': { celda: 'Q13', campo: 'Ini_5a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_5a': { celda: 'R13', campo: 'CT_5a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_11a': { celda: 'S13', campo: 'Ini_11a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_11a': { celda: 'T13', campo: 'CT_11a', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_T_N': { celda: 'U13', campo: 'CT_T_N', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Mt_N': { celda: 'V13', campo: 'Mt_N', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Avan_N%': { celda: 'W13', campo: 'Avan_N%', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_Adls': { celda: 'X13', campo: 'Ini_Adls', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_Adls': { celda: 'Y13', campo: 'CT_Adls', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_Jven': { celda: 'Z13', campo: 'Ini_Jven', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_Jven': { celda: 'AA13', campo: 'CT_Jven', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_Adlt': { celda: 'AB13', campo: 'Ini_Adlt', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_Adlt': { celda: 'AC13', campo: 'CT_Adlt', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_AdltM': { celda: 'AD13', campo: 'Ini_AdltM', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_AdltM': { celda: 'AE13', campo: 'CT_AdltM', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Mt_A': { celda: 'AF13', campo: 'Mt_A', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Avan_A%': { celda: 'AG13', campo: 'Avan_A%', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Ini_Gst': { celda: 'AH13', campo: 'Ini_Gst', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_CT_Gst': { celda: 'AI13', campo: 'CT_Gst', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Mt_G': { celda: 'AJ13', campo: 'Mt_G', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },
    'APLIS_Avan_G%': { celda: 'AK13', campo: 'Avan_G%', seccion: 'Aplicación de Sellantes', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000602' },

    // ==================== SECCIÓN 8: APLICACIÓN DE BARNIZ FLUORADO ====================
    'APLIB_TOTAL_I': { celda: 'E14', campo: 'Ini_T', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_TOTAL_C': { celda: 'F14', campo: 'CT_T', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_28d': { celda: 'G14', campo: 'Ini_28d', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_28d': { celda: 'H14', campo: 'CT_28d', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_5m': { celda: 'I14', campo: 'Ini_5m', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_5m': { celda: 'J14', campo: 'CT_5m', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_11m': { celda: 'K14', campo: 'Ini_11m', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_11m': { celda: 'L14', campo: 'CT_11m', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_1a': { celda: 'M14', campo: 'Ini_1a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_1a': { celda: 'N14', campo: 'CT_1a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_2a': { celda: 'O14', campo: 'Ini_2a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_2a': { celda: 'P14', campo: 'CT_2a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_5a': { celda: 'Q14', campo: 'Ini_5a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_5a': { celda: 'R14', campo: 'CT_5a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_11a': { celda: 'S14', campo: 'Ini_11a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_11a': { celda: 'T14', campo: 'CT_11a', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_T_N': { celda: 'U14', campo: 'CT_T_N', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Mt_N': { celda: 'V14', campo: 'Mt_N', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Avan_N%': { celda: 'W14', campo: 'Avan_N%', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_Adls': { celda: 'X14', campo: 'Ini_Adls', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_Adls': { celda: 'Y14', campo: 'CT_Adls', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_Jven': { celda: 'Z14', campo: 'Ini_Jven', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_Jven': { celda: 'AA14', campo: 'CT_Jven', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_Adlt': { celda: 'AB14', campo: 'Ini_Adlt', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_Adlt': { celda: 'AC14', campo: 'CT_Adlt', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_AdltM': { celda: 'AD14', campo: 'Ini_AdltM', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_AdltM': { celda: 'AE14', campo: 'CT_AdltM', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Mt_A': { celda: 'AF14', campo: 'Mt_A', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Avan_A%': { celda: 'AG14', campo: 'Avan_A%', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Ini_Gst': { celda: 'AH14', campo: 'Ini_Gst', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_CT_Gst': { celda: 'AI14', campo: 'CT_Gst', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Mt_G': { celda: 'AJ14', campo: 'Mt_G', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },
    'APLIB_Avan_G%': { celda: 'AK14', campo: 'Avan_G%', seccion: 'Aplicación de Barniz Fluorado', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000603', filtro_preventiva: 'Aplicación de Barniz Fluorado' },

    // ==================== SECCIÓN 9: APLICACIÓN DE FLÚOR GEL ====================

    'APLIF1_TOTAL_I': { celda: 'E15', campo: 'Ini_T', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA', filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_TOTAL_C': { celda: 'F15', campo: 'CT_T', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA', filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_28d': { celda: 'G15', campo: 'Ini_28d', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA', filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_28d': { celda: 'H15', campo: 'CT_28d', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA', filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_5m': { celda: 'I15', campo: 'Ini_5m', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_5m': { celda: 'J15', campo: 'CT_5m', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_11m': { celda: 'K15', campo: 'Ini_11m', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_11m': { celda: 'L15', campo: 'CT_11m', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_1a': { celda: 'M15', campo: 'Ini_1a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_1a': { celda: 'N15', campo: 'CT_1a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_2a': { celda: 'O15', campo: 'Ini_2a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_2a': { celda: 'P15', campo: 'CT_2a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_5a': { celda: 'Q15', campo: 'Ini_5a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_5a': { celda: 'R15', campo: 'CT_5a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_11a': { celda: 'S15', campo: 'Ini_11a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_11a': { celda: 'T15', campo: 'CT_11a', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_T_N': { celda: 'U15', campo: 'CT_T_N', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Mt_N': { celda: 'V15', campo: 'Mt_N', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Avan_N%': { celda: 'W15', campo: 'Avan_N%', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_Adls': { celda: 'X15', campo: 'Ini_Adls', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_Adls': { celda: 'Y15', campo: 'CT_Adls', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_Jven': { celda: 'Z15', campo: 'Ini_Jven', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_Jven': { celda: 'AA15', campo: 'CT_Jven', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_Adlt': { celda: 'AB15', campo: 'Ini_Adlt', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_Adlt': { celda: 'AC15', campo: 'CT_Adlt', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_AdltM': { celda: 'AD15', campo: 'Ini_AdltM', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_AdltM': { celda: 'AE15', campo: 'CT_AdltM', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Mt_A': { celda: 'AF15', campo: 'Mt_A', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Avan_A%': { celda: 'AG15', campo: 'Avan_A%', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Ini_Gst': { celda: 'AH15', campo: 'Ini_Gst', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_CT_Gst': { celda: 'AI15', campo: 'CT_Gst', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Mt_G': { celda: 'AJ15', campo: 'Mt_G', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },
    'APLIF1_Avan_G%': { celda: 'AK15', campo: 'Avan_G%', seccion: 'Aplicación de Fluor Gel', tabla: 'AT_PREVENTIVA',   filtro_preventiva: 'Aplicación de Fluor Gel' },

    // ==================== SECCIÓN 10: PROFILAXIS DENTAL ====================
    'PROFI_TOTAL_I': { celda: 'E16', campo: 'Ini_T', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_TOTAL_C': { celda: 'F16', campo: 'CT_T', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_28d': { celda: 'G16', campo: 'Ini_28d', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_28d': { celda: 'H16', campo: 'CT_28d', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_5m': { celda: 'I16', campo: 'Ini_5m', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_5m': { celda: 'J16', campo: 'CT_5m', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_11m': { celda: 'K16', campo: 'Ini_11m', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_11m': { celda: 'L16', campo: 'CT_11m', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_1a': { celda: 'M16', campo: 'Ini_1a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_1a': { celda: 'N16', campo: 'CT_1a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_2a': { celda: 'O16', campo: 'Ini_2a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_2a': { celda: 'P16', campo: 'CT_2a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_5a': { celda: 'Q16', campo: 'Ini_5a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_5a': { celda: 'R16', campo: 'CT_5a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_11a': { celda: 'S16', campo: 'Ini_11a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_11a': { celda: 'T16', campo: 'CT_11a', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_T_N': { celda: 'U16', campo: 'CT_T_N', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Mt_N': { celda: 'V16', campo: 'Mt_N', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Avan_N%': { celda: 'W16', campo: 'Avan_N%', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_Adls': { celda: 'X16', campo: 'Ini_Adls', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_Adls': { celda: 'Y16', campo: 'CT_Adls', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_Jven': { celda: 'Z16', campo: 'Ini_Jven', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_Jven': { celda: 'AA16', campo: 'CT_Jven', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_Adlt': { celda: 'AB16', campo: 'Ini_Adlt', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_Adlt': { celda: 'AC16', campo: 'CT_Adlt', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_AdltM': { celda: 'AD16', campo: 'Ini_AdltM', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_AdltM': { celda: 'AE16', campo: 'CT_AdltM', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Mt_A': { celda: 'AF16', campo: 'Mt_A', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Avan_A%': { celda: 'AG16', campo: 'Avan_A%', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Ini_Gst': { celda: 'AH16', campo: 'Ini_Gst', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_CT_Gst': { celda: 'AI16', campo: 'CT_Gst', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Mt_G': { celda: 'AJ16', campo: 'Mt_G', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },
    'PROFI_Avan_G%': { celda: 'AK16', campo: 'Avan_G%', seccion: 'Profilaxis Dental', tabla: 'AT_PREVENTIVA', filtro_ppr: '5000606' },

    // SECION 11: Raspaje Dental (Destartraje)
    'RASJ_TOTAL_C': { celda: 'E21', campo: 'CT_T', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_28d': { celda: 'G21', campo: 'CT_28d', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_5m': { celda: 'I21', campo: 'CT_5m', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_11m': { celda: 'K21', campo: 'CT_11m', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_1a': { celda: 'M21', campo: 'CT_1a', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_2a': { celda: 'O21', campo: 'CT_2a', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_5a': { celda: 'Q21', campo: 'CT_5a', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_11a': { celda: 'S21', campo: 'CT_11a', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_T_N': { celda: 'U21', campo: 'CT_T_N', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Mt_N': { celda: 'V21', campo: 'Mt_N', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Avan_N%': { celda: 'W21', campo: 'Avan_N%', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_Adls': { celda: 'X21', campo: 'CT_Adls', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_Jven': { celda: 'Z21', campo: 'CT_Jven', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_Adlt': { celda: 'AB21', campo: 'CT_Adlt', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_AdltM': { celda: 'AD21', campo: 'CT_AdltM', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Mt_A': { celda: 'AF21', campo: 'Mt_A', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Avan_A%': { celda: 'AG21', campo: 'Avan_A%', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_CT_Gst': { celda: 'AH21', campo: 'CT_Gst', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Mt_G': { celda: 'AJ21', campo: 'Mt_G', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },
    'RASJ_Avan_G%': { celda: 'AK21', campo: 'Avan_G%', seccion: 'Raspaje Dental (Destartraje)', tabla: 'AT_RECUPERATIVA', filtro_ppr: '0068101', filtro_recuperativa: 'Raspaje Dental (Destartraje)' },

    // SECION 12: Debridación de los Procesos Infecciosos Bucodentales
    'DESB_TOTAL_C': { celda: 'E22', campo: 'CT_T', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_28d': { celda: 'G22', campo: 'CT_28d', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_5m': { celda: 'I22', campo: 'CT_5m', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_11m': { celda: 'K22', campo: 'CT_11m', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_1a': { celda: 'M22', campo: 'CT_1a', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_2a': { celda: 'O22', campo: 'CT_2a', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_5a': { celda: 'Q22', campo: 'CT_5a', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_11a': { celda: 'S22', campo: 'CT_11a', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_T_N': { celda: 'U22', campo: 'CT_T_N', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Mt_N': { celda: 'V22', campo: 'Mt_N', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Avan_N%': { celda: 'W22', campo: 'Avan_N%', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_Adls': { celda: 'X22', campo: 'CT_Adls', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_Jven': { celda: 'Z22', campo: 'CT_Jven', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_Adlt': { celda: 'AB22', campo: 'CT_Adlt', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_AdltM': { celda: 'AD22', campo: 'CT_AdltM', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Mt_A': { celda: 'AF22', campo: 'Mt_A', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Avan_A%': { celda: 'AG22', campo: 'Avan_A%', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_CT_Gst': { celda: 'AH22', campo: 'CT_Gst', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Mt_G': { celda: 'AJ22', campo: 'Mt_G', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },
    'DESB_Avan_G%': { celda: 'AK22', campo: 'Avan_G%', seccion: 'Desbridación de los Procesos Infecciosos Bucodentales', tabla: 'AT_RECUPERATIVA', filtro_ppr: ' ', filtro_recuperativa: 'Desbridación de los Procesos Infecciosos Bucodentales' },

    // SECION 13: Consulta Estomatológica
    'CONSUL_TOTAL_C': { celda: 'E23', campo: 'CT_T', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_28d': { celda: 'G23', campo: 'CT_28d', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_5m': { celda: 'I23', campo: 'CT_5m', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_11m': { celda: 'K23', campo: 'CT_11m', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_1a': { celda: 'M23', campo: 'CT_1a', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_2a': { celda: 'O23', campo: 'CT_2a', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_5a': { celda: 'Q23', campo: 'CT_5a', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_11a': { celda: 'S23', campo: 'CT_11a', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_T_N': { celda: 'U23', campo: 'CT_T_N', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Mt_N': { celda: 'V23', campo: 'Mt_N', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Avan_N%': { celda: 'W23', campo: 'Avan_N%', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_Adls': { celda: 'X23', campo: 'CT_Adls', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_Jven': { celda: 'Z23', campo: 'CT_Jven', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_Adlt': { celda: 'AB23', campo: 'CT_Adlt', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_AdltM': { celda: 'AD23', campo: 'CT_AdltM', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Mt_A': { celda: 'AF23', campo: 'Mt_A', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Avan_A%': { celda: 'AG23', campo: 'Avan_A%', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_CT_Gst': { celda: 'AH23', campo: 'CT_Gst', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Mt_G': { celda: 'AJ23', campo: 'Mt_G', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },
    'CONSUL_Avan_G%': { celda: 'AK23', campo: 'Avan_G%', seccion: 'Consulta Estomatológica', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000702', filtro_recuperativa: 'Consulta Estomatológica' },

    // SECION 14: Exodoncia Simple
    'EXOD_TOTAL_C': { celda: 'E24', campo: 'CT_T', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_28d': { celda: 'G24', campo: 'CT_28d', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_5m': { celda: 'I24', campo: 'CT_5m', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_11m': { celda: 'K24', campo: 'CT_11m', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_1a': { celda: 'M24', campo: 'CT_1a', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_2a': { celda: 'O24', campo: 'CT_2a', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_5a': { celda: 'Q24', campo: 'CT_5a', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_11a': { celda: 'S24', campo: 'CT_11a', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_T_N': { celda: 'U24', campo: 'CT_T_N', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Mt_N': { celda: 'V24', campo: 'Mt_N', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Avan_N%': { celda: 'W24', campo: 'Avan_N%', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_Adls': { celda: 'X24', campo: 'CT_Adls', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_Jven': { celda: 'Z24', campo: 'CT_Jven', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_Adlt': { celda: 'AB24', campo: 'CT_Adlt', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_AdltM': { celda: 'AD24', campo: 'CT_AdltM', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Mt_A': { celda: 'AF24', campo: 'Mt_A', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Avan_A%': { celda: 'AG24', campo: 'Avan_A%', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_CT_Gst': { celda: 'AH24', campo: 'CT_Gst', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Mt_G': { celda: 'AJ24', campo: 'Mt_G', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },
    'EXOD_Avan_G%': { celda: 'AK24', campo: 'Avan_G%', seccion: 'Exodoncia Simple', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000703', filtro_recuperativa: 'Exodoncia Simple' },

    // SECION 15: Restauraciones Dentales con Ionómero de Vidrio
    'REST_TOTAL_C': { celda: 'E25', campo: 'CT_T', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_28d': { celda: 'G25', campo: 'CT_28d', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_5m': { celda: 'I25', campo: 'CT_5m', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_11m': { celda: 'K25', campo: 'CT_11m', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_1a': { celda: 'M25', campo: 'CT_1a', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_2a': { celda: 'O25', campo: 'CT_2a', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_5a': { celda: 'Q25', campo: 'CT_5a', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_11a': { celda: 'S25', campo: 'CT_11a', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_T_N': { celda: 'U25', campo: 'CT_T_N', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Mt_N': { celda: 'V25', campo: 'Mt_N', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Avan_N%': { celda: 'W25', campo: 'Avan_N%', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_Adls': { celda: 'X25', campo: 'CT_Adls', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_Jven': { celda: 'Z25', campo: 'CT_Jven', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_Adlt': { celda: 'AB25', campo: 'CT_Adlt', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_AdltM': { celda: 'AD25', campo: 'CT_AdltM', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Mt_A': { celda: 'AF25', campo: 'Mt_A', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Avan_A%': { celda: 'AG25', campo: 'Avan_A%', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_CT_Gst': { celda: 'AH25', campo: 'CT_Gst', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Mt_G': { celda: 'AJ25', campo: 'Mt_G', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },
    'REST_Avan_G%': { celda: 'AK25', campo: 'Avan_G%', seccion: 'Restauraciones Dentales con Ionómero de Vidrio', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000704', filtro_recuperativa: 'Restauraciones Dentales con Ionómero de Vidrio' },

    // SECION 16: Restauraciones Dentales con Resina
    'RESTR_TOTAL_C': { celda: 'E26', campo: 'CT_T', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_28d': { celda: 'G26', campo: 'CT_28d', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_5m': { celda: 'I26', campo: 'CT_5m', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_11m': { celda: 'K26', campo: 'CT_11m', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_1a': { celda: 'M26', campo: 'CT_1a', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_2a': { celda: 'O26', campo: 'CT_2a', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_5a': { celda: 'Q26', campo: 'CT_5a', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_11a': { celda: 'S26', campo: 'CT_11a', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_T_N': { celda: 'U26', campo: 'CT_T_N', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Mt_N': { celda: 'V26', campo: 'Mt_N', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Avan_N%': { celda: 'W26', campo: 'Avan_N%', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_Adls': { celda: 'X26', campo: 'CT_Adls', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_Jven': { celda: 'Z26', campo: 'CT_Jven', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_Adlt': { celda: 'AB26', campo: 'CT_Adlt', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_AdltM': { celda: 'AD26', campo: 'CT_AdltM', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Mt_A': { celda: 'AF26', campo: 'Mt_A', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Avan_A%': { celda: 'AG26', campo: 'Avan_A%', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_CT_Gst': { celda: 'AH26', campo: 'CT_Gst', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Mt_G': { celda: 'AJ26', campo: 'Mt_G', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },
    'RESTR_Avan_G%': { celda: 'AK26', campo: 'Avan_G%', seccion: 'Restauraciones Dentales con Resina', tabla: 'AT_RECUPERATIVA', filtro_ppr: '5000705', filtro_recuperativa: 'Restauraciones Dentales con Resina' },

    // SECION 17: Terapia Pulpar
    'TERP_CT_T': { celda: 'E31', campo: 'CT_T', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_11m': { celda: 'H31', campo: 'CT_11m', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_1a': { celda: 'K31', campo: 'CT_1a', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_2a': { celda: 'N31', campo: 'CT_2a', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_5a': { celda: 'Q31', campo: 'CT_5a', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_11a': { celda: 'T31', campo: 'CT_11a', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_T_N': { celda: 'W31', campo: 'CT_T_N', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_Mt_N': { celda: 'X31', campo: 'Mt_N', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_Avan_N%': { celda: 'Y31', campo: 'Avan_N%', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_Adls': { celda: 'Z31', campo: 'CT_Adls', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_Jven': { celda: 'AC31', campo: 'CT_Jven', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_Adlt': { celda: 'AF31', campo: 'CT_Adlt', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_AdltM': { celda: 'AI31', campo: 'CT_AdltM', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_CT_Gst': { celda: 'AL31', campo: 'CT_Gst', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_Mt_G': { celda: 'AO31', campo: 'Mt_G', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },
    'TERP_Avan_G%': { celda: 'AP31', campo: 'Avan_G%', seccion: 'Terapia Pulpar', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000814', filtro_recuperativa: 'Terapia Pulpar' },

    // SECION 18: Terapia Endodóntica
    'TERE_Ini_T_TER': { celda: 'E32', campo: 'Ini_T', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_T_TER': { celda: 'F32', campo: 'CC_T', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_T_TER': { celda: 'G32', campo: 'CT_T', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_11m_TER': { celda: 'H32', campo: 'Ini_11m', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_11m_TER': { celda: 'I32', campo: 'CC_11m', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_11m_TER': { celda: 'J32', campo: 'CT_11m', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_1a_TER': { celda: 'K32', campo: 'Ini_1a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_1a_TER': { celda: 'L32', campo: 'CC_1a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_1a_TER': { celda: 'M32', campo: 'CT_1a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_2a_TER': { celda: 'N32', campo: 'Ini_2a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_2a_TER': { celda: 'O32', campo: 'CC_2a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_2a_TER': { celda: 'P32', campo: 'CT_2a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_5a_TER': { celda: 'Q32', campo: 'Ini_5a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_5a_TER': { celda: 'R32', campo: 'CC_5a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_5a_TER': { celda: 'S32', campo: 'CT_5a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_11a_TER': { celda: 'T32', campo: 'Ini_11a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_11a_TER': { celda: 'U32', campo: 'CC_11a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_11a_TER': { celda: 'V32', campo: 'CT_11a', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_T_N_TER': { celda: 'W32', campo: 'CT_T_N', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Mt_N_TER': { celda: 'X32', campo: 'Mt_N', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Avan_N%_TER': { celda: 'Y32', campo: 'Avan_N%', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_Adls_TER': { celda: 'Z32', campo: 'Ini_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_Adls_TER': { celda: 'AA32', campo: 'CC_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_Adls_TER': { celda: 'AB32', campo: 'CT_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_Jven_TER': { celda: 'AC32', campo: 'Ini_Jven', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_Jven_TER': { celda: 'AD32', campo: 'CC_Jven', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_Jven_TER': { celda: 'AE32', campo: 'CT_Jven', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_Adlt_TER': { celda: 'AF32', campo: 'Ini_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_Adlt_TER': { celda: 'AG32', campo: 'CC_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_Adlt_TER': { celda: 'AH32', campo: 'CT_Adls', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_AdltM_TER': { celda: 'AI32', campo: 'Ini_AdltM', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_AdltM_TER': { celda: 'AJ32', campo: 'CC_AdltM', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_AdltM_TER': { celda: 'AK32', campo: 'CT_AdltM', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Ini_Gst_TER': { celda: 'AL32', campo: 'Ini_Gst', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CC_Gst_TER': { celda: 'AM32', campo: 'CC_Gst', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_CT_Gst_TER': { celda: 'AN32', campo: 'CT_Gst', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Mt_G_TER': { celda: 'AO32', campo: 'Mt_G', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },
    'TERE_Avan_G%_TER': { celda: 'AP32', campo: 'Avan_G%', seccion: 'Terapia Endodóntica', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000815', filtro_recuperativa: 'Terapia Endodóntica' },

    // SECION 19: Tratamiento Periodontal
    'TRATAP_CT_T': { celda: 'E33', campo: 'CT_T', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_5a': { celda: 'Q33', campo: 'CT_5a', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_11a': { celda: 'T33', campo: 'CT_11a', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_T_N': { celda: 'W33', campo: 'CT_T_N', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_Mt_N': { celda: 'X33', campo: 'Mt_N', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_Avan_N%': { celda: 'Y33', campo: 'Avan_N%', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_Adls': { celda: 'Z33', campo: 'CT_Adls', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_Jven': { celda: 'AC33', campo: 'CT_Jven', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_Adlt': { celda: 'AF33', campo: 'CT_Adlt', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_AdltM': { celda: 'AI33', campo: 'CT_AdltM', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_CT_Gst': { celda: 'AL33', campo: 'CT_Gst', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_Mt_G': { celda: 'AO33', campo: 'Mt_G', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },
    'TRATAP_Avan_G%': { celda: 'AP33', campo: 'Avan_G%', seccion: 'Tratamiento Periodontal', tabla: 'AT_ESPECIALIZADA', filtro_ppr: '5000816', filtro_recuperativa: 'Tratamiento Periodontal' },


    // SECION 20: Tto de Ortodoncia y Ortopedia Maxilar

    'TRATAOR_Ini_T': { celda: 'E38', campo: 'Ini_T', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_T': { celda: 'F38', campo: 'CT_T', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_T': { celda: 'G38', campo: 'TC_T', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_T': { celda: 'H38', campo: 'TT_T', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_11m': { celda: 'I38', campo: 'Ini_11m', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_11m': { celda: 'J38', campo: 'CT_11m', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_11m': { celda: 'K38', campo: 'TC_11m', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_11m': { celda: 'L38', campo: 'TT_11m', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_1a': { celda: 'M38', campo: 'Ini_1a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_1a': { celda: 'N38', campo: 'CT_1a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_1a': { celda: 'O38', campo: 'TC_1a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_1a': { celda: 'P38', campo: 'TT_1a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_2a': { celda: 'Q38', campo: 'Ini_2a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_2a': { celda: 'R38', campo: 'CT_2a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_2a': { celda: 'S38', campo: 'TC_2a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_2a': { celda: 'T38', campo: 'TT_2a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_5a': { celda: 'U38', campo: 'Ini_5a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_5a': { celda: 'V38', campo: 'CT_5a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_5a': { celda: 'W38', campo: 'TC_5a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_5a': { celda: 'X38', campo: 'TT_5a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_11a': { celda: 'Y38', campo: 'Ini_11a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_11a': { celda: 'Z38', campo: 'CT_11a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_11a': { celda: 'AA38', campo: 'TC_11a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_11a': { celda: 'AB38', campo: 'TT_11a', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_CT_T_N': { celda: 'AC38', campo: 'CT_T_N', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_Mt_N': { celda: 'AD38', campo: 'Mt_N', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_Avan_N%': { celda: 'AE38', campo: 'Avan_N%', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_Adls': { celda: 'AF38', campo: 'Ini_Adls', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_Adls': { celda: 'AG38', campo: 'CT_Adls', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_Adls': { celda: 'AH38', campo: 'TC_Adls', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_Adls': { celda: 'AI38', campo: 'TT_Adls', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },


    'TRATAOR_Ini_Jv': { celda: 'AJ38', campo: 'Ini_Jv', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_Jv': { celda: 'AK38', campo: 'CT_Jv', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_Jv': { celda: 'AL38', campo: 'TC_Jv', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_Jv': { celda: 'AM38', campo: 'TT_Jv', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_Ad': { celda: 'AN38', campo: 'Ini_Ad', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_Ad': { celda: 'AO38', campo: 'CT_Ad', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_Ad': { celda: 'AP38', campo: 'TC_Ad', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_Ad': { celda: 'AQ38', campo: 'TT_Ad', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_AdM': { celda: 'AR38', campo: 'Ini_AdM', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_AdM': { celda: 'AS38', campo: 'CT_AdM', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_AdM': { celda: 'AT38', campo: 'TC_AdM', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_AdM': { celda: 'AU38', campo: 'TT_AdM', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Ini_Gst': { celda: 'AV38', campo: 'Ini_Gst', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_CT_Gst': { celda: 'AW38', campo: 'CT_Gst', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TC_Gst': { celda: 'AX38', campo: 'TC_Gst', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_TT_Gst': { celda: 'AY38', campo: 'TT_Gst', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },

    'TRATAOR_Mt_G': { celda: 'AZ38', campo: 'Mt_G', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },
    'TRATAOR_Avan_G%': { celda: 'BA38', campo: 'Avan_G%', seccion: 'Tto de Ortodoncia y Ortopedia Maxilar', tabla: 'AT_ESPECIALIZADA_02', filtro_ppr: '500818', filtro_recuperativa: 'Tto de Ortodoncia y Ortopedia Maxilar' },



    // SECION 21: Tto Quirurgico Bucal y Máxilo Facial
    'TRATAQUI_Total_C': { celda: 'E43', campo: 'Total_C', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_28d': { celda: 'G43', campo: 'Caso_Tratado_28d', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_5m': { celda: 'I43', campo: 'Caso_Tratado_5m', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_11m': { celda: 'K43', campo: 'Caso_Tratado_11m', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_1a': { celda: 'M43', campo: 'Caso_Tratado_1a', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_2a': { celda: 'O43', campo: 'Caso_Tratado_2a', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_5a': { celda: 'Q43', campo: 'Caso_Tratado_5a', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_11a': { celda: 'S43', campo: 'Caso_Tratado_11a', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_TOTAL_C_N': { celda: 'U43', campo: 'TOTAL_C_N', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_META_N': { celda: 'V43', campo: 'META_N', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_AVANCE_N': { celda: 'W43', campo: 'AVANCE_N', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_Adolesc': { celda: 'X43', campo: 'Caso_Tratado_Adolesc', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_Joven': { celda: 'Z43', campo: 'Caso_Tratado_Joven', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Tratado_Adulto': { celda: 'AB43', campo: 'Caso_Tratado_Adulto', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Adulto_Mayor': { celda: 'AD43', campo: 'Caso_Adulto_Mayor', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_META_A': { celda: 'AF43', campo: 'META_A', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_AVANCE_A': { celda: 'AG43', campo: 'AVANCE_A', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_Caso_Gestante': { celda: 'AH43', campo: 'Caso_Gestante', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_META_G': { celda: 'AJ43', campo: 'META_G', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },
    'TRATAQUI_AVANCE_G': { celda: 'AK43', campo: 'AVANCE_G', seccion: 'Tto Quirurgico Bucal y Máxilo Facial', tabla: 'AT_ESPECIALIZADA_03', filtro_ppr: '500817', filtro_recuperativa: 'Tto Quirurgico Bucal y Máxilo Facial' },


    // SECION 22: Actividades de Promoción de la Salud : Sesión Educativa y demostrativa
    'ACTIPRO1_TOTAL_EDU': { celda: 'T47', campo: 'TOTAL', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL' , filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa'},
    'ACTIPRO1_Nino_EDU': { celda: 'V47', campo: 'Nino', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa' },
    'ACTIPRO1_Adolescente_EDU': { celda: 'X47', campo: 'Adolescente', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL' , filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa'},
    'ACTIPRO1_Joven_EDU': { celda: 'Z47', campo: 'Joven', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa' },
    'ACTIPRO1_Adulto_EDU': { celda: 'AB47', campo: 'Adulto', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa' },
    'ACTIPRO1_AdultoM_EDU': { celda: 'AD47', campo: 'AdultoM', seccion: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Actividades de Promoción de la Salud : Sesión Educativa y demostrativa' },

    // SECION 23: Registros en extramuro: sesiones educativas y demostrativas
    'ACTIPRO2_TOTAL_EXT': { celda: 'T48', campo: 'TOTAL', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ACTIPRO2_Nino_EXT': { celda: 'V48', campo: 'Nino', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ACTIPRO2_Adolescente_EXT': { celda: 'X48', campo: 'Adolescente', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ACTIPRO2_Joven_EXT': { celda: 'Z48', campo: 'Joven', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ACTIPRO2_Adulto_EXT': { celda: 'AB48', campo: 'Adulto', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ACTIPRO2_AdultoM_EXT': { celda: 'AD48', campo: 'AdultoM', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: sesiones educativas y demostrativas' },

    // SECION 24: Registros en extramuro: procedimientos
    'ACTIPRO3_TOTAL_PROC': { celda: 'T49', campo: 'TOTAL', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },
    'ACTIPRO3_Nino_PROC': { celda: 'V49', campo: 'Nino', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },
    'ACTIPRO3_Adolescente_PROC': { celda: 'X49', campo: 'Adolescente', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },
    'ACTIPRO3_Joven_PROC': { celda: 'Z49', campo: 'Joven', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },
    'ACTIPRO3_Adulto_PROC': { celda: 'AB49', campo: 'Adulto', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },
    'ACTIPRO3_AdultoM_PROC': { celda: 'AD49', campo: 'AdultoM', seccion: 'Registros en extramuro: procedimientos', tabla: 'PREVENCION_BUCAL', filtro_curso_vida: 'Registros en extramuro: procedimientos' },


    // SECION 25: ATENCIONES ATENDIDOS
    'ACTIPRO_TOTAL_AD': { celda: 'R54', campo: 'TOTAL_AD', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_Nino': { celda: 'S54', campo: 'AD_Nino', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_Adolescente': { celda: 'T54', campo: 'AD_Adolescente', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_Joven': { celda: 'U54', campo: 'AD_Joven', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_Adulto': { celda: 'V54', campo: 'AD_Adulto', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_AdultoM': { celda: 'W54', campo: 'AD_AdultoM', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AD_Gestante': { celda: 'X54', campo: 'AD_Gestante', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_TOTAL_AC': { celda: 'Y54', campo: 'TOTAL_AC', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_Nino': { celda: 'Z54', campo: 'AC_Nino', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_Adolescente': { celda: 'AA54', campo: 'AC_Adolescente', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_Joven': { celda: 'AB54', campo: 'AC_Joven', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_Adulto': { celda: 'AC54', campo: 'AC_Adulto', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_AdultoM': { celda: 'AD54', campo: 'AC_AdultoM', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },
    'ACTIPRO_AC_Gestante': { celda: 'AE54', campo: 'AC_Gestante', seccion: 'Atenciones Atendidos', tabla: 'ATENDIDOS_ATENCIONES' },

    // SECION 26: Interconsulta de Hospitalizacion
    'ACTIPRO_3_5a': { celda: 'Y62', campo: '3_5a', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_6_11a': { celda: 'Z62', campo: '6_11a', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_Adolescentes': { celda: 'AA62', campo: 'Adolescentes', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_Joven': { celda: 'AC62', campo: 'Joven', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_Adulto': { celda: 'AD62', campo: 'Adulto', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_AdultoM': { celda: 'AE62', campo: 'AdultoM', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_Gestante': { celda: 'AF62', campo: 'Gestante', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },
    'ACTIPRO_TOTAL': { celda: 'AG62', campo: 'TOTAL', seccion: 'Interconsulta de Hospitalizacion', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta de Hospitalizacion' },

    // SECION 27: Interconsulta Ambulatoria
    'ACTIPRO_3_5a_A': { celda: 'Y63', campo: '3_5a', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_6_11a_A': { celda: 'Z63', campo: '6_11a', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_Adolescentes_A': { celda: 'AA63', campo: 'Adolescentes', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_Joven_A': { celda: 'AC63', campo: 'Joven', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_Adulto_A': { celda: 'AD63', campo: 'Adulto', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_AdultoM_A': { celda: 'AE63', campo: 'AdultoM', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_Gestante_A': { celda: 'AF63', campo: 'Gestante', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },
    'ACTIPRO_TOTAL_A': { celda: 'AG63', campo: 'TOTAL', seccion: 'Interconsulta Ambulatoria', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Interconsulta Ambulatoria' },


    // SECION 28: Referencia a EE.SS. con capacidad resolutiva
    'ACTIPRO_3_5a_E': { celda: 'Y64', campo: '3_5a', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_6_11a_E': { celda: 'Z64', campo: '6_11a', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_Adolescentes_E': { celda: 'AA64', campo: 'Adolescentes', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_Joven_E': { celda: 'AC64', campo: 'Joven', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_Adulto_E': { celda: 'AD64', campo: 'Adulto', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_AdultoM_E': { celda: 'AE64', campo: 'AdultoM', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_Gestante_E': { celda: 'AF64', campo: 'Gestante', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },
    'ACTIPRO_TOTAL_E': { celda: 'AG64', campo: 'TOTAL', seccion: 'Referencia a EE.SS. con capacidad resolutiva', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Referencia a EE.SS. con capacidad resolutiva' },

    // SECION 29: Contrarreferencia
    'ACTIPRO_3_5a_C': { celda: 'Y65', campo: '3_5a', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_6_11a_C': { celda: 'Z65', campo: '6_11a', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_Adolescentes_C': { celda: 'AA65', campo: 'Adolescentes', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_Joven_C': { celda: 'AC65', campo: 'Joven', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_Adulto_C': { celda: 'AD65', campo: 'Adulto', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_AdultoM_C': { celda: 'AE65', campo: 'AdultoM', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_Gestante_C': { celda: 'AF65', campo: 'Gestante', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },
    'ACTIPRO_TOTAL_C': { celda: 'AG65', campo: 'TOTAL', seccion: 'Contrarreferencia', tabla: 'AT_INTERCONSULTA', filtro_procedimiento: 'Contrarreferencia' },


    // SECION 30: Rehabilitación Protésica

    'ACTIPRO_Impresion_Primaria_IP': { celda: 'E48', campo: 'Impresion_Primaria_IP', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Impresion_Definitiva_ID': { celda: 'E49', campo: 'Impresion_Definitiva_ID', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Relacion_Intermaxilar_RI': { celda: 'E50', campo: 'Relacion_Intermaxilar_RI', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Prueba_de_Enfilado_PEN': { celda: 'E51', campo: 'Prueba_de_Enfilado_PEN', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Instalacion_de_Protesis_IN': { celda: 'E52', campo: 'Instalacion_de_Protesis_IN', seccion: 'Instalacion_de_Protesis_IN', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Primer_Control_1C': { celda: 'E53', campo: 'Primer_Control_1C', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },
    'ACTIPRO_Segundo_Control_2C': { celda: 'E54', campo: 'Segundo_Control_2C', seccion: 'Rehabilitación Protésica', tabla: 'REHABILITACION_PROTESICA' },

    // SECION 31: Inactivación de Caries con Fluoruro de Amino Plata = F
    'ACTIPRO_3_5a_I': { celda: 'E62', campo: '3_5a', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_6_11a_I': { celda: 'G62', campo: '6_11a', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_Adolescente_I': { celda: 'I62', campo: 'Adolescente', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_Joven_I': { celda: 'K62', campo: 'Joven', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_Adulto_I': { celda: 'M62', campo: 'Adulto', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_AdultoM_I': { celda: 'O62', campo: 'Adulto_Mayor', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },
    'ACTIPRO_Gestante_I': { celda: 'Q62', campo: 'Gestante', seccion: 'Inactivación de Caries con Fluoruro de Amino Plata = F', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Fluoruro de Amino Plata = F' },

    // SECION 32: Inactivación de Caries con Resina = R
    'ACTIPRO_3_5a_R': { celda: 'E63', campo: '3_5a', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_6_11a_R': { celda: 'G63', campo: '6_11a', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_Adolescente_R': { celda: 'I63', campo: 'Adolescente', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_Joven_R': { celda: 'K63', campo: 'Joven', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_Adulto_R': { celda: 'M63', campo: 'Adulto', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_AdultoM_R': { celda: 'O63', campo: 'Adulto_Mayor', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },
    'ACTIPRO_Gestante_R': { celda: 'Q63', campo: 'Gestante', seccion: 'Inactivación de Caries con Resina = R', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Resina = R' },

    // SECION 33: Inactivación de Caries con Ionomero de Vidrio = IV
    'ACTIPRO_3_5a_V': { celda: 'E64', campo: '3_5a', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_6_11a_V': { celda: 'G64', campo: '6_11a', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_Adolescente_V': { celda: 'I64', campo: 'Adolescente', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_Joven_V': { celda: 'K64', campo: 'Joven', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_Adulto_V': { celda: 'M64', campo: 'Adulto', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_AdultoM_V': { celda: 'O64', campo: 'Adulto_Mayor', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },
    'ACTIPRO_Gestante_V': { celda: 'Q64', campo: 'Gestante', seccion: 'Inactivación de Caries con Ionomero de Vidrio = IV', tabla: 'INACTIVACION_CARIES', filtro_inactivacion: 'Inactivación de Caries con Ionomero de Vidrio = IV' },



    // SECION 34: Teleorientación Síncrona
    'TELESIN_TOTAL_1': { celda: 'E75', campo: 'TOTAL', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_0_a_28d_1': { celda: 'G75', campo: '0_a_28d', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_29_a_5m_1': { celda: 'I75', campo: '29_a_5m', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_6_a_11m_1': { celda: 'K75', campo: '6_a_11m', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_1año_1': { celda: 'M75', campo: '1año', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_2años_1': { celda: 'O75', campo: '2años', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_3_a_5años_1': { celda: 'Q75', campo: '3_a_5años', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_6_a_11años_1': { celda: 'S75', campo: '6_a_11años', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_Adolescente_1': { celda: 'U75', campo: 'Adolescente', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_Joven_1': { celda: 'W75', campo: 'Joven', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_Adulto_1': { celda: 'Y75', campo: 'Adulto', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_Adulto_Mayor_1': { celda: 'AA75', campo: 'Adulto_Mayor', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },
    'TELESIN_Gestante_1': { celda: 'AC75', campo: 'Gestante', seccion: 'Teleorientación Síncrona', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona' },


    // SECION 35: Teleorientación Síncrona

    'TELESIN_TOTAL_2': { celda: 'E76', campo: 'TOTAL', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_0_a_28d_2': { celda: 'G76', campo: '0_a_28d', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_29_a_5m_2': { celda: 'I76', campo: '29_a_5m', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_6_a_11m_2': { celda: 'K76', campo: '6_a_11m', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_1año_2': { celda: 'M76', campo: '1año', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_2años_2': { celda: 'O76', campo: '2años', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_3_a_5años_2': { celda: 'Q76', campo: '3_a_5años', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_6_a_11años_2': { celda: 'S76', campo: '6_a_11años', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_Adolescente_2': { celda: 'U76', campo: 'Adolescente', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_Joven_2': { celda: 'W76', campo: 'Joven', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_Adulto_2': { celda: 'Y76', campo: 'Adulto', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_Adulto_Mayor_2': { celda: 'AA76', campo: 'Adulto_Mayor', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELESIN_Gestante_2': { celda: 'AC76', campo: 'Gestante', seccion: 'Teleorientación Asíncrona - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal' },

    // SECION 36: Teleorientación Síncrona - Salud Bucal - Atención Preventiva 
    'TELESIN_TOTAL_3': { celda: 'E77', campo: 'TOTAL', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_0_a_28d_3': { celda: 'G77', campo: '0_a_28d', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_29_a_5m_3': { celda: 'I77', campo: '29_a_5m', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_6_a_11m_3': { celda: 'K77', campo: '6_a_11m', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_1año_3': { celda: 'M77', campo: '1año', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_2años_3': { celda: 'O77', campo: '2años', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_3_a_5años_3': { celda: 'Q77', campo: '3_a_5años', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_6_a_11años_3': { celda: 'S77', campo: '6_a_11años', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_Adolescente_3': { celda: 'U77', campo: 'Adolescente', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_Joven_3': { celda: 'W77', campo: 'Joven', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_Adulto_3': { celda: 'Y77', campo: 'Adulto', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_Adulto_Mayor_3': { celda: 'AA77', campo: 'Adulto_Mayor', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },
    'TELESIN_Gestante_3': { celda: 'AC77', campo: 'Gestante', seccion: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva ' },

    // SECION 37: Teleorientación Asíncrona - Salud Bucal - Atención Preventiva
    'TELESIN_TOTAL_4': { celda: 'E78', campo: 'TOTAL', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_0_a_28d_4': { celda: 'G78', campo: '0_a_28d', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_29_a_5m_4': { celda: 'I78', campo: '29_a_5m', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_6_a_11m_4': { celda: 'K78', campo: '6_a_11m', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_1año_4': { celda: 'M78', campo: '1año', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_2años_4': { celda: 'O78', campo: '2años', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_3_a_5años_4': { celda: 'Q78', campo: '3_a_5años', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_6_a_11años_4': { celda: 'S78', campo: '6_a_11años', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_Adolescente_4': { celda: 'U78', campo: 'Adolescente', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_Joven_4': { celda: 'W78', campo: 'Joven', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_Adulto_4': { celda: 'Y78', campo: 'Adulto', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_Adulto_Mayor_4': { celda: 'AA78', campo: 'Adulto_Mayor', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELESIN_Gestante_4': { celda: 'AC78', campo: 'Gestante', seccion: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },


    // SECION 38: Teleorientación y Asesoría Nutricional para el control de enfermedades dentales


    'TELESIN_TOTAL_5': { celda: 'E79', campo: 'TOTAL', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_0_a_28d_5': { celda: 'G79', campo: '0_a_28d', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_29_a_5m_5': { celda: 'I79', campo: '29_a_5m', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_6_a_11m_5': { celda: 'K79', campo: '6_a_11m', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_1año_5': { celda: 'M79', campo: '1año', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_2años_5': { celda: 'O79', campo: '2años', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_3_a_5años_5': { celda: 'Q79', campo: '3_a_5años', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_6_a_11años_5': { celda: 'S79', campo: '6_a_11años', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_Adolescente_5': { celda: 'U79', campo: 'Adolescente', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_Joven_5': { celda: 'W79', campo: 'Joven', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_Adulto_5': { celda: 'Y79', campo: 'Adulto', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_Adulto_Mayor_5': { celda: 'AA79', campo: 'Adulto_Mayor', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELESIN_Gestante_5': { celda: 'AC79', campo: 'Gestante', seccion: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales', tabla: 'TELESALUD', filtro_telesalud: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },


    // SECION 39: Telemonitoreo  - Salud Bucal

    'TELESIN_TOTAL_6': { celda: 'E80', campo: 'TOTAL', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_0_a_28d_6': { celda: 'G80', campo: '0_a_28d', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_29_a_5m_6': { celda: 'I80', campo: '29_a_5m', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_6_a_11m_6': { celda: 'K80', campo: '6_a_11m', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_1año_6': { celda: 'M80', campo: '1año', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_2años_6': { celda: 'O80', campo: '2años', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_3_a_5años_6': { celda: 'Q80', campo: '3_a_5años', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_6_a_11años_6': { celda: 'S80', campo: '6_a_11años', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_Adolescente_6': { celda: 'U80', campo: 'Adolescente', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_Joven_6': { celda: 'W80', campo: 'Joven', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_Adulto_6': { celda: 'Y80', campo: 'Adulto', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_Adulto_Mayor_6': { celda: 'AA80', campo: 'Adulto_Mayor', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },
    'TELESIN_Gestante_6': { celda: 'AC80', campo: 'Gestante', seccion: 'Telemonitoreo  - Salud Bucal', tabla: 'TELESALUD', filtro_telesalud: 'Telemonitoreo  - Salud Bucal' },

    // SECION 40: Teleinterconsulta Síncrona (teleinterconsultante)

    'TELESIN_TOTAL_7': { celda: 'E81', campo: 'TOTAL', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_0_a_28d_7': { celda: 'G81', campo: '0_a_28d', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_29_a_5m_7': { celda: 'I81', campo: '29_a_5m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_6_a_11m_7': { celda: 'K81', campo: '6_a_11m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_1año_7': { celda: 'M81', campo: '1año', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_2años_7': { celda: 'O81', campo: '2años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_3_a_5años_7': { celda: 'Q81', campo: '3_a_5años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_6_a_11años_7': { celda: 'S81', campo: '6_a_11años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_Adolescente_7': { celda: 'U81', campo: 'Adolescente', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_Joven_7': { celda: 'W81', campo: 'Joven', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_Adulto_7': { celda: 'Y81', campo: 'Adulto', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_Adulto_Mayor_7': { celda: 'AA81', campo: 'Adulto_Mayor', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELESIN_Gestante_7': { celda: 'AC81', campo: 'Gestante', seccion: 'Teleinterconsulta Síncrona (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultante)' },

    // SECION 41: Teleinterconsulta Síncrona (teleinterconsultor)

    'TELESIN_TOTAL_8': { celda: 'E82', campo: 'TOTAL', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_0_a_28d_8': { celda: 'G82', campo: '0_a_28d', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_29_a_5m_8': { celda: 'I82', campo: '29_a_5m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_6_a_11m_8': { celda: 'K82', campo: '6_a_11m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_1año_8': { celda: 'M82', campo: '1año', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_2años_8': { celda: 'O82', campo: '2años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_3_a_5años_8': { celda: 'Q82', campo: '3_a_5años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_6_a_11años_8': { celda: 'S82', campo: '6_a_11años', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_Adolescente_8': { celda: 'U82', campo: 'Adolescente', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_Joven_8': { celda: 'W82', campo: 'Joven', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_Adulto_8': { celda: 'Y82', campo: 'Adulto', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_Adulto_Mayor_8': { celda: 'AA82', campo: 'Adulto_Mayor', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELESIN_Gestante_8': { celda: 'AC82', campo: 'Gestante', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Síncrona (teleinterconsultor)' },

    // SECION 42: Teleinterconsulta Asíncrona   (teleinterconsultante)

    'TELESIN_TOTAL_9': { celda: 'E83', campo: 'TOTAL', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_0_a_28d_9': { celda: 'G83', campo: '0_a_28d', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_29_a_5m_9': { celda: 'I83', campo: '29_a_5m', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_6_a_11m_9': { celda: 'K83', campo: '6_a_11m', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_1año_9': { celda: 'M83', campo: '1año', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_2años_9': { celda: 'O83', campo: '2años', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_3_a_5años_9': { celda: 'Q83', campo: '3_a_5años', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_6_a_11años_9': { celda: 'S83', campo: '6_a_11años', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_Adolescente_9': { celda: 'U83', campo: 'Adolescente', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_Joven_9': { celda: 'W83', campo: 'Joven', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_Adulto_9': { celda: 'Y83', campo: 'Adulto', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_Adulto_Mayor_9': { celda: 'AA83', campo: 'Adulto_Mayor', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },
    'TELESIN_Gestante_9': { celda: 'AC83', campo: 'Gestante', seccion: 'Teleinterconsulta Asíncrona   (teleinterconsultante)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona   (teleinterconsultante)' },

    // SECION 43: Teleinterconsulta Asíncrona (teleinterconsultor)

    'TELESIN_TOTAL_10': { celda: 'E84', campo: 'TOTAL', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_0_a_28d_10': { celda: 'G84', campo: '0_a_28d', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_29_a_5m_10': { celda: 'I84', campo: '29_a_5m', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_6_a_11m_10': { celda: 'K84', campo: '6_a_11m', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_1año_10': { celda: 'M84', campo: '1año', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_2años_10': { celda: 'O84', campo: '2años', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_3_a_5años_10': { celda: 'Q84', campo: '3_a_5años', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_6_a_11años_10': { celda: 'S84', campo: '6_a_11años', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_Adolescente_10': { celda: 'U84', campo: 'Adolescente', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_Joven_10': { celda: 'W84', campo: 'Joven', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_Adulto_10': { celda: 'Y84', campo: 'Adulto', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_Adulto_Mayor_10': { celda: 'AA84', campo: 'Adulto_Mayor', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELESIN_Gestante_10': { celda: 'AC84', campo: 'Gestante', seccion: 'Teleinterconsulta Asíncrona (teleinterconsultor)', tabla: 'TELESALUD', filtro_telesalud: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },


    // SECION 44: Alta Básica Odontológica (Población General)

    'ALTAPG_RN': { celda: 'E92', campo: 'RN', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_1m-6m': { celda: 'G92', campo: '1m-6m', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_7m-11m': { celda: 'I92', campo: '7m-11m', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_1a-2a': { celda: 'K92', campo: '1a-2a', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_3a-5a': { celda: 'M92', campo: '3a-5a', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_6a-11a': { celda: 'O92', campo: '6a-11a', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Adolescente': { celda: 'Q91', campo: 'Adolescente', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Joven': { celda: 'S91', campo: 'Joven', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Adulto': { celda: 'U91', campo: 'Adulto', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_AdultoMay': { celda: 'W91', campo: 'AdultoMay', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Adolesc_Gest': { celda: 'Y91', campo: 'Adolesc_Gest', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Joven_Gest': { celda: 'AA91', campo: 'Joven_Gest', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },
    'ALTAPG_Adulta_Gest': { celda: 'AC91', campo: 'Adulta_Gest', seccion: 'Alta Básica Odontológica (Población General)', tabla: 'PG2_ODONTOLOGIA' },


    // SECION 45: Alta Básica Odontológica (CV Niño)

    'ALTAPG_RN_N': { celda: 'E96', campo: '0-5m', seccion: 'Alta Básica Odontológica (CV Niño)', tabla: 'PG2_ODONTOLOGIA_N' },
    'ALTAPG_1m-6m_N': { celda: 'G96', campo: '6m-<6a', seccion: 'Alta Básica Odontológica (CV Niño)', tabla: 'PG2_ODONTOLOGIA_N' },
    'ALTAPG_7m-11m_N': { celda: 'I96', campo: '6a-11a', seccion: 'Alta Básica Odontológica (CV Niño)', tabla: 'PG2_ODONTOLOGIA_N' },

    // SECION 46: Persona sana para salud Bucal (Población General)

    'PERSA_RN': { celda: 'E101', campo: 'RN', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_1m-6m': { celda: 'G101', campo: '1m-6m', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_7m-11m': { celda: 'I101', campo: '7m-11m', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_1a-2a': { celda: 'K101', campo: '1a-2a', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_3a-5a': { celda: 'M101', campo: '3a-5a', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_6a-11a': { celda: 'O101', campo: '6a-11a', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Adolescente': { celda: 'Q100', campo: 'Adolescente', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Joven': { celda: 'S100', campo: 'Joven', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Adulto': { celda: 'U100', campo: 'Adulto', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_AdultoMay': { celda: 'W100', campo: 'AdultoMay', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Adolesc_Gest': { celda: 'Y100', campo: 'Adolesc_Gest', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Joven_Gest': { celda: 'AA100', campo: 'Joven_Gest', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },
    'PERSA_Adulta_Gest': { celda: 'AC100', campo: 'Adulta_Gest', seccion: 'Persona sana para salud Bucal (Población General)', tabla: 'PG2_PERS_SANA' },


    // SECION 47: Persona sana para salud Bucal (niño)

    'PERSA_RN_N': { celda: 'E105', campo: '0-5m', seccion: 'Persona sana para salud Bucal (niño)', tabla: 'PG2_PERS_SANA_N' },
    'PERSA_1m-6m_N': { celda: 'G105', campo: '6m-<6a', seccion: 'Persona sana para salud Bucal (niño)', tabla: 'PG2_PERS_SANA_N' },
    'PERSA_7m-11m_N': { celda: 'I105', campo: '6a-11a', seccion: 'Persona sana para salud Bucal (niño)', tabla: 'PG2_PERS_SANA_N' },

    // SECION 48: Evaluación Oral Completa (Población General)

    'PERSA_Total_O': { celda: 'E110', campo: 'Total', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_0-6m_O': { celda: 'G110', campo: '0-6m', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_7m-11m_O': { celda: 'I110', campo: '7m-11m', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_1a-2a_O': { celda: 'K110', campo: '1a-2a', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_3a-5a_O': { celda: 'M110', campo: '3a-5a', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_6a-11a_O': { celda: 'O110', campo: '6a-11a', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Adolescente_O': { celda: 'Q109', campo: 'Adolescente', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Joven_O': { celda: 'S109', campo: 'Joven', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Adulto_O': { celda: 'U109', campo: 'Adulto', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_AdultoMay_O': { celda: 'W109', campo: 'AdultoMay', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Adolesc_Gest_O': { celda: 'Y109', campo: 'Adolesc_Gest', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Joven_Gest_O': { celda: 'AA109', campo: 'Joven_Gest', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },
    'PERSA_Adulta_Gest_O': { celda: 'AC109', campo: 'Adulta_Gest', seccion: 'Evaluación Oral Completa (Población General)', tabla: 'PG2_EVA_ORAL' },


    // SECION 49: Evaluación Oral Completa (niño)

    'PERSA_6m-<6a_O_N': { celda: 'E114', campo: '6m-<6a', seccion: 'Evaluación Oral Completa (niño)', tabla: 'PG2_EVA_ORAL_N' },
    'PERSA_6a-11a_O_N': { celda: 'G114', campo: '6a-11a', seccion: 'Evaluación Oral Completa (niño)', tabla: 'PG2_EVA_ORAL_N' },

    // SESION 50: Impresión primaria

    'PROTES_N_PS_Nñ': { celda: 'E119', campo: 'N_PS_Nñ', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PI_Nñ': { celda: 'G119', campo: 'N_PI_Nñ', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PS_Adls': { celda: 'I119', campo: 'N_PS_Adls', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PI_Adls': { celda: 'K119', campo: 'N_PI_Adls', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },

    'PROTES_N_PS_Jvn': { celda: 'M119', campo: 'N_PS_Jvn', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PI_Jvn': { celda: 'O119', campo: 'N_PI_Jvn', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PS_Adlt': { celda: 'Q119', campo: 'N_PS_Adlt', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PI_Adlt': { celda: 'S119', campo: 'N_PI_Adlt', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },

    'PROTES_N_PS_AdltM': { celda: 'U119', campo: 'N_PS_AdltM', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },
    'PROTES_N_PI_AdltM': { celda: 'W119', campo: 'N_PI_AdltM', seccion: 'Impresión primaria', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión primaria' },


    // SESION 51: Impresión definitiva

    'PROTES_N_PS_Nñ_2': { celda: 'E120', campo: 'N_PS_Nñ', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PI_Nñ_2': { celda: 'G120', campo: 'N_PI_Nñ', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PS_Adls_2': { celda: 'I120', campo: 'N_PS_Adls', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PI_Adls_2': { celda: 'K120', campo: 'N_PI_Adls', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },

    'PROTES_N_PS_Jvn_2': { celda: 'M120', campo: 'N_PS_Jvn', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PI_Jvn_2': { celda: 'O120', campo: 'N_PI_Jvn', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PS_Adlt_2': { celda: 'Q120', campo: 'N_PS_Adlt', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PI_Adlt_2': { celda: 'S120', campo: 'N_PI_Adlt', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },

    'PROTES_N_PS_AdltM_2': { celda: 'U120', campo: 'N_PS_AdltM', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },
    'PROTES_N_PI_AdltM_2': { celda: 'W120', campo: 'N_PI_AdltM', seccion: 'Impresión definitiva', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Impresión definitiva' },


    // SESION 52: Registro intermaxilar

    'PROTES_N_PS_Nñ_3': { celda: 'E121', campo: 'N_PS_Nñ', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PI_Nñ_3': { celda: 'G121', campo: 'N_PI_Nñ', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PS_Adls_3': { celda: 'I121', campo: 'N_PS_Adls', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PI_Adls_3': { celda: 'K121', campo: 'N_PI_Adls', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },

    'PROTES_N_PS_Jvn_3': { celda: 'M121', campo: 'N_PS_Jvn', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PI_Jvn_3': { celda: 'O121', campo: 'N_PI_Jvn', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PS_Adlt_3': { celda: 'Q121', campo: 'N_PS_Adlt', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PI_Adlt_3': { celda: 'S121', campo: 'N_PI_Adlt', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },

    'PROTES_N_PS_AdltM_3': { celda: 'U121', campo: 'N_PS_AdltM', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },
    'PROTES_N_PI_AdltM_3': { celda: 'W121', campo: 'N_PI_AdltM', seccion: 'Registro intermaxilar', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Registro intermaxilar' },


    // SESION 53: Prueba de enfilado

    'PROTES_N_PS_Nñ_4': { celda: 'E122', campo: 'N_PS_Nñ', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PI_Nñ_4': { celda: 'G122', campo: 'N_PI_Nñ', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PS_Adls_4': { celda: 'I122', campo: 'N_PS_Adls', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PI_Adls_4': { celda: 'K122', campo: 'N_PI_Adls', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },

    'PROTES_N_PS_Jvn_4': { celda: 'M122', campo: 'N_PS_Jvn', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PI_Jvn_4': { celda: 'O122', campo: 'N_PI_Jvn', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PS_Adlt_4': { celda: 'Q122', campo: 'N_PS_Adlt', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PI_Adlt_4': { celda: 'S122', campo: 'N_PI_Adlt', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },

    'PROTES_N_PS_AdltM_4': { celda: 'U122', campo: 'N_PS_AdltM', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },
    'PROTES_N_PI_AdltM_4': { celda: 'W122', campo: 'N_PI_AdltM', seccion: 'Prueba de enfilado', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Prueba de enfilado' },

    // SESION 54: Instalación

    'PROTES_N_PS_Nñ_5': { celda: 'E123', campo: 'N_PS_Nñ', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PI_Nñ_5': { celda: 'G123', campo: 'N_PI_Nñ', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PS_Adls_5': { celda: 'I123', campo: 'N_PS_Adls', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PI_Adls_5': { celda: 'K123', campo: 'N_PI_Adls', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },

    'PROTES_N_PS_Jvn_5': { celda: 'M123', campo: 'N_PS_Jvn', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PI_Jvn_5': { celda: 'O123', campo: 'N_PI_Jvn', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PS_Adlt_5': { celda: 'Q123', campo: 'N_PS_Adlt', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PI_Adlt_5': { celda: 'S123', campo: 'N_PI_Adlt', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },

    'PROTES_N_PS_AdltM_5': { celda: 'U123', campo: 'N_PS_AdltM', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },
    'PROTES_N_PI_AdltM_5': { celda: 'W123', campo: 'N_PI_AdltM', seccion: 'Instalación', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Instalación' },


    // SESION 54: Primer control

    'PROTES_N_PS_Nñ_6': { celda: 'E124', campo: 'N_PS_Nñ', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PI_Nñ_6': { celda: 'G124', campo: 'N_PI_Nñ', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PS_Adls_6': { celda: 'I124', campo: 'N_PS_Adls', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PI_Adls_6': { celda: 'K124', campo: 'N_PI_Adls', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },

    'PROTES_N_PS_Jvn_6': { celda: 'M124', campo: 'N_PS_Jvn', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PI_Jvn_6': { celda: 'O124', campo: 'N_PI_Jvn', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PS_Adlt_6': { celda: 'Q124', campo: 'N_PS_Adlt', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PI_Adlt_6': { celda: 'S124', campo: 'N_PI_Adlt', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },

    'PROTES_N_PS_AdltM_6': { celda: 'U124', campo: 'N_PS_AdltM', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },
    'PROTES_N_PI_AdltM_6': { celda: 'W124', campo: 'N_PI_AdltM', seccion: 'Primer control', tabla: 'PG2_PROTESIS_DENT', filtro_protesis: 'Primer control' },

    // ============================================
    // SECCIÓN 55: ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos
    // ============================================
    'ATENC_Adolescente_G1': { celda: 'E129', campo: 'Adolescente', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos' },
    'ATENC_Joven_G1': { celda: 'G129', campo: 'Joven', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos' },
    'ATENC_Adulto_G1': { celda: 'I129', campo: 'Adulto', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos' },
    'ATENC_Adulto_Mayor_G_G1': { celda: 'K129', campo: 'Adulto_Mayor_G', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Primera entrega de procedimientos' },

    // ============================================
    // SECCIÓN 56: ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental
    // ============================================
    'ATENC_Adolescente_G2': { celda: 'E133', campo: 'Adolescente', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental' },
    'ATENC_Joven_G2': { celda: 'G133', campo: 'Joven', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental' },
    'ATENC_Adulto_G2': { celda: 'I133', campo: 'Adulto', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental' },
    'ATENC_Adulto_Mayor_G_G2': { celda: 'K133', campo: 'Adulto_Mayor_G', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002) : Entrega de raspaje dental' },

    // ============================================
    // SECCIÓN 57: ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG
    // ============================================
    'ATENC_Adolescente_G3': { celda: 'E137', campo: 'Adolescente', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG' },
    'ATENC_Joven_G3': { celda: 'G137', campo: 'Joven', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG' },
    'ATENC_Adulto_G3': { celda: 'I137', campo: 'Adulto', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG' },
    'ATENC_Adulto_Mayor_G_G3': { celda: 'K137', campo: 'Adulto_Mayor_G', seccion: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG', tabla: 'PG2_ATENC_ODONT_GST', filtro_actividad: 'ATENCIÓN ODONTOLÓGICA A LA GESTANTE (PP MN 002): Entrega completa de procedimientos (Paquete) - FIG' },

    // ============================================
    // SECCIÓN 58: Actividades de Promoción de la Salud por Curso de Vida
    // ============================================
    'ATENC_Niño_SAVI': { celda: 'E142', campo: 'Niño', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },
    'ATENC_Adolescente_SAVI': { celda: 'G142', campo: 'Adolescente', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },
    'ATENC_Joven_SAVI': { celda: 'I142', campo: 'Joven', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },
    'ATENC_Adulto_SAVI': { celda: 'K142', campo: 'Adulto', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },
    'ATENC_Adulto_Mayor_SAVI': { celda: 'M142', campo: 'Adulto_Mayor', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },
    'ATENC_Gestante_SAVI': { celda: 'O142', campo: 'Gestante', seccion: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Actividades de Promoción de la Salud por Curso de Vida :Sesión Educativa y demostrativa. Manual de Promocion de la salud vigente' },

    // ============================================
    // SECCIÓN 59: Registros en extramuro: sesiones educativas y demostrativas
    // ============================================
    'ATENC_Niño_EDUCA': { celda: 'E146', campo: 'Niño', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ATENC_Adolescente_EDUCA': { celda: 'G146', campo: 'Adolescente', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ATENC_Joven_EDUCA': { celda: 'I146', campo: 'Joven', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ATENC_Adulto_EDUCA': { celda: 'K146', campo: 'Adulto', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ATENC_Adulto_Mayor_EDUCA': { celda: 'M146', campo: 'Adulto_Mayor', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },
    'ATENC_Gestante_EDUCA': { celda: 'O146', campo: 'Gestante', seccion: 'Registros en extramuro: sesiones educativas y demostrativas', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: sesiones educativas y demostrativas' },

    // ============================================
    // SECCIÓN 60: Registros en extramuro: procedimientos
    // ============================================
    'ATENC_Niño_EXPRO': { celda: 'E150', campo: 'Niño', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },
    'ATENC_Adolescente_EXPRO': { celda: 'G150', campo: 'Adolescente', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },
    'ATENC_Joven_EXPRO': { celda: 'I150', campo: 'Joven', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },
    'ATENC_Adulto_EXPRO': { celda: 'K150', campo: 'Adulto', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },
    'ATENC_Adulto_Mayor_EXPRO': { celda: 'M150', campo: 'Adulto_Mayor', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },
    'ATENC_Gestante_EXPRO': { celda: 'O150', campo: 'Gestante', seccion: 'Registros en extramuro: procedimientos', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros en extramuro: procedimientos' },

    // ============================================
    // SECCIÓN 61: Registros propios de Centro Quirúrgico - sala de operaciones (SO)
    // ============================================
    'ATENC_Niño_REQUI': { celda: 'E154', campo: 'Niño', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },
    'ATENC_Adolescente_REQUI': { celda: 'G154', campo: 'Adolescente', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },
    'ATENC_Joven_REQUI': { celda: 'I154', campo: 'Joven', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },
    'ATENC_Adulto_REQUI': { celda: 'K154', campo: 'Adulto', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },
    'ATENC_Adulto_Mayor_REQUI': { celda: 'M154', campo: 'Adulto_Mayor', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },
    'ATENC_Gestante_REQUI': { celda: 'O154', campo: 'Gestante', seccion: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros propios de Centro Quirúrgico - sala de operaciones (SO)' },

    // ============================================
    // SECCIÓN 62: Registros de personas con discapacidad (DIS)
    // ============================================
    'ATENC_Niño_REPEDIS': { celda: 'E158', campo: 'Niño', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },
    'ATENC_Adolescente_REPEDIS': { celda: 'G158', campo: 'Adolescente', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },
    'ATENC_Joven_REPEDIS': { celda: 'I158', campo: 'Joven', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },
    'ATENC_Adulto_REPEDIS': { celda: 'K158', campo: 'Adulto', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },
    'ATENC_Adulto_Mayor_REPEDIS': { celda: 'M158', campo: 'Adulto_Mayor', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },
    'ATENC_Gestante_REPEDIS': { celda: 'O158', campo: 'Gestante', seccion: 'Registros de personas con discapacidad (DIS)', tabla: 'PG2_SESION_PROCEDIMIENTO', filtro_actividad: 'Registros de personas con discapacidad (DIS)' },

    // ============================================
    // SECCIÓN 63: ATENDIDOS
    // ============================================
    'ATENDI_Total_': { celda: 'E161', campo: 'Total', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Niño_REPEDIS': { celda: 'G161', campo: 'Niño', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Adolescente_REPEDIS': { celda: 'I161', campo: 'Adolescente', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Joven_REPEDIS': { celda: 'K161', campo: 'Joven', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Adulto_REPEDIS': { celda: 'M161', campo: 'Adulto', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Adulto_Mayor': { celda: 'O161', campo: 'Adulto_Mayor', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },
    'ATENDI_Gestante': { celda: 'Q161', campo: 'Gestante', seccion: 'ATENDIDOS', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENDIDOS' },

    // ============================================
    // SECCIÓN 64: ATENCIONES
    // ============================================
    'ATENCI_Total_': { celda: 'E162', campo: 'Total', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Niño_REPEDIS': { celda: 'G162', campo: 'Niño', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Adolescente_REPEDIS': { celda: 'I162', campo: 'Adolescente', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Joven_REPEDIS': { celda: 'K162', campo: 'Joven', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Adulto_REPEDIS': { celda: 'M162', campo: 'Adulto', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Adulto_Mayor': { celda: 'O162', campo: 'Adulto_Mayor', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },
    'ATENCI_Gestante': { celda: 'Q162', campo: 'Gestante', seccion: 'ATENCIONES', tabla: 'PG2_ATENC_ATEND', filtro_actividad: 'ATENCIONES' },

    // ============================================
    // SECCIÓN 65: Teleorientación Síncrona - Salud Bucal
    // ============================================
    'TELE1_Total': { celda: 'E167', campo: 'Total', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_0-6m': { celda: 'G167', campo: '0-6m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_7m-11m': { celda: 'I167', campo: '7m-11m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_1a-2a': { celda: 'K167', campo: '1a-2a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_3a-5a': { celda: 'M167', campo: '3a-5a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_6a-11a': { celda: 'O167', campo: '6a-11a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_Adolescente': { celda: 'Q167', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_Joven': { celda: 'S167', campo: 'Joven', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_Adulto': { celda: 'U167', campo: 'Adulto', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },
    'TELE1_Gestante': { celda: 'W167', campo: 'Gestante', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal' },

    // ============================================
    // SECCIÓN 66: Teleorientación Asíncrona - Salud Bucal
    // ============================================
    'TELE2_Total': { celda: 'E168', campo: 'Total', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_0-6m': { celda: 'G168', campo: '0-6m', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_7m-11m': { celda: 'I168', campo: '7m-11m', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_1a-2a': { celda: 'K168', campo: '1a-2a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_3a-5a': { celda: 'M168', campo: '3a-5a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_6a-11a': { celda: 'O168', campo: '6a-11a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_Adolescente': { celda: 'Q168', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_Joven': { celda: 'S168', campo: 'Joven', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_Adulto': { celda: 'U168', campo: 'Adulto', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },
    'TELE2_Gestante': { celda: 'W168', campo: 'Gestante', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal' },

    // ============================================
    // SECCIÓN 67: Teleorientación Síncrona - Salud Bucal - Atención Preventiva
    // ============================================
    'TELE3_Total': { celda: 'E169', campo: 'Total', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_0-6m': { celda: 'G169', campo: '0-6m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_7m-11m': { celda: 'I169', campo: '7m-11m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_1a-2a': { celda: 'K169', campo: '1a-2a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_3a-5a': { celda: 'M169', campo: '3a-5a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_6a-11a': { celda: 'O169', campo: '6a-11a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_Adolescente': { celda: 'Q169', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_Joven': { celda: 'S169', campo: 'Joven', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_Adulto': { celda: 'U169', campo: 'Adulto', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },
    'TELE3_Gestante': { celda: 'W169', campo: 'Gestante', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal - Atención Preventiva' },

    // ============================================
    // SECCIÓN 68: Teleorientación Asíncrona - Salud Bucal - Atención Preventiva
    // ============================================
    'TELE4_Total': { celda: 'E170', campo: 'Total', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_0-6m': { celda: 'G170', campo: '0-6m', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_7m-11m': { celda: 'I170', campo: '7m-11m', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_1a-2a': { celda: 'K170', campo: '1a-2a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_3a-5a': { celda: 'M170', campo: '3a-5a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_6a-11a': { celda: 'O170', campo: '6a-11a', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_Adolescente': { celda: 'Q170', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_Joven': { celda: 'S170', campo: 'Joven', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_Adulto': { celda: 'U170', campo: 'Adulto', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },
    'TELE4_Gestante': { celda: 'W170', campo: 'Gestante', seccion: 'TELEORIENTACIÓN ASÍNCRONA - SALUD BUCAL - ATENCIÓN PREVENTIVA', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Asíncrona - Salud Bucal - Atención Preventiva' },

    // ============================================
    // SECCIÓN 69: Teleorientación Síncrona - Salud Bucal (HO)
    // ============================================
    'TELE5_Total': { celda: 'E171', campo: 'Total', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_0-6m': { celda: 'G171', campo: '0-6m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_7m-11m': { celda: 'I171', campo: '7m-11m', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_1a-2a': { celda: 'K171', campo: '1a-2a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_3a-5a': { celda: 'M171', campo: '3a-5a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_6a-11a': { celda: 'O171', campo: '6a-11a', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_Adolescente': { celda: 'Q171', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_Joven': { celda: 'S171', campo: 'Joven', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_Adulto': { celda: 'U171', campo: 'Adulto', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },
    'TELE5_Gestante': { celda: 'W171', campo: 'Gestante', seccion: 'TELEORIENTACIÓN SÍNCRONA - SALUD BUCAL (HO)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación Síncrona - Salud Bucal (HO)' },

    // ============================================
    // SECCIÓN 70: Teleorientación y Asesoría Nutricional para el control de enfermedades dentales
    // ============================================
    'TELE6_Total': { celda: 'E172', campo: 'Total', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_0-6m': { celda: 'G172', campo: '0-6m', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_7m-11m': { celda: 'I172', campo: '7m-11m', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_1a-2a': { celda: 'K172', campo: '1a-2a', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_3a-5a': { celda: 'M172', campo: '3a-5a', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_6a-11a': { celda: 'O172', campo: '6a-11a', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_Adolescente': { celda: 'Q172', campo: 'Adolescente', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_Joven': { celda: 'S172', campo: 'Joven', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_Adulto': { celda: 'U172', campo: 'Adulto', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },
    'TELE6_Gestante': { celda: 'W172', campo: 'Gestante', seccion: 'TELEORIENTACIÓN Y ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleorientación y Asesoría Nutricional para el control de enfermedades dentales' },

    // ============================================
    // SECCIÓN 71: Telemonitoreo - Salud Bucal
    // ============================================
    'TELE7_Total': { celda: 'E173', campo: 'Total', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_0-6m': { celda: 'G173', campo: '0-6m', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_7m-11m': { celda: 'I173', campo: '7m-11m', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_1a-2a': { celda: 'K173', campo: '1a-2a', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_3a-5a': { celda: 'M173', campo: '3a-5a', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_6a-11a': { celda: 'O173', campo: '6a-11a', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_Adolescente': { celda: 'Q173', campo: 'Adolescente', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_Joven': { celda: 'S173', campo: 'Joven', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_Adulto': { celda: 'U173', campo: 'Adulto', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },
    'TELE7_Gestante': { celda: 'W173', campo: 'Gestante', seccion: 'TELEMONITOREO - SALUD BUCAL', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Telemonitoreo - Salud Bucal' },

    // ============================================
    // SECCIÓN 73: Teleinterconsulta Síncrona (teleinterconsultante)
    // ============================================
    'TELE9_Total': { celda: 'E174', campo: 'Total', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_0-6m': { celda: 'G174', campo: '0-6m', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_7m-11m': { celda: 'I174', campo: '7m-11m', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_1a-2a': { celda: 'K174', campo: '1a-2a', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_3a-5a': { celda: 'M174', campo: '3a-5a', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_6a-11a': { celda: 'O174', campo: '6a-11a', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_Adolescente': { celda: 'Q174', campo: 'Adolescente', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_Joven': { celda: 'S174', campo: 'Joven', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_Adulto': { celda: 'U174', campo: 'Adulto', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },
    'TELE9_Gestante': { celda: 'W174', campo: 'Gestante', seccion: 'TELEINTERCONSULTA SÍNCRONA (teleinterconsultante)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultante)' },

    // ============================================
    // SECCIÓN 74: Teleinterconsulta Síncrona (teleinterconsultor)
    // ============================================
    'TELE10_Total': { celda: 'E175', campo: 'Total', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_0-6m': { celda: 'G175', campo: '0-6m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_7m-11m': { celda: 'I175', campo: '7m-11m', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_1a-2a': { celda: 'K175', campo: '1a-2a', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_3a-5a': { celda: 'M175', campo: '3a-5a', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_6a-11a': { celda: 'O175', campo: '6a-11a', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_Adolescente': { celda: 'Q175', campo: 'Adolescente', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_Joven': { celda: 'S175', campo: 'Joven', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_Adulto': { celda: 'U175', campo: 'Adulto', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },
    'TELE10_Gestante': { celda: 'W175', campo: 'Gestante', seccion: 'Teleinterconsulta Síncrona (teleinterconsultor)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Síncrona (teleinterconsultor)' },

    // ============================================
    // SECCIÓN 75: Teleinterconsulta Asíncrona (teleinterconsultante)
    // ============================================
    'TELE11_Total': { celda: 'E176', campo: 'Total', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_0-6m': { celda: 'G176', campo: '0-6m', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_7m-11m': { celda: 'I176', campo: '7m-11m', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_1a-2a': { celda: 'K176', campo: '1a-2a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_3a-5a': { celda: 'M176', campo: '3a-5a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_6a-11a': { celda: 'O176', campo: '6a-11a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_Adolescente': { celda: 'Q176', campo: 'Adolescente', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_Joven': { celda: 'S176', campo: 'Joven', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_Adulto': { celda: 'U176', campo: 'Adulto', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },
    'TELE11_Gestante': { celda: 'W176', campo: 'Gestante', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTANTE)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultante)' },

    // ============================================
    // SECCIÓN 76: Teleinterconsulta Asíncrona (teleinterconsultor)
    // ============================================
    'TELE12_Total': { celda: 'E177', campo: 'Total', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_0-6m': { celda: 'G177', campo: '0-6m', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_7m-11m': { celda: 'I177', campo: '7m-11m', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_1a-2a': { celda: 'K177', campo: '1a-2a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_3a-5a': { celda: 'M177', campo: '3a-5a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_6a-11a': { celda: 'O177', campo: '6a-11a', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_Adolescente': { celda: 'Q177', campo: 'Adolescente', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_Joven': { celda: 'S177', campo: 'Joven', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_Adulto': { celda: 'U177', campo: 'Adulto', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },
    'TELE12_Gestante': { celda: 'W177', campo: 'Gestante', seccion: 'TELEINTERCONSULTA ASÍNCRONA (TELEINTERCONSULTOR)', tabla: 'PG2_ATENC_TELESALUD', filtro_actividad: 'Teleinterconsulta Asíncrona (teleinterconsultor)' },

    // ==================== PA_AT_PREVENTIVA ====================
    // ASESORÍA NUTRICIONAL - NO GESTANTE
    'PAPRE_NOG_0-28d': { celda: 'I187', campo: '0-28d', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_29d-5m': { celda: 'K187', campo: '29d-5m', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_6m-11m': { celda: 'M187', campo: '6m-11m', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_1año': { celda: 'O187', campo: '1año', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_2años': { celda: 'Q187', campo: '2años', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_3a-5a': { celda: 'S187', campo: '3a-5a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_6a-11a': { celda: 'U187', campo: '6a-11a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_12a-17a': { celda: 'W187', campo: '12a-17a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_18a-29a': { celda: 'Y187', campo: '18a-29a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_30a-59a': { celda: 'AA187', campo: '30a-59a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_60a_mas': { celda: 'AC187', campo: '60a_mas', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PAPRE_NOG_TOTAL_C_N': { celda: 'AE187', campo: 'TOTAL_C_N', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    // ASESORÍA NUTRICIONAL - GESTANTE
    'PAPRE_GES_0-28d': { celda: 'I188', campo: '0-28d', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_29d-5m': { celda: 'K188', campo: '29d-5m', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_6m-11m': { celda: 'M188', campo: '6m-11m', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_1año': { celda: 'O188', campo: '1año', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_2años': { celda: 'Q188', campo: '2años', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_3a-5a': { celda: 'S188', campo: '3a-5a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_6a-11a': { celda: 'U188', campo: '6a-11a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_12a-17a': { celda: 'W188', campo: '12a-17a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_18a-29a': { celda: 'Y188', campo: '18a-29a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_30a-59a': { celda: 'AA188', campo: '30a-59a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_60a_mas': { celda: 'AC188', campo: '60a_mas', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PAPRE_GES_TOTAL_C_N': { celda: 'AE188', campo: 'TOTAL_C_N', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    // EXAMEN ESTOMATOLÓGICO - NO GESTANTE
    'PAEXA_NOG_0-28d': { celda: 'I189', campo: '0-28d', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_29d-5m': { celda: 'K189', campo: '29d-5m', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_6m-11m': { celda: 'M189', campo: '6m-11m', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_1año': { celda: 'O189', campo: '1año', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_2años': { celda: 'Q189', campo: '2años', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_3a-5a': { celda: 'S189', campo: '3a-5a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_6a-11a': { celda: 'U189', campo: '6a-11a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_12a-17a': { celda: 'W189', campo: '12a-17a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_18a-29a': { celda: 'Y189', campo: '18a-29a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_30a-59a': { celda: 'AA189', campo: '30a-59a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_60a_mas': { celda: 'AC189', campo: '60a_mas', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PAEXA_NOG_TOTAL_C_N': { celda: 'AE189', campo: 'TOTAL_C_N', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    // EXAMEN ESTOMATOLÓGICO - GESTANTE
    'PAEXA_GES_0-28d': { celda: 'I190', campo: '0-28d', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_29d-5m': { celda: 'K190', campo: '29d-5m', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_6m-11m': { celda: 'M190', campo: '6m-11m', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_1año': { celda: 'O190', campo: '1año', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_2años': { celda: 'Q190', campo: '2años', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_3a-5a': { celda: 'S190', campo: '3a-5a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_6a-11a': { celda: 'U190', campo: '6a-11a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_12a-17a': { celda: 'W190', campo: '12a-17a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_18a-29a': { celda: 'Y190', campo: '18a-29a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_30a-59a': { celda: 'AA190', campo: '30a-59a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_60a_mas': { celda: 'AC190', campo: '60a_mas', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PAEXA_GES_TOTAL_C_N': { celda: 'AE190', campo: 'TOTAL_C_N', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    // INSTRUCCIÓN DE HIGIENE ORAL - NO GESTANTE
    'PAINS_NOG_0-28d': { celda: 'I191', campo: '0-28d', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_29d-5m': { celda: 'K191', campo: '29d-5m', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_6m-11m': { celda: 'M191', campo: '6m-11m', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_1año': { celda: 'O191', campo: '1año', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_2años': { celda: 'Q191', campo: '2años', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_3a-5a': { celda: 'S191', campo: '3a-5a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_6a-11a': { celda: 'U191', campo: '6a-11a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_12a-17a': { celda: 'W191', campo: '12a-17a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_18a-29a': { celda: 'Y191', campo: '18a-29a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_30a-59a': { celda: 'AA191', campo: '30a-59a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_60a_mas': { celda: 'AC191', campo: '60a_mas', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PAINS_NOG_TOTAL_C_N': { celda: 'AE191', campo: 'TOTAL_C_N', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    // INSTRUCCIÓN DE HIGIENE ORAL - GESTANTE
    'PAINS_GES_0-28d': { celda: 'I192', campo: '0-28d', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_29d-5m': { celda: 'K192', campo: '29d-5m', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_6m-11m': { celda: 'M192', campo: '6m-11m', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_1año': { celda: 'O192', campo: '1año', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_2años': { celda: 'Q192', campo: '2años', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_3a-5a': { celda: 'S192', campo: '3a-5a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_6a-11a': { celda: 'U192', campo: '6a-11a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_12a-17a': { celda: 'W192', campo: '12a-17a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_18a-29a': { celda: 'Y192', campo: '18a-29a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_30a-59a': { celda: 'AA192', campo: '30a-59a', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_60a_mas': { celda: 'AC192', campo: '60a_mas', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PAINS_GES_TOTAL_C_N': { celda: 'AE192', campo: 'TOTAL_C_N', seccion: 'INSTRUCCIÓN DE HIGIENE ORAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE SELLANTES - NO GESTANTE
    'PASELL_NOG_0-28d': { celda: 'I193', campo: '0-28d', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_29d-5m': { celda: 'K193', campo: '29d-5m', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_6m-11m': { celda: 'M193', campo: '6m-11m', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_1año': { celda: 'O193', campo: '1año', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_2años': { celda: 'Q193', campo: '2años', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_3a-5a': { celda: 'S193', campo: '3a-5a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_6a-11a': { celda: 'U193', campo: '6a-11a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_12a-17a': { celda: 'W193', campo: '12a-17a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_18a-29a': { celda: 'Y193', campo: '18a-29a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_30a-59a': { celda: 'AA193', campo: '30a-59a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_60a_mas': { celda: 'AC193', campo: '60a_mas', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PASELL_NOG_TOTAL_C_N': { celda: 'AE193', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE SELLANTES - GESTANTE
    'PASELL_GES_0-28d': { celda: 'I194', campo: '0-28d', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_29d-5m': { celda: 'K194', campo: '29d-5m', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_6m-11m': { celda: 'M194', campo: '6m-11m', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_1año': { celda: 'O194', campo: '1año', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_2años': { celda: 'Q194', campo: '2años', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_3a-5a': { celda: 'S194', campo: '3a-5a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_6a-11a': { celda: 'U194', campo: '6a-11a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_12a-17a': { celda: 'W194', campo: '12a-17a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_18a-29a': { celda: 'Y194', campo: '18a-29a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_30a-59a': { celda: 'AA194', campo: '30a-59a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_60a_mas': { celda: 'AC194', campo: '60a_mas', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PASELL_GES_TOTAL_C_N': { celda: 'AE194', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE FLÚOR BARNIZ - NO GESTANTE
    'PABARNIZ_NOG_0-28d': { celda: 'I195', campo: '0-28d', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_29d-5m': { celda: 'K195', campo: '29d-5m', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_6m-11m': { celda: 'M195', campo: '6m-11m', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_1año': { celda: 'O195', campo: '1año', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_2años': { celda: 'Q195', campo: '2años', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_3a-5a': { celda: 'S195', campo: '3a-5a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_6a-11a': { celda: 'U195', campo: '6a-11a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_12a-17a': { celda: 'W195', campo: '12a-17a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_18a-29a': { celda: 'Y195', campo: '18a-29a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_30a-59a': { celda: 'AA195', campo: '30a-59a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_60a_mas': { celda: 'AC195', campo: '60a_mas', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PABARNIZ_NOG_TOTAL_C_N': { celda: 'AE195', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE FLÚOR BARNIZ - GESTANTE
    'PABARNIZ_GES_0-28d': { celda: 'I196', campo: '0-28d', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_29d-5m': { celda: 'K196', campo: '29d-5m', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_6m-11m': { celda: 'M196', campo: '6m-11m', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_1año': { celda: 'O196', campo: '1año', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_2años': { celda: 'Q196', campo: '2años', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_3a-5a': { celda: 'S196', campo: '3a-5a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_6a-11a': { celda: 'U196', campo: '6a-11a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_12a-17a': { celda: 'W196', campo: '12a-17a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_18a-29a': { celda: 'Y196', campo: '18a-29a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_30a-59a': { celda: 'AA196', campo: '30a-59a', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_60a_mas': { celda: 'AC196', campo: '60a_mas', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PABARNIZ_GES_TOTAL_C_N': { celda: 'AE196', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE FLÚOR BARNIZ (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE FLÚOR GEL - NO GESTANTE
    'PAGEL_NOG_0-28d': { celda: 'I197', campo: '0-28d', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_29d-5m': { celda: 'K197', campo: '29d-5m', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_6m-11m': { celda: 'M197', campo: '6m-11m', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_1año': { celda: 'O197', campo: '1año', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_2años': { celda: 'Q197', campo: '2años', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_3a-5a': { celda: 'S197', campo: '3a-5a', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_6a-11a': { celda: 'U197', campo: '6a-11a', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_12a-17a': { celda: 'W197', campo: '12a-17a', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_18a-29a': { celda: 'Y197', campo: '18a-29a', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_30a-59a': { celda: 'AA197', campo: '30a-59a', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_60a_mas': { celda: 'AC197', campo: '60a_mas', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PAGEL_NOG_TOTAL_C_N': { celda: 'AE197', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE FLÚOR GEL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE FLÚOR GEL - GESTANTE
    'PAGEL_GES_0-28d': { celda: 'I198', campo: '0-28d', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_29d-5m': { celda: 'K198', campo: '29d-5m', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_6m-11m': { celda: 'M198', campo: '6m-11m', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_1año': { celda: 'O198', campo: '1año', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_2años': { celda: 'Q198', campo: '2años', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_3a-5a': { celda: 'S198', campo: '3a-5a', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_6a-11a': { celda: 'U198', campo: '6a-11a', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_12a-17a': { celda: 'W198', campo: '12a-17a', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_18a-29a': { celda: 'Y198', campo: '18a-29a', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_30a-59a': { celda: 'AA198', campo: '30a-59a', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_60a_mas': { celda: 'AC198', campo: '60a_mas', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PAGEL_GES_TOTAL_C_N': { celda: 'AE198', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE FLÚOR GEL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    // PROFILAXIS DENTAL - NO GESTANTE
    'PAPROF_NOG_0-28d': { celda: 'I199', campo: '0-28d', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_29d-5m': { celda: 'K199', campo: '29d-5m', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_6m-11m': { celda: 'M199', campo: '6m-11m', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_1año': { celda: 'O199', campo: '1año', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_2años': { celda: 'Q199', campo: '2años', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_3a-5a': { celda: 'S199', campo: '3a-5a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_6a-11a': { celda: 'U199', campo: '6a-11a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_12a-17a': { celda: 'W199', campo: '12a-17a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_18a-29a': { celda: 'Y199', campo: '18a-29a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_30a-59a': { celda: 'AA199', campo: '30a-59a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_60a_mas': { celda: 'AC199', campo: '60a_mas', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPROF_NOG_TOTAL_C_N': { celda: 'AE199', campo: 'TOTAL_C_N', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    // PROFILAXIS DENTAL - GESTANTE
    'PAPROF_GES_0-28d': { celda: 'I200', campo: '0-28d', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_29d-5m': { celda: 'K200', campo: '29d-5m', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_6m-11m': { celda: 'M200', campo: '6m-11m', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_1año': { celda: 'O200', campo: '1año', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_2años': { celda: 'Q200', campo: '2años', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_3a-5a': { celda: 'S200', campo: '3a-5a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_6a-11a': { celda: 'U200', campo: '6a-11a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_12a-17a': { celda: 'W200', campo: '12a-17a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_18a-29a': { celda: 'Y200', campo: '18a-29a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_30a-59a': { celda: 'AA200', campo: '30a-59a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_60a_mas': { celda: 'AC200', campo: '60a_mas', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PAPROF_GES_TOTAL_C_N': { celda: 'AE200', campo: 'TOTAL_C_N', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PA_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },

    // ==================== PA_AT_RECUPERATIVA ====================
    // RASPAJE DENTAL - NO GESTANTE
    'PARASP_NOG_0-28d': { celda: 'I208', campo: '0-28d', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_29d-5m': { celda: 'K208', campo: '29d-5m', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_6m-11m': { celda: 'M208', campo: '6m-11m', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_1año': { celda: 'O208', campo: '1año', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_2años': { celda: 'Q208', campo: '2años', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_3a-5a': { celda: 'S208', campo: '3a-5a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_6a-11a': { celda: 'U208', campo: '6a-11a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_12a-17a': { celda: 'W208', campo: '12a-17a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_18a-29a': { celda: 'Y208', campo: '18a-29a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_30a-59a': { celda: 'AA208', campo: '30a-59a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_60a_mas': { celda: 'AC208', campo: '60a_mas', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PARASP_NOG_TOTAL_C_N': { celda: 'AE208', campo: 'TOTAL_C_N', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    // RASPAJE DENTAL - GESTANTE
    'PARASP_GES_0-28d': { celda: 'I209', campo: '0-28d', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_29d-5m': { celda: 'K209', campo: '29d-5m', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_6m-11m': { celda: 'M209', campo: '6m-11m', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_1año': { celda: 'O209', campo: '1año', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_2años': { celda: 'Q209', campo: '2años', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_3a-5a': { celda: 'S209', campo: '3a-5a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_6a-11a': { celda: 'U209', campo: '6a-11a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_12a-17a': { celda: 'W209', campo: '12a-17a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_18a-29a': { celda: 'Y209', campo: '18a-29a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_30a-59a': { celda: 'AA209', campo: '30a-59a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_60a_mas': { celda: 'AC209', campo: '60a_mas', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PARASP_GES_TOTAL_C_N': { celda: 'AE209', campo: 'TOTAL_C_N', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    // DEBRIDACIÓN PROCESOS INFECCIOSOS - NO GESTANTE
    'PADESB_NOG_0-28d': { celda: 'I210', campo: '0-28d', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_29d-5m': { celda: 'K210', campo: '29d-5m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_6m-11m': { celda: 'M210', campo: '6m-11m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_1año': { celda: 'O210', campo: '1año', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_2años': { celda: 'Q210', campo: '2años', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_3a-5a': { celda: 'S210', campo: '3a-5a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_6a-11a': { celda: 'U210', campo: '6a-11a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_12a-17a': { celda: 'W210', campo: '12a-17a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_18a-29a': { celda: 'Y210', campo: '18a-29a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_30a-59a': { celda: 'AA210', campo: '30a-59a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_60a_mas': { celda: 'AC210', campo: '60a_mas', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PADESB_NOG_TOTAL_C_N': { celda: 'AE210', campo: 'TOTAL_C_N', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    // DEBRIDACIÓN PROCESOS INFECCIOSOS - GESTANTE
    'PADESB_GES_0-28d': { celda: 'I211', campo: '0-28d', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_29d-5m': { celda: 'K211', campo: '29d-5m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_6m-11m': { celda: 'M211', campo: '6m-11m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_1año': { celda: 'O211', campo: '1año', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_2años': { celda: 'Q211', campo: '2años', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_3a-5a': { celda: 'S211', campo: '3a-5a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_6a-11a': { celda: 'U211', campo: '6a-11a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_12a-17a': { celda: 'W211', campo: '12a-17a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_18a-29a': { celda: 'Y211', campo: '18a-29a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_30a-59a': { celda: 'AA211', campo: '30a-59a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_60a_mas': { celda: 'AC211', campo: '60a_mas', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PADESB_GES_TOTAL_C_N': { celda: 'AE211', campo: 'TOTAL_C_N', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    // CONSULTA ESTOMATOLÓGICA - NO GESTANTE
    'PACONSUL_NOG_0-28d': { celda: 'I212', campo: '0-28d', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_29d-5m': { celda: 'K212', campo: '29d-5m', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_6m-11m': { celda: 'M212', campo: '6m-11m', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_1año': { celda: 'O212', campo: '1año', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_2años': { celda: 'Q212', campo: '2años', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_3a-5a': { celda: 'S212', campo: '3a-5a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_6a-11a': { celda: 'U212', campo: '6a-11a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_12a-17a': { celda: 'W212', campo: '12a-17a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_18a-29a': { celda: 'Y212', campo: '18a-29a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_30a-59a': { celda: 'AA212', campo: '30a-59a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_60a_mas': { celda: 'AC212', campo: '60a_mas', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PACONSUL_NOG_TOTAL_C_N': { celda: 'AE212', campo: 'TOTAL_C_N', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    // CONSULTA ESTOMATOLÓGICA - GESTANTE
    'PACONSUL_GES_0-28d': { celda: 'I213', campo: '0-28d', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_29d-5m': { celda: 'K213', campo: '29d-5m', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_6m-11m': { celda: 'M213', campo: '6m-11m', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_1año': { celda: 'O213', campo: '1año', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_2años': { celda: 'Q213', campo: '2años', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_3a-5a': { celda: 'S213', campo: '3a-5a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_6a-11a': { celda: 'U213', campo: '6a-11a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_12a-17a': { celda: 'W213', campo: '12a-17a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_18a-29a': { celda: 'Y213', campo: '18a-29a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_30a-59a': { celda: 'AA213', campo: '30a-59a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_60a_mas': { celda: 'AC213', campo: '60a_mas', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PACONSUL_GES_TOTAL_C_N': { celda: 'AE213', campo: 'TOTAL_C_N', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    // EXODONCIA SIMPLE - NO GESTANTE
    'PAEXOD_NOG_0-28d': { celda: 'I214', campo: '0-28d', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_29d-5m': { celda: 'K214', campo: '29d-5m', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_6m-11m': { celda: 'M214', campo: '6m-11m', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_1año': { celda: 'O214', campo: '1año', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_2años': { celda: 'Q214', campo: '2años', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_3a-5a': { celda: 'S214', campo: '3a-5a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_6a-11a': { celda: 'U214', campo: '6a-11a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_12a-17a': { celda: 'W214', campo: '12a-17a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_18a-29a': { celda: 'Y214', campo: '18a-29a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_30a-59a': { celda: 'AA214', campo: '30a-59a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_60a_mas': { celda: 'AC214', campo: '60a_mas', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PAEXOD_NOG_TOTAL_C_N': { celda: 'AE214', campo: 'TOTAL_C_N', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    // EXODONCIA SIMPLE - GESTANTE
    'PAEXOD_GES_0-28d': { celda: 'I215', campo: '0-28d', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_29d-5m': { celda: 'K215', campo: '29d-5m', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_6m-11m': { celda: 'M215', campo: '6m-11m', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_1año': { celda: 'O215', campo: '1año', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_2años': { celda: 'Q215', campo: '2años', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_3a-5a': { celda: 'S215', campo: '3a-5a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_6a-11a': { celda: 'U215', campo: '6a-11a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_12a-17a': { celda: 'W215', campo: '12a-17a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_18a-29a': { celda: 'Y215', campo: '18a-29a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_30a-59a': { celda: 'AA215', campo: '30a-59a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_60a_mas': { celda: 'AC215', campo: '60a_mas', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PAEXOD_GES_TOTAL_C_N': { celda: 'AE215', campo: 'TOTAL_C_N', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    // RESTAURACIONES IONÓMERO VIDRIO - NO GESTANTE
    'PAIONO_NOG_0-28d': { celda: 'I216', campo: '0-28d', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_29d-5m': { celda: 'K216', campo: '29d-5m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_6m-11m': { celda: 'M216', campo: '6m-11m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_1año': { celda: 'O216', campo: '1año', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_2años': { celda: 'Q216', campo: '2años', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_3a-5a': { celda: 'S216', campo: '3a-5a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_6a-11a': { celda: 'U216', campo: '6a-11a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_12a-17a': { celda: 'W216', campo: '12a-17a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_18a-29a': { celda: 'Y216', campo: '18a-29a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_30a-59a': { celda: 'AA216', campo: '30a-59a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_60a_mas': { celda: 'AC216', campo: '60a_mas', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PAIONO_NOG_TOTAL_C_N': { celda: 'AE216', campo: 'TOTAL_C_N', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    // RESTAURACIONES IONÓMERO VIDRIO - GESTANTE
    'PAIONO_GES_0-28d': { celda: 'I217', campo: '0-28d', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_29d-5m': { celda: 'K217', campo: '29d-5m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_6m-11m': { celda: 'M217', campo: '6m-11m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_1año': { celda: 'O217', campo: '1año', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_2años': { celda: 'Q217', campo: '2años', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_3a-5a': { celda: 'S217', campo: '3a-5a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_6a-11a': { celda: 'U217', campo: '6a-11a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_12a-17a': { celda: 'W217', campo: '12a-17a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_18a-29a': { celda: 'Y217', campo: '18a-29a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_30a-59a': { celda: 'AA217', campo: '30a-59a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_60a_mas': { celda: 'AC217', campo: '60a_mas', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PAIONO_GES_TOTAL_C_N': { celda: 'AE217', campo: 'TOTAL_C_N', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    // RESTAURACIÓN CON RESINA - NO GESTANTE
    'PARESIN_NOG_0-28d': { celda: 'I218', campo: '0-28d', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_29d-5m': { celda: 'K218', campo: '29d-5m', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_6m-11m': { celda: 'M218', campo: '6m-11m', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_1año': { celda: 'O218', campo: '1año', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_2años': { celda: 'Q218', campo: '2años', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_3a-5a': { celda: 'S218', campo: '3a-5a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_6a-11a': { celda: 'U218', campo: '6a-11a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_12a-17a': { celda: 'W218', campo: '12a-17a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_18a-29a': { celda: 'Y218', campo: '18a-29a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_30a-59a': { celda: 'AA218', campo: '30a-59a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_60a_mas': { celda: 'AC218', campo: '60a_mas', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PARESIN_NOG_TOTAL_C_N': { celda: 'AE218', campo: 'TOTAL_C_N', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    // RESTAURACIÓN CON RESINA - GESTANTE
    'PARESIN_GES_0-28d': { celda: 'I219', campo: '0-28d', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_29d-5m': { celda: 'K219', campo: '29d-5m', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_6m-11m': { celda: 'M219', campo: '6m-11m', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_1año': { celda: 'O219', campo: '1año', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_2años': { celda: 'Q219', campo: '2años', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_3a-5a': { celda: 'S219', campo: '3a-5a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_6a-11a': { celda: 'U219', campo: '6a-11a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_12a-17a': { celda: 'W219', campo: '12a-17a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_18a-29a': { celda: 'Y219', campo: '18a-29a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_30a-59a': { celda: 'AA219', campo: '30a-59a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_60a_mas': { celda: 'AC219', campo: '60a_mas', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PARESIN_GES_TOTAL_C_N': { celda: 'AE219', campo: 'TOTAL_C_N', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PA_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },

    // ==================== PA_AT_ESPECIALIZADA ====================
    // TERAPIA PULPAR - NO GESTANTE
    'PATERP_NOG_0-28d': { celda: 'I227', campo: '0-28d', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_29d-5m': { celda: 'K227', campo: '29d-5m', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_6m-11m': { celda: 'M227', campo: '6m-11m', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_1año': { celda: 'O227', campo: '1año', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_2años': { celda: 'Q227', campo: '2años', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_3a-5a': { celda: 'S227', campo: '3a-5a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_6a-11a': { celda: 'U227', campo: '6a-11a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_12a-17a': { celda: 'W227', campo: '12a-17a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_18a-29a': { celda: 'Y227', campo: '18a-29a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_30a-59a': { celda: 'AA227', campo: '30a-59a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_60a_mas': { celda: 'AC227', campo: '60a_mas', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PATERP_NOG_TOTAL_C_N': { celda: 'AE227', campo: 'TOTAL_C_N', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    // TERAPIA PULPAR - GESTANTE
    'PATERP_GES_0-28d': { celda: 'I228', campo: '0-28d', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_29d-5m': { celda: 'K228', campo: '29d-5m', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_6m-11m': { celda: 'M228', campo: '6m-11m', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_1año': { celda: 'O228', campo: '1año', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_2años': { celda: 'Q228', campo: '2años', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_3a-5a': { celda: 'S228', campo: '3a-5a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_6a-11a': { celda: 'U228', campo: '6a-11a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_12a-17a': { celda: 'W228', campo: '12a-17a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_18a-29a': { celda: 'Y228', campo: '18a-29a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_30a-59a': { celda: 'AA228', campo: '30a-59a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_60a_mas': { celda: 'AC228', campo: '60a_mas', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PATERP_GES_TOTAL_C_N': { celda: 'AE228', campo: 'TOTAL_C_N', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    // TERAPIA ENDODÓNTICA - NO GESTANTE
    'PAENDO_NOG_0-28d': { celda: 'I229', campo: '0-28d', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_29d-5m': { celda: 'K229', campo: '29d-5m', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_6m-11m': { celda: 'M229', campo: '6m-11m', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_1año': { celda: 'O229', campo: '1año', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_2años': { celda: 'Q229', campo: '2años', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_3a-5a': { celda: 'S229', campo: '3a-5a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_6a-11a': { celda: 'U229', campo: '6a-11a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_12a-17a': { celda: 'W229', campo: '12a-17a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_18a-29a': { celda: 'Y229', campo: '18a-29a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_30a-59a': { celda: 'AA229', campo: '30a-59a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_60a_mas': { celda: 'AC229', campo: '60a_mas', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PAENDO_NOG_TOTAL_C_N': { celda: 'AE229', campo: 'TOTAL_C_N', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    // TERAPIA ENDODÓNTICA - GESTANTE
    'PAENDO_GES_0-28d': { celda: 'I230', campo: '0-28d', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_29d-5m': { celda: 'K230', campo: '29d-5m', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_6m-11m': { celda: 'M230', campo: '6m-11m', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_1año': { celda: 'O230', campo: '1año', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_2años': { celda: 'Q230', campo: '2años', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_3a-5a': { celda: 'S230', campo: '3a-5a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_6a-11a': { celda: 'U230', campo: '6a-11a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_12a-17a': { celda: 'W230', campo: '12a-17a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_18a-29a': { celda: 'Y230', campo: '18a-29a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_30a-59a': { celda: 'AA230', campo: '30a-59a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_60a_mas': { celda: 'AC230', campo: '60a_mas', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PAENDO_GES_TOTAL_C_N': { celda: 'AE230', campo: 'TOTAL_C_N', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO ORTODONCIA - NO GESTANTE
    'PAORTO_NOG_0-28d': { celda: 'I231', campo: '0-28d', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_29d-5m': { celda: 'K231', campo: '29d-5m', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_6m-11m': { celda: 'M231', campo: '6m-11m', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_1año': { celda: 'O231', campo: '1año', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_2años': { celda: 'Q231', campo: '2años', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_3a-5a': { celda: 'S231', campo: '3a-5a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_6a-11a': { celda: 'U231', campo: '6a-11a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_12a-17a': { celda: 'W231', campo: '12a-17a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_18a-29a': { celda: 'Y231', campo: '18a-29a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_30a-59a': { celda: 'AA231', campo: '30a-59a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_60a_mas': { celda: 'AC231', campo: '60a_mas', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PAORTO_NOG_TOTAL_C_N': { celda: 'AE231', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO ORTODONCIA - GESTANTE
    'PAORTO_GES_0-28d': { celda: 'I232', campo: '0-28d', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_29d-5m': { celda: 'K232', campo: '29d-5m', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_6m-11m': { celda: 'M232', campo: '6m-11m', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_1año': { celda: 'O232', campo: '1año', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_2años': { celda: 'Q232', campo: '2años', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_3a-5a': { celda: 'S232', campo: '3a-5a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_6a-11a': { celda: 'U232', campo: '6a-11a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_12a-17a': { celda: 'W232', campo: '12a-17a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_18a-29a': { celda: 'Y232', campo: '18a-29a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_30a-59a': { celda: 'AA232', campo: '30a-59a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_60a_mas': { celda: 'AC232', campo: '60a_mas', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PAORTO_GES_TOTAL_C_N': { celda: 'AE232', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    // REHABILITACIÓN PROTÉSICA - NO GESTANTE
    'PAREHAB_NOG_0-28d': { celda: 'I233', campo: '0-28d', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_29d-5m': { celda: 'K233', campo: '29d-5m', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_6m-11m': { celda: 'M233', campo: '6m-11m', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_1año': { celda: 'O233', campo: '1año', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_2años': { celda: 'Q233', campo: '2años', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_3a-5a': { celda: 'S233', campo: '3a-5a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_6a-11a': { celda: 'U233', campo: '6a-11a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_12a-17a': { celda: 'W233', campo: '12a-17a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_18a-29a': { celda: 'Y233', campo: '18a-29a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_30a-59a': { celda: 'AA233', campo: '30a-59a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_60a_mas': { celda: 'AC233', campo: '60a_mas', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PAREHAB_NOG_TOTAL_C_N': { celda: 'AE233', campo: 'TOTAL_C_N', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    // REHABILITACIÓN PROTÉSICA - GESTANTE
    'PAREHAB_GES_0-28d': { celda: 'I234', campo: '0-28d', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_29d-5m': { celda: 'K234', campo: '29d-5m', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_6m-11m': { celda: 'M234', campo: '6m-11m', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_1año': { celda: 'O234', campo: '1año', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_2años': { celda: 'Q234', campo: '2años', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_3a-5a': { celda: 'S234', campo: '3a-5a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_6a-11a': { celda: 'U234', campo: '6a-11a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_12a-17a': { celda: 'W234', campo: '12a-17a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_18a-29a': { celda: 'Y234', campo: '18a-29a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_30a-59a': { celda: 'AA234', campo: '30a-59a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_60a_mas': { celda: 'AC234', campo: '60a_mas', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PAREHAB_GES_TOTAL_C_N': { celda: 'AE234', campo: 'TOTAL_C_N', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO PERIODONTAL - NO GESTANTE
    'PAPERIO_NOG_0-28d': { celda: 'I235', campo: '0-28d', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_29d-5m': { celda: 'K235', campo: '29d-5m', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_6m-11m': { celda: 'M235', campo: '6m-11m', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_1año': { celda: 'O235', campo: '1año', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_2años': { celda: 'Q235', campo: '2años', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_3a-5a': { celda: 'S235', campo: '3a-5a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_6a-11a': { celda: 'U235', campo: '6a-11a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_12a-17a': { celda: 'W235', campo: '12a-17a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_18a-29a': { celda: 'Y235', campo: '18a-29a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_30a-59a': { celda: 'AA235', campo: '30a-59a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_60a_mas': { celda: 'AC235', campo: '60a_mas', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PAPERIO_NOG_TOTAL_C_N': { celda: 'AE235', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO PERIODONTAL - GESTANTE
    'PAPERIO_GES_0-28d': { celda: 'I236', campo: '0-28d', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_29d-5m': { celda: 'K236', campo: '29d-5m', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_6m-11m': { celda: 'M236', campo: '6m-11m', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_1año': { celda: 'O236', campo: '1año', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_2años': { celda: 'Q236', campo: '2años', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_3a-5a': { celda: 'S236', campo: '3a-5a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_6a-11a': { celda: 'U236', campo: '6a-11a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_12a-17a': { celda: 'W236', campo: '12a-17a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_18a-29a': { celda: 'Y236', campo: '18a-29a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_30a-59a': { celda: 'AA236', campo: '30a-59a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_60a_mas': { celda: 'AC236', campo: '60a_mas', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PAPERIO_GES_TOTAL_C_N': { celda: 'AE236', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO QUIRÚRGICO - NO GESTANTE
    'PAQUIR_NOG_0-28d': { celda: 'I237', campo: '0-28d', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_29d-5m': { celda: 'K237', campo: '29d-5m', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_6m-11m': { celda: 'M237', campo: '6m-11m', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_1año': { celda: 'O237', campo: '1año', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_2años': { celda: 'Q237', campo: '2años', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_3a-5a': { celda: 'S237', campo: '3a-5a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_6a-11a': { celda: 'U237', campo: '6a-11a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_12a-17a': { celda: 'W237', campo: '12a-17a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_18a-29a': { celda: 'Y237', campo: '18a-29a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_30a-59a': { celda: 'AA237', campo: '30a-59a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_60a_mas': { celda: 'AC237', campo: '60a_mas', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PAQUIR_NOG_TOTAL_C_N': { celda: 'AE237', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO QUIRÚRGICO - GESTANTE
    'PAQUIR_GES_0-28d': { celda: 'I238', campo: '0-28d', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_29d-5m': { celda: 'K238', campo: '29d-5m', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_6m-11m': { celda: 'M238', campo: '6m-11m', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_1año': { celda: 'O238', campo: '1año', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_2años': { celda: 'Q238', campo: '2años', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_3a-5a': { celda: 'S238', campo: '3a-5a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_6a-11a': { celda: 'U238', campo: '6a-11a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_12a-17a': { celda: 'W238', campo: '12a-17a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_18a-29a': { celda: 'Y238', campo: '18a-29a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_30a-59a': { celda: 'AA238', campo: '30a-59a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_60a_mas': { celda: 'AC238', campo: '60a_mas', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PAQUIR_GES_TOTAL_C_N': { celda: 'AE238', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PA_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },

    // ==================== PS_AT_PREVENTIVA ====================
    // ASESORÍA NUTRICIONAL - NO GESTANTE
    'PSASER_NOG_0-28d': { celda: 'I250', campo: '0-28d', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_29d-5m': { celda: 'K250', campo: '29d-5m', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_6m-11m': { celda: 'M250', campo: '6m-11m', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_1año': { celda: 'O250', campo: '1año', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_2años': { celda: 'Q250', campo: '2años', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_3a-5a': { celda: 'S250', campo: '3a-5a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_6a-11a': { celda: 'U250', campo: '6a-11a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_12a-17a': { celda: 'W250', campo: '12a-17a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_18a-29a': { celda: 'Y250', campo: '18a-29a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_30a-59a': { celda: 'AA250', campo: '30a-59a', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_60a_mas': { celda: 'AC250', campo: '60a_mas', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSASER_NOG_TOTAL_C_N': { celda: 'AE250', campo: 'TOTAL_C_N', seccion: 'ASESORÍA NUTRICIONAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'NO GESTANTE' },
    // ASESORÍA NUTRICIONAL - GESTANTE
    'PSASER_GES_0-28d': { celda: 'I251', campo: '0-28d', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_29d-5m': { celda: 'K251', campo: '29d-5m', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_6m-11m': { celda: 'M251', campo: '6m-11m', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_1año': { celda: 'O251', campo: '1año', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_2años': { celda: 'Q251', campo: '2años', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_3a-5a': { celda: 'S251', campo: '3a-5a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_6a-11a': { celda: 'U251', campo: '6a-11a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_12a-17a': { celda: 'W251', campo: '12a-17a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_18a-29a': { celda: 'Y251', campo: '18a-29a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_30a-59a': { celda: 'AA251', campo: '30a-59a', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_60a_mas': { celda: 'AC251', campo: '60a_mas', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    'PSASER_GES_TOTAL_C_N': { celda: 'AE251', campo: 'TOTAL_C_N', seccion: 'ASESORÍA NUTRICIONAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'ASESORÍA NUTRICIONAL PARA EL CONTROL DE ENFERMEDADES DENTALES', filtro_condicion: 'GESTANTE' },
    // EXAMEN ESTOMATOLÓGICO - NO GESTANTE
    'PSEXA_NOG_0-28d': { celda: 'I252', campo: '0-28d', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_29d-5m': { celda: 'K252', campo: '29d-5m', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_6m-11m': { celda: 'M252', campo: '6m-11m', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_1año': { celda: 'O252', campo: '1año', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_2años': { celda: 'Q252', campo: '2años', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_3a-5a': { celda: 'S252', campo: '3a-5a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_6a-11a': { celda: 'U252', campo: '6a-11a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_12a-17a': { celda: 'W252', campo: '12a-17a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_18a-29a': { celda: 'Y252', campo: '18a-29a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_30a-59a': { celda: 'AA252', campo: '30a-59a', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_60a_mas': { celda: 'AC252', campo: '60a_mas', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    'PSEXA_NOG_TOTAL_C_N': { celda: 'AE252', campo: 'TOTAL_C_N', seccion: 'EXAMEN ESTOMATOLÓGICO (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'NO GESTANTE' },
    // EXAMEN ESTOMATOLÓGICO - GESTANTE
    'PSEXA_GES_0-28d': { celda: 'I253', campo: '0-28d', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_29d-5m': { celda: 'K253', campo: '29d-5m', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_6m-11m': { celda: 'M253', campo: '6m-11m', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_1año': { celda: 'O253', campo: '1año', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_2años': { celda: 'Q253', campo: '2años', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_3a-5a': { celda: 'S253', campo: '3a-5a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_6a-11a': { celda: 'U253', campo: '6a-11a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_12a-17a': { celda: 'W253', campo: '12a-17a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_18a-29a': { celda: 'Y253', campo: '18a-29a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_30a-59a': { celda: 'AA253', campo: '30a-59a', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_60a_mas': { celda: 'AC253', campo: '60a_mas', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    'PSEXA_GES_TOTAL_C_N': { celda: 'AE253', campo: 'TOTAL_C_N', seccion: 'EXAMEN ESTOMATOLÓGICO (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'EXAMEN ESTOMATOLÓGICO', filtro_condicion: 'GESTANTE' },
    // INSTRUCCIÓN DE HIGIENE ORAL - NO GESTANTE
    'PSINS_NOG_0-28d': { celda: 'I254', campo: '0-28d', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_29d-5m': { celda: 'K254', campo: '29d-5m', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_6m-11m': { celda: 'M254', campo: '6m-11m', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_1año': { celda: 'O254', campo: '1año', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_2años': { celda: 'Q254', campo: '2años', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_3a-5a': { celda: 'S254', campo: '3a-5a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_6a-11a': { celda: 'U254', campo: '6a-11a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_12a-17a': { celda: 'W254', campo: '12a-17a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_18a-29a': { celda: 'Y254', campo: '18a-29a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_30a-59a': { celda: 'AA254', campo: '30a-59a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_60a_mas': { celda: 'AC254', campo: '60a_mas', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    'PSINS_NOG_TOTAL_C_N': { celda: 'AE254', campo: 'TOTAL_C_N', seccion: 'INSTRUCCIÓN HIGIENE ORAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'NO GESTANTE' },
    // INSTRUCCIÓN DE HIGIENE ORAL - GESTANTE
    'PSINS_GES_0-28d': { celda: 'I255', campo: '0-28d', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_29d-5m': { celda: 'K255', campo: '29d-5m', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_6m-11m': { celda: 'M255', campo: '6m-11m', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_1año': { celda: 'O255', campo: '1año', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_2años': { celda: 'Q255', campo: '2años', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_3a-5a': { celda: 'S255', campo: '3a-5a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_6a-11a': { celda: 'U255', campo: '6a-11a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_12a-17a': { celda: 'W255', campo: '12a-17a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_18a-29a': { celda: 'Y255', campo: '18a-29a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_30a-59a': { celda: 'AA255', campo: '30a-59a', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_60a_mas': { celda: 'AC255', campo: '60a_mas', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    'PSINS_GES_TOTAL_C_N': { celda: 'AE255', campo: 'TOTAL_C_N', seccion: 'INSTRUCCIÓN HIGIENE ORAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'INSTRUCCIÓN DE HIGIENE ORAL', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE SELLANTES - NO GESTANTE
    'PSSELL_NOG_0-28d': { celda: 'I256', campo: '0-28d', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_29d-5m': { celda: 'K256', campo: '29d-5m', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_6m-11m': { celda: 'M256', campo: '6m-11m', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_1año': { celda: 'O256', campo: '1año', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_2años': { celda: 'Q256', campo: '2años', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_3a-5a': { celda: 'S256', campo: '3a-5a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_6a-11a': { celda: 'U256', campo: '6a-11a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_12a-17a': { celda: 'W256', campo: '12a-17a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_18a-29a': { celda: 'Y256', campo: '18a-29a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_30a-59a': { celda: 'AA256', campo: '30a-59a', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_60a_mas': { celda: 'AC256', campo: '60a_mas', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    'PSSELL_NOG_TOTAL_C_N': { celda: 'AE256', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE SELLANTES (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE SELLANTES - GESTANTE
    'PSSELL_GES_0-28d': { celda: 'I257', campo: '0-28d', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_29d-5m': { celda: 'K257', campo: '29d-5m', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_6m-11m': { celda: 'M257', campo: '6m-11m', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_1año': { celda: 'O257', campo: '1año', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_2años': { celda: 'Q257', campo: '2años', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_3a-5a': { celda: 'S257', campo: '3a-5a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_6a-11a': { celda: 'U257', campo: '6a-11a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_12a-17a': { celda: 'W257', campo: '12a-17a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_18a-29a': { celda: 'Y257', campo: '18a-29a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_30a-59a': { celda: 'AA257', campo: '30a-59a', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_60a_mas': { celda: 'AC257', campo: '60a_mas', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    'PSSELL_GES_TOTAL_C_N': { celda: 'AE257', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN DE SELLANTES (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE SELLANTES', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE FLÚOR BARNIZ - NO GESTANTE
    'PSBARNIZ_NOG_0-28d': { celda: 'I258', campo: '0-28d', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_29d-5m': { celda: 'K258', campo: '29d-5m', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_6m-11m': { celda: 'M258', campo: '6m-11m', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_1año': { celda: 'O258', campo: '1año', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_2años': { celda: 'Q258', campo: '2años', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_3a-5a': { celda: 'S258', campo: '3a-5a', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_6a-11a': { celda: 'U258', campo: '6a-11a', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_12a-17a': { celda: 'W258', campo: '12a-17a', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_18a-29a': { celda: 'Y258', campo: '18a-29a', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_30a-59a': { celda: 'AA258', campo: '30a-59a', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_60a_mas': { celda: 'AC258', campo: '60a_mas', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    'PSBARNIZ_NOG_TOTAL_C_N': { celda: 'AE258', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN FLÚOR BARNIZ (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE FLÚOR BARNIZ - GESTANTE
    'PSBARNIZ_GES_0-28d': { celda: 'I259', campo: '0-28d', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_29d-5m': { celda: 'K259', campo: '29d-5m', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_6m-11m': { celda: 'M259', campo: '6m-11m', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_1año': { celda: 'O259', campo: '1año', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_2años': { celda: 'Q259', campo: '2años', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_3a-5a': { celda: 'S259', campo: '3a-5a', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_6a-11a': { celda: 'U259', campo: '6a-11a', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_12a-17a': { celda: 'W259', campo: '12a-17a', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_18a-29a': { celda: 'Y259', campo: '18a-29a', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_30a-59a': { celda: 'AA259', campo: '30a-59a', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_60a_mas': { celda: 'AC259', campo: '60a_mas', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    'PSBARNIZ_GES_TOTAL_C_N': { celda: 'AE259', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN FLÚOR BARNIZ (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR BARNIZ', filtro_condicion: 'GESTANTE' },
    // APLICACIÓN DE FLÚOR GEL - NO GESTANTE
    'PSGEL_NOG_0-28d': { celda: 'I260', campo: '0-28d', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_29d-5m': { celda: 'K260', campo: '29d-5m', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_6m-11m': { celda: 'M260', campo: '6m-11m', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_1año': { celda: 'O260', campo: '1año', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_2años': { celda: 'Q260', campo: '2años', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_3a-5a': { celda: 'S260', campo: '3a-5a', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_6a-11a': { celda: 'U260', campo: '6a-11a', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_12a-17a': { celda: 'W260', campo: '12a-17a', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_18a-29a': { celda: 'Y260', campo: '18a-29a', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_30a-59a': { celda: 'AA260', campo: '30a-59a', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_60a_mas': { celda: 'AC260', campo: '60a_mas', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    'PSGEL_NOG_TOTAL_C_N': { celda: 'AE260', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN FLÚOR GEL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'NO GESTANTE' },
    // APLICACIÓN DE FLÚOR GEL - GESTANTE
    'PSGEL_GES_0-28d': { celda: 'I261', campo: '0-28d', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_29d-5m': { celda: 'K261', campo: '29d-5m', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_6m-11m': { celda: 'M261', campo: '6m-11m', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_1año': { celda: 'O261', campo: '1año', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_2años': { celda: 'Q261', campo: '2años', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_3a-5a': { celda: 'S261', campo: '3a-5a', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_6a-11a': { celda: 'U261', campo: '6a-11a', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_12a-17a': { celda: 'W261', campo: '12a-17a', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_18a-29a': { celda: 'Y261', campo: '18a-29a', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_30a-59a': { celda: 'AA261', campo: '30a-59a', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_60a_mas': { celda: 'AC261', campo: '60a_mas', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    'PSGEL_GES_TOTAL_C_N': { celda: 'AE261', campo: 'TOTAL_C_N', seccion: 'APLICACIÓN FLÚOR GEL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'APLICACIÓN DE FLÚOR GEL', filtro_condicion: 'GESTANTE' },
    // PROFILAXIS DENTAL - NO GESTANTE
    'PSPROF_NOG_0-28d': { celda: 'I262', campo: '0-28d', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_29d-5m': { celda: 'K262', campo: '29d-5m', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_6m-11m': { celda: 'M262', campo: '6m-11m', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_1año': { celda: 'O262', campo: '1año', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_2años': { celda: 'Q262', campo: '2años', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_3a-5a': { celda: 'S262', campo: '3a-5a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_6a-11a': { celda: 'U262', campo: '6a-11a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_12a-17a': { celda: 'W262', campo: '12a-17a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_18a-29a': { celda: 'Y262', campo: '18a-29a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_30a-59a': { celda: 'AA262', campo: '30a-59a', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_60a_mas': { celda: 'AC262', campo: '60a_mas', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPROF_NOG_TOTAL_C_N': { celda: 'AE262', campo: 'TOTAL_C_N', seccion: 'PROFILAXIS DENTAL (NO GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'NO GESTANTE' },
    // PROFILAXIS DENTAL - GESTANTE
    'PSPROF_GES_0-28d': { celda: 'I263', campo: '0-28d', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_29d-5m': { celda: 'K263', campo: '29d-5m', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_6m-11m': { celda: 'M263', campo: '6m-11m', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_1año': { celda: 'O263', campo: '1año', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_2años': { celda: 'Q263', campo: '2años', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_3a-5a': { celda: 'S263', campo: '3a-5a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_6a-11a': { celda: 'U263', campo: '6a-11a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_12a-17a': { celda: 'W263', campo: '12a-17a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_18a-29a': { celda: 'Y263', campo: '18a-29a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_30a-59a': { celda: 'AA263', campo: '30a-59a', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_60a_mas': { celda: 'AC263', campo: '60a_mas', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },
    'PSPROF_GES_TOTAL_C_N': { celda: 'AE263', campo: 'TOTAL_C_N', seccion: 'PROFILAXIS DENTAL (GESTANTE)', tabla: 'PS_AT_PREVENTIVA', filtro_subproducto: 'PROFILAXIS DENTAL', filtro_condicion: 'GESTANTE' },

    // ==================== PS_AT_RECUPERATIVA ====================
    // RASPAJE DENTAL - NO GESTANTE
    'PSRASP_NOG_0-28d': { celda: 'I271', campo: '0-28d', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_29d-5m': { celda: 'K271', campo: '29d-5m', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_6m-11m': { celda: 'M271', campo: '6m-11m', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_1año': { celda: 'O271', campo: '1año', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_2años': { celda: 'Q271', campo: '2años', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_3a-5a': { celda: 'S271', campo: '3a-5a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_6a-11a': { celda: 'U271', campo: '6a-11a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_12a-17a': { celda: 'W271', campo: '12a-17a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_18a-29a': { celda: 'Y271', campo: '18a-29a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_30a-59a': { celda: 'AA271', campo: '30a-59a', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_60a_mas': { celda: 'AC271', campo: '60a_mas', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    'PSRASP_NOG_TOTAL_C_N': { celda: 'AE271', campo: 'TOTAL_C_N', seccion: 'RASPAJE DENTAL (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'NO GESTANTE' },
    // RASPAJE DENTAL - GESTANTE
    'PSRASP_GES_0-28d': { celda: 'I272', campo: '0-28d', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_29d-5m': { celda: 'K272', campo: '29d-5m', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_6m-11m': { celda: 'M272', campo: '6m-11m', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_1año': { celda: 'O272', campo: '1año', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_2años': { celda: 'Q272', campo: '2años', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_3a-5a': { celda: 'S272', campo: '3a-5a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_6a-11a': { celda: 'U272', campo: '6a-11a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_12a-17a': { celda: 'W272', campo: '12a-17a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_18a-29a': { celda: 'Y272', campo: '18a-29a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_30a-59a': { celda: 'AA272', campo: '30a-59a', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_60a_mas': { celda: 'AC272', campo: '60a_mas', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    'PSRASP_GES_TOTAL_C_N': { celda: 'AE272', campo: 'TOTAL_C_N', seccion: 'RASPAJE DENTAL (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RASPAJE DENTAL', filtro_condicion: 'GESTANTE' },
    // DEBRIDACIÓN PROCESOS INFECCIOSOS - NO GESTANTE
    'PSDESB_NOG_0-28d': { celda: 'I273', campo: '0-28d', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_29d-5m': { celda: 'K273', campo: '29d-5m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_6m-11m': { celda: 'M273', campo: '6m-11m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_1año': { celda: 'O273', campo: '1año', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_2años': { celda: 'Q273', campo: '2años', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_3a-5a': { celda: 'S273', campo: '3a-5a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_6a-11a': { celda: 'U273', campo: '6a-11a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_12a-17a': { celda: 'W273', campo: '12a-17a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_18a-29a': { celda: 'Y273', campo: '18a-29a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_30a-59a': { celda: 'AA273', campo: '30a-59a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_60a_mas': { celda: 'AC273', campo: '60a_mas', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    'PSDESB_NOG_TOTAL_C_N': { celda: 'AE273', campo: 'TOTAL_C_N', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'NO GESTANTE' },
    // DEBRIDACIÓN PROCESOS INFECCIOSOS - GESTANTE
    'PSDESB_GES_0-28d': { celda: 'I274', campo: '0-28d', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_29d-5m': { celda: 'K274', campo: '29d-5m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_6m-11m': { celda: 'M274', campo: '6m-11m', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_1año': { celda: 'O274', campo: '1año', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_2años': { celda: 'Q274', campo: '2años', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_3a-5a': { celda: 'S274', campo: '3a-5a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_6a-11a': { celda: 'U274', campo: '6a-11a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_12a-17a': { celda: 'W274', campo: '12a-17a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_18a-29a': { celda: 'Y274', campo: '18a-29a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_30a-59a': { celda: 'AA274', campo: '30a-59a', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_60a_mas': { celda: 'AC274', campo: '60a_mas', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    'PSDESB_GES_TOTAL_C_N': { celda: 'AE274', campo: 'TOTAL_C_N', seccion: 'DEBRIDACIÓN PROCESOS INFECCIOSOS (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'DEBRIDACIÓN DE LOS PROCESOS INFECCIOSOS BUCODENTALES', filtro_condicion: 'GESTANTE' },
    // CONSULTA ESTOMATOLÓGICA - NO GESTANTE
    'PSCONSUL_NOG_0-28d': { celda: 'I275', campo: '0-28d', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_29d-5m': { celda: 'K275', campo: '29d-5m', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_6m-11m': { celda: 'M275', campo: '6m-11m', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_1año': { celda: 'O275', campo: '1año', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_2años': { celda: 'Q275', campo: '2años', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_3a-5a': { celda: 'S275', campo: '3a-5a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_6a-11a': { celda: 'U275', campo: '6a-11a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_12a-17a': { celda: 'W275', campo: '12a-17a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_18a-29a': { celda: 'Y275', campo: '18a-29a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_30a-59a': { celda: 'AA275', campo: '30a-59a', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_60a_mas': { celda: 'AC275', campo: '60a_mas', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    'PSCONSUL_NOG_TOTAL_C_N': { celda: 'AE275', campo: 'TOTAL_C_N', seccion: 'CONSULTA ESTOMATOLÓGICA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'NO GESTANTE' },
    // CONSULTA ESTOMATOLÓGICA - GESTANTE
    'PSCONSUL_GES_0-28d': { celda: 'I276', campo: '0-28d', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_29d-5m': { celda: 'K276', campo: '29d-5m', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_6m-11m': { celda: 'M276', campo: '6m-11m', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_1año': { celda: 'O276', campo: '1año', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_2años': { celda: 'Q276', campo: '2años', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_3a-5a': { celda: 'S276', campo: '3a-5a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_6a-11a': { celda: 'U276', campo: '6a-11a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_12a-17a': { celda: 'W276', campo: '12a-17a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_18a-29a': { celda: 'Y276', campo: '18a-29a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_30a-59a': { celda: 'AA276', campo: '30a-59a', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_60a_mas': { celda: 'AC276', campo: '60a_mas', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    'PSCONSUL_GES_TOTAL_C_N': { celda: 'AE276', campo: 'TOTAL_C_N', seccion: 'CONSULTA ESTOMATOLÓGICA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'CONSULTA ESTOMATOLÓGICA', filtro_condicion: 'GESTANTE' },
    // EXODONCIA SIMPLE - NO GESTANTE
    'PSEXOD_NOG_0-28d': { celda: 'I277', campo: '0-28d', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_29d-5m': { celda: 'K277', campo: '29d-5m', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_6m-11m': { celda: 'M277', campo: '6m-11m', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_1año': { celda: 'O277', campo: '1año', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_2años': { celda: 'Q277', campo: '2años', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_3a-5a': { celda: 'S277', campo: '3a-5a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_6a-11a': { celda: 'U277', campo: '6a-11a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_12a-17a': { celda: 'W277', campo: '12a-17a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_18a-29a': { celda: 'Y277', campo: '18a-29a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_30a-59a': { celda: 'AA277', campo: '30a-59a', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_60a_mas': { celda: 'AC277', campo: '60a_mas', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    'PSEXOD_NOG_TOTAL_C_N': { celda: 'AE277', campo: 'TOTAL_C_N', seccion: 'EXODONCIA SIMPLE (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'NO GESTANTE' },
    // EXODONCIA SIMPLE - GESTANTE
    'PSEXOD_GES_0-28d': { celda: 'I278', campo: '0-28d', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_29d-5m': { celda: 'K278', campo: '29d-5m', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_6m-11m': { celda: 'M278', campo: '6m-11m', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_1año': { celda: 'O278', campo: '1año', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_2años': { celda: 'Q278', campo: '2años', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_3a-5a': { celda: 'S278', campo: '3a-5a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_6a-11a': { celda: 'U278', campo: '6a-11a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_12a-17a': { celda: 'W278', campo: '12a-17a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_18a-29a': { celda: 'Y278', campo: '18a-29a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_30a-59a': { celda: 'AA278', campo: '30a-59a', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_60a_mas': { celda: 'AC278', campo: '60a_mas', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    'PSEXOD_GES_TOTAL_C_N': { celda: 'AE278', campo: 'TOTAL_C_N', seccion: 'EXODONCIA SIMPLE (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'EXODONCIA SIMPLE', filtro_condicion: 'GESTANTE' },
    // RESTAURACIONES IONÓMERO VIDRIO - NO GESTANTE
    'PSIONO_NOG_0-28d': { celda: 'I279', campo: '0-28d', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_29d-5m': { celda: 'K279', campo: '29d-5m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_6m-11m': { celda: 'M279', campo: '6m-11m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_1año': { celda: 'O279', campo: '1año', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_2años': { celda: 'Q279', campo: '2años', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_3a-5a': { celda: 'S279', campo: '3a-5a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_6a-11a': { celda: 'U279', campo: '6a-11a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_12a-17a': { celda: 'W279', campo: '12a-17a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_18a-29a': { celda: 'Y279', campo: '18a-29a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_30a-59a': { celda: 'AA279', campo: '30a-59a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_60a_mas': { celda: 'AC279', campo: '60a_mas', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    'PSIONO_NOG_TOTAL_C_N': { celda: 'AE279', campo: 'TOTAL_C_N', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'NO GESTANTE' },
    // RESTAURACIONES IONÓMERO VIDRIO - GESTANTE
    'PSIONO_GES_0-28d': { celda: 'I280', campo: '0-28d', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_29d-5m': { celda: 'K280', campo: '29d-5m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_6m-11m': { celda: 'M280', campo: '6m-11m', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_1año': { celda: 'O280', campo: '1año', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_2años': { celda: 'Q280', campo: '2años', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_3a-5a': { celda: 'S280', campo: '3a-5a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_6a-11a': { celda: 'U280', campo: '6a-11a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_12a-17a': { celda: 'W280', campo: '12a-17a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_18a-29a': { celda: 'Y280', campo: '18a-29a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_30a-59a': { celda: 'AA280', campo: '30a-59a', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_60a_mas': { celda: 'AC280', campo: '60a_mas', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    'PSIONO_GES_TOTAL_C_N': { celda: 'AE280', campo: 'TOTAL_C_N', seccion: 'RESTAURACIONES IONÓMERO VIDRIO (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIONES DENTALES CON IONÓMERO DE VIDRIO', filtro_condicion: 'GESTANTE' },
    // RESTAURACIÓN CON RESINA - NO GESTANTE
    'PSRESIN_NOG_0-28d': { celda: 'I281', campo: '0-28d', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_29d-5m': { celda: 'K281', campo: '29d-5m', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_6m-11m': { celda: 'M281', campo: '6m-11m', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_1año': { celda: 'O281', campo: '1año', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_2años': { celda: 'Q281', campo: '2años', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_3a-5a': { celda: 'S281', campo: '3a-5a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_6a-11a': { celda: 'U281', campo: '6a-11a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_12a-17a': { celda: 'W281', campo: '12a-17a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_18a-29a': { celda: 'Y281', campo: '18a-29a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_30a-59a': { celda: 'AA281', campo: '30a-59a', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_60a_mas': { celda: 'AC281', campo: '60a_mas', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    'PSRESIN_NOG_TOTAL_C_N': { celda: 'AE281', campo: 'TOTAL_C_N', seccion: 'RESTAURACIÓN CON RESINA (NO GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'NO GESTANTE' },
    // RESTAURACIÓN CON RESINA - GESTANTE
    'PSRESIN_GES_0-28d': { celda: 'I282', campo: '0-28d', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_29d-5m': { celda: 'K282', campo: '29d-5m', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_6m-11m': { celda: 'M282', campo: '6m-11m', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_1año': { celda: 'O282', campo: '1año', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_2años': { celda: 'Q282', campo: '2años', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_3a-5a': { celda: 'S282', campo: '3a-5a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_6a-11a': { celda: 'U282', campo: '6a-11a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_12a-17a': { celda: 'W282', campo: '12a-17a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_18a-29a': { celda: 'Y282', campo: '18a-29a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_30a-59a': { celda: 'AA282', campo: '30a-59a', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_60a_mas': { celda: 'AC282', campo: '60a_mas', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },
    'PSRESIN_GES_TOTAL_C_N': { celda: 'AE282', campo: 'TOTAL_C_N', seccion: 'RESTAURACIÓN CON RESINA (GESTANTE)', tabla: 'PS_AT_RECUPERATIVA', filtro_subproducto: 'RESTAURACIÓN DENTAL CON RESINA', filtro_condicion: 'GESTANTE' },

    // ==================== PS_AT_ESPECIALIZADA ====================
    // TERAPIA PULPAR - NO GESTANTE
    'PSTERP_NOG_0-28d': { celda: 'I290', campo: '0-28d', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_29d-5m': { celda: 'K290', campo: '29d-5m', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_6m-11m': { celda: 'M290', campo: '6m-11m', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_1año': { celda: 'O290', campo: '1año', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_2años': { celda: 'Q290', campo: '2años', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_3a-5a': { celda: 'S290', campo: '3a-5a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_6a-11a': { celda: 'U290', campo: '6a-11a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_12a-17a': { celda: 'W290', campo: '12a-17a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_18a-29a': { celda: 'Y290', campo: '18a-29a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_30a-59a': { celda: 'AA290', campo: '30a-59a', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_60a_mas': { celda: 'AC290', campo: '60a_mas', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    'PSTERP_NOG_TOTAL_C_N': { celda: 'AE290', campo: 'TOTAL_C_N', seccion: 'TERAPIA PULPAR (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'NO GESTANTE' },
    // TERAPIA PULPAR - GESTANTE
    'PSTERP_GES_0-28d': { celda: 'I291', campo: '0-28d', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_29d-5m': { celda: 'K291', campo: '29d-5m', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_6m-11m': { celda: 'M291', campo: '6m-11m', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_1año': { celda: 'O291', campo: '1año', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_2años': { celda: 'Q291', campo: '2años', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_3a-5a': { celda: 'S291', campo: '3a-5a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_6a-11a': { celda: 'U291', campo: '6a-11a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_12a-17a': { celda: 'W291', campo: '12a-17a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_18a-29a': { celda: 'Y291', campo: '18a-29a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_30a-59a': { celda: 'AA291', campo: '30a-59a', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_60a_mas': { celda: 'AC291', campo: '60a_mas', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    'PSTERP_GES_TOTAL_C_N': { celda: 'AE291', campo: 'TOTAL_C_N', seccion: 'TERAPIA PULPAR (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA PULPAR', filtro_condicion: 'GESTANTE' },
    // TERAPIA ENDODÓNTICA - NO GESTANTE
    'PSENDO_NOG_0-28d': { celda: 'I292', campo: '0-28d', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_29d-5m': { celda: 'K292', campo: '29d-5m', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_6m-11m': { celda: 'M292', campo: '6m-11m', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_1año': { celda: 'O292', campo: '1año', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_2años': { celda: 'Q292', campo: '2años', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_3a-5a': { celda: 'S292', campo: '3a-5a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_6a-11a': { celda: 'U292', campo: '6a-11a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_12a-17a': { celda: 'W292', campo: '12a-17a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_18a-29a': { celda: 'Y292', campo: '18a-29a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_30a-59a': { celda: 'AA292', campo: '30a-59a', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_60a_mas': { celda: 'AC292', campo: '60a_mas', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    'PSENDO_NOG_TOTAL_C_N': { celda: 'AE292', campo: 'TOTAL_C_N', seccion: 'TERAPIA ENDODÓNTICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'NO GESTANTE' },
    // TERAPIA ENDODÓNTICA - GESTANTE
    'PSENDO_GES_0-28d': { celda: 'I293', campo: '0-28d', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_29d-5m': { celda: 'K293', campo: '29d-5m', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_6m-11m': { celda: 'M293', campo: '6m-11m', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_1año': { celda: 'O293', campo: '1año', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_2años': { celda: 'Q293', campo: '2años', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_3a-5a': { celda: 'S293', campo: '3a-5a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_6a-11a': { celda: 'U293', campo: '6a-11a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_12a-17a': { celda: 'W293', campo: '12a-17a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_18a-29a': { celda: 'Y293', campo: '18a-29a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_30a-59a': { celda: 'AA293', campo: '30a-59a', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_60a_mas': { celda: 'AC293', campo: '60a_mas', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    'PSENDO_GES_TOTAL_C_N': { celda: 'AE293', campo: 'TOTAL_C_N', seccion: 'TERAPIA ENDODÓNTICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TERAPIA ENDODÓNTICA', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO ORTODONCIA - NO GESTANTE
    'PSORTO_NOG_0-28d': { celda: 'I294', campo: '0-28d', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_29d-5m': { celda: 'K294', campo: '29d-5m', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_6m-11m': { celda: 'M294', campo: '6m-11m', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_1año': { celda: 'O294', campo: '1año', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_2años': { celda: 'Q294', campo: '2años', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_3a-5a': { celda: 'S294', campo: '3a-5a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_6a-11a': { celda: 'U294', campo: '6a-11a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_12a-17a': { celda: 'W294', campo: '12a-17a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_18a-29a': { celda: 'Y294', campo: '18a-29a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_30a-59a': { celda: 'AA294', campo: '30a-59a', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_60a_mas': { celda: 'AC294', campo: '60a_mas', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    'PSORTO_NOG_TOTAL_C_N': { celda: 'AE294', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO ORTODONCIA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO ORTODONCIA - GESTANTE
    'PSORTO_GES_0-28d': { celda: 'I295', campo: '0-28d', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_29d-5m': { celda: 'K295', campo: '29d-5m', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_6m-11m': { celda: 'M295', campo: '6m-11m', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_1año': { celda: 'O295', campo: '1año', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_2años': { celda: 'Q295', campo: '2años', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_3a-5a': { celda: 'S295', campo: '3a-5a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_6a-11a': { celda: 'U295', campo: '6a-11a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_12a-17a': { celda: 'W295', campo: '12a-17a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_18a-29a': { celda: 'Y295', campo: '18a-29a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_30a-59a': { celda: 'AA295', campo: '30a-59a', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_60a_mas': { celda: 'AC295', campo: '60a_mas', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    'PSORTO_GES_TOTAL_C_N': { celda: 'AE295', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO ORTODONCIA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO DE ORTODONCIA Y ORTOPEDIA MAXILAR', filtro_condicion: 'GESTANTE' },
    // REHABILITACIÓN PROTÉSICA - NO GESTANTE
    'PSREHAB_NOG_0-28d': { celda: 'I296', campo: '0-28d', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_29d-5m': { celda: 'K296', campo: '29d-5m', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_6m-11m': { celda: 'M296', campo: '6m-11m', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_1año': { celda: 'O296', campo: '1año', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_2años': { celda: 'Q296', campo: '2años', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_3a-5a': { celda: 'S296', campo: '3a-5a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_6a-11a': { celda: 'U296', campo: '6a-11a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_12a-17a': { celda: 'W296', campo: '12a-17a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_18a-29a': { celda: 'Y296', campo: '18a-29a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_30a-59a': { celda: 'AA296', campo: '30a-59a', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_60a_mas': { celda: 'AC296', campo: '60a_mas', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    'PSREHAB_NOG_TOTAL_C_N': { celda: 'AE296', campo: 'TOTAL_C_N', seccion: 'REHABILITACIÓN PROTÉSICA (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'NO GESTANTE' },
    // REHABILITACIÓN PROTÉSICA - GESTANTE
    'PSREHAB_GES_0-28d': { celda: 'I297', campo: '0-28d', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_29d-5m': { celda: 'K297', campo: '29d-5m', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_6m-11m': { celda: 'M297', campo: '6m-11m', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_1año': { celda: 'O297', campo: '1año', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_2años': { celda: 'Q297', campo: '2años', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_3a-5a': { celda: 'S297', campo: '3a-5a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_6a-11a': { celda: 'U297', campo: '6a-11a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_12a-17a': { celda: 'W297', campo: '12a-17a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_18a-29a': { celda: 'Y297', campo: '18a-29a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_30a-59a': { celda: 'AA297', campo: '30a-59a', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_60a_mas': { celda: 'AC297', campo: '60a_mas', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    'PSREHAB_GES_TOTAL_C_N': { celda: 'AE297', campo: 'TOTAL_C_N', seccion: 'REHABILITACIÓN PROTÉSICA (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'REHABILITACIÓN PROTÉSICA', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO PERIODONTAL - NO GESTANTE
    'PSPERIO_NOG_0-28d': { celda: 'I298', campo: '0-28d', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_29d-5m': { celda: 'K298', campo: '29d-5m', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_6m-11m': { celda: 'M298', campo: '6m-11m', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_1año': { celda: 'O298', campo: '1año', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_2años': { celda: 'Q298', campo: '2años', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_3a-5a': { celda: 'S298', campo: '3a-5a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_6a-11a': { celda: 'U298', campo: '6a-11a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_12a-17a': { celda: 'W298', campo: '12a-17a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_18a-29a': { celda: 'Y298', campo: '18a-29a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_30a-59a': { celda: 'AA298', campo: '30a-59a', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_60a_mas': { celda: 'AC298', campo: '60a_mas', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    'PSPERIO_NOG_TOTAL_C_N': { celda: 'AE298', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO PERIODONTAL (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO PERIODONTAL - GESTANTE
    'PSPERIO_GES_0-28d': { celda: 'I299', campo: '0-28d', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_29d-5m': { celda: 'K299', campo: '29d-5m', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_6m-11m': { celda: 'M299', campo: '6m-11m', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_1año': { celda: 'O299', campo: '1año', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_2años': { celda: 'Q299', campo: '2años', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_3a-5a': { celda: 'S299', campo: '3a-5a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_6a-11a': { celda: 'U299', campo: '6a-11a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_12a-17a': { celda: 'W299', campo: '12a-17a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_18a-29a': { celda: 'Y299', campo: '18a-29a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_30a-59a': { celda: 'AA299', campo: '30a-59a', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_60a_mas': { celda: 'AC299', campo: '60a_mas', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    'PSPERIO_GES_TOTAL_C_N': { celda: 'AE299', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO PERIODONTAL (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'SUB PRODUCTO: TRATAMIENTO PERIODONTAL', filtro_condicion: 'GESTANTE' },
    // TRATAMIENTO QUIRÚRGICO - NO GESTANTE
    'PSQUIR_NOG_0-28d': { celda: 'I300', campo: '0-28d', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_29d-5m': { celda: 'K300', campo: '29d-5m', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_6m-11m': { celda: 'M300', campo: '6m-11m', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_1año': { celda: 'O300', campo: '1año', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_2años': { celda: 'Q300', campo: '2años', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_3a-5a': { celda: 'S300', campo: '3a-5a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_6a-11a': { celda: 'U300', campo: '6a-11a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_12a-17a': { celda: 'W300', campo: '12a-17a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_18a-29a': { celda: 'Y300', campo: '18a-29a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_30a-59a': { celda: 'AA300', campo: '30a-59a', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_60a_mas': { celda: 'AC300', campo: '60a_mas', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    'PSQUIR_NOG_TOTAL_C_N': { celda: 'AE300', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO QUIRÚRGICO (NO GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'NO GESTANTE' },
    // TRATAMIENTO QUIRÚRGICO - GESTANTE
    'PSQUIR_GES_0-28d': { celda: 'I301', campo: '0-28d', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_29d-5m': { celda: 'K301', campo: '29d-5m', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_6m-11m': { celda: 'M301', campo: '6m-11m', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_1año': { celda: 'O301', campo: '1año', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_2años': { celda: 'Q301', campo: '2años', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_3a-5a': { celda: 'S301', campo: '3a-5a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_6a-11a': { celda: 'U301', campo: '6a-11a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_12a-17a': { celda: 'W301', campo: '12a-17a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_18a-29a': { celda: 'Y301', campo: '18a-29a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_30a-59a': { celda: 'AA301', campo: '30a-59a', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_60a_mas': { celda: 'AC301', campo: '60a_mas', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },
    'PSQUIR_GES_TOTAL_C_N': { celda: 'AE301', campo: 'TOTAL_C_N', seccion: 'TRATAMIENTO QUIRÚRGICO (GESTANTE)', tabla: 'PS_AT_ESPECIALIZADA', filtro_subproducto: 'TRATAMIENTO QUIRÚRGICO BUCAL Y MÁXILO FACIAL', filtro_condicion: 'GESTANTE' },    


    // ********************************************************************************************************************

    // --- PROCEDIMIENTOS ESTOMATOLOGICOS PREVENTIVOS (Orden 1) ---
    'IPPR1_PROC_6m_1a_11m_29d': { celda: 'G308', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_2a_11a_11m_29d': { celda: 'I308', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_meta_nino': { celda: 'K308', campo: 'meta_nino', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_12a_17a': { celda: 'M308', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_meta_adolescente': { celda: 'O308', campo: 'meta_adolescente', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_18a_29a': { celda: 'Q308', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_meta_joven': { celda: 'S308', campo: 'meta_joven', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_30a_59a': { celda: 'U308', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_meta_adulto': { celda: 'W308', campo: 'meta_adulto', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_60_a_mas': { celda: 'Y308', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },
    'IPPR1_PROC_meta_adultoM': { celda: 'AA308', campo: 'meta_adultoM', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '1' },

    // --- PROCEDIMIENTOS ESTOMATOLOGICOS PREVENTIVOS (Orden 2 - DEN) ---
    'IPPR1_DEN_6m_1a_11m_29d': { celda: 'G309', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '2' },

    
    'IPPR1_DEN_12a_17a': { celda: 'M309', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '2' },
    
    'IPPR1_DEN_18a_29a': { celda: 'Q309', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '2' },
   
    'IPPR1_DEN_30a_59a': { celda: 'U309', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '2' },

    'IPPR1_DEN_60_a_mas': { celda: 'Y309', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '2' },


    // --- INSTRUCCIÓN DE HIGIENE ORAL (Orden 3) ---
    'IPPR1_INS_6m_1a_11m_29d': { celda: 'G310', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
    'IPPR1_INS_2a_11a_11m_29d': { celda: 'I310', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
   
    'IPPR1_INS_12a_17a': { celda: 'M310', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
    
    'IPPR1_INS_18a_29a': { celda: 'Q310', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
   
    'IPPR1_INS_30a_59a': { celda: 'U310', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
    
    'IPPR1_INS_60_a_mas': { celda: 'Y310', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '3' },
   

    // --- ASESORÍA NUTRICIONAL (Orden 4) ---
    'IPPR1_ASER_6m_1a_11m_29d': { celda: 'G312', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
    'IPPR1_ASER_2a_11a_11m_29d': { celda: 'I312', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
   
    'IPPR1_ASER_12a_17a': { celda: 'M312', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
    
    'IPPR1_ASER_18a_29a': { celda: 'Q312', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
   
    'IPPR1_ASER_30a_59a': { celda: 'U312', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
   
    'IPPR1_ASER_60_a_mas': { celda: 'Y312', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '4' },
   
    'IPPR1_BARNIZ_6m_1a_11m_29d': { celda: 'G314', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },
    'IPPR1_BARNIZ_2a_11a_11m_29d': { celda: 'I314', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },
    'IPPR1_BARNIZ_12a_17a': { celda: 'M314', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },
    'IPPR1_BARNIZ_18a_29a': { celda: 'Q314', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },

    'IPPR1_BARNIZ_30a_59a': { celda: 'U314', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },
    'IPPR1_BARNIZ_60_a_mas': { celda: 'Y314', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '5' },
   
    // --- PROFILAXIS DENTAL (Orden 6) ---
    'IPPR1_PROF_6m_1a_11m_29d': { celda: 'G316', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },
    'IPPR1_PROF_2a_11a_11m_29d': { celda: 'I316', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },

    'IPPR1_PROF_12a_17a': { celda: 'M316', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },

    'IPPR1_PROF_18a_29a': { celda: 'Q316', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },

    'IPPR1_PROF_30a_59a': { celda: 'U316', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },

    'IPPR1_PROF_60_a_mas': { celda: 'Y316', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '6' },
   

    // --- APLICACIÓN DE SELLANTES (Orden 7) ---
    'IPPR1_SELL_6m_1a_11m_29d': { celda: 'G318', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },
    
    'IPPR1_SELL_2a_11a_11m_29d': { celda: 'I318', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },

    'IPPR1_SELL_12a_17a': { celda: 'M318', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },
    'IPPR1_SELL_18a_29a': { celda: 'Q318', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },
    'IPPR1_SELL_30a_59a': { celda: 'U318', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },
    'IPPR1_SELL_60_a_mas': { celda: 'Y318', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '7' },


    // --- APLICACIÓN DE FLÚOR GEL (Orden 8) ---
    'IPPR1_GEL_6m_1a_11m_29d': { celda: 'G320', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },
    'IPPR1_GEL_2a_11a_11m_29d': { celda: 'I320', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },
    'IPPR1_GEL_12a_17a': { celda: 'M320', campo: '12a-17a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },
    'IPPR1_GEL_18a_29a': { celda: 'Q320', campo: '18a-29a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },

    'IPPR1_GEL_30a_59a': { celda: 'U320', campo: '30a-59a', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },
    'IPPR1_GEL_60_a_mas': { celda: 'Y320', campo: '60_a_mas', seccion: 'INDICADORES_PPR1', tabla: 'INDICADORES_PPR1', filtro_orden: '8' },


    // ==================== INDICADORES_PPR2 ====================
    // --- PROCEDIMIENTOS ESTOMATOLOGICOS PREVENTIVOS (Orden 1) ---
    'IPPR2_PROC_6m_1a_11m_29d': { celda: 'G328', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_2a_11a_11m_29d': { celda: 'I328', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_meta_nino': { celda: 'K328', campo: 'meta_nino', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_12a_17a': { celda: 'M328', campo: '12a-17a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_meta_adolescente': { celda: 'O328', campo: 'meta_adolescente', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_18a_29a': { celda: 'Q328', campo: '18a-29a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_meta_joven': { celda: 'S328', campo: 'meta_joven', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_30a_59a': { celda: 'U328', campo: '30a-59a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_meta_adulto': { celda: 'W328', campo: 'meta_adulto', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_60_a_mas': { celda: 'Y328', campo: '60_a_mas', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },
    'IPPR2_PROC_meta_adultoM': { celda: 'AA328', campo: 'meta_adultoM', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '1' },

    // --- PROCEDIMIENTOS ESTOMATOLOGICOS PREVENTIVOS (Orden 2 - DEN) ---
    'IPPR2_DEN_6m_1a_11m_29d': { celda: 'G329', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },
    'IPPR2_DEN_2a_11a_11m_29d': { celda: 'I329', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },

    'IPPR2_DEN_12a_17a': { celda: 'M329', campo: '12a-17a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },

    'IPPR2_DEN_18a_29a': { celda: 'Q329', campo: '18a-29a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },

    'IPPR2_DEN_30a_59a': { celda: 'U329', campo: '30a-59a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },

    'IPPR2_DEN_60_a_mas': { celda: 'Y329', campo: '60_a_mas', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '2' },


    // --- REHABILITADOS CON PROTESIS DENTALES REMOVIBLES (Orden 3) ---
    'IPPR2_REHAB_6m_1a_11m_29d': { celda: 'G330', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_2a_11a_11m_29d': { celda: 'I330', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_meta_nino': { celda: 'K330', campo: 'meta_nino', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_12a_17a': { celda: 'M330', campo: '12a-17a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_meta_adolescente': { celda: 'O330', campo: 'meta_adolescente', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_18a_29a': { celda: 'Q330', campo: '18a-29a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_meta_joven': { celda: 'S330', campo: 'meta_joven', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_30a_59a': { celda: 'U330', campo: '30a-59a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_meta_adulto': { celda: 'W330', campo: 'meta_adulto', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_60_a_mas': { celda: 'Y330', campo: '60_a_mas', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },
    'IPPR2_REHAB_meta_adultoM': { celda: 'AA330', campo: 'meta_adultoM', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '3' },

    // --- REHABILITADOS CON PROTESIS DENTALES REMOVIBLES (Orden 4 - DEN) ---
    'IPPR2_REHAB_DEN_6m_1a_11m_29d': { celda: 'G331', campo: '6m_1a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },
    'IPPR2_REHAB_DEN_2a_11a_11m_29d': { celda: 'I331', campo: '2a_11a-11m_29d', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },

    'IPPR2_REHAB_DEN_12a_17a': { celda: 'M331', campo: '12a-17a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },

    'IPPR2_REHAB_DEN_18a_29a': { celda: 'Q331', campo: '18a-29a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },

    'IPPR2_REHAB_DEN_30a_59a': { celda: 'U331', campo: '30a-59a', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },

    'IPPR2_REHAB_DEN_60_a_mas': { celda: 'Y331', campo: '60_a_mas', seccion: 'INDICADORES_PPR2', tabla: 'INDICADORES_PPR2', filtro_orden: '4' },

};


// js/mapeos/mapeo_bucal.js
// ============================================
// ESTRATEGIA: SALUD BUCAL
// Basado en: plantillaV2.xlsx
// ============================================



// ============================================
// 2. CONFIGURACIÓN COMPLETA DE BUCAL
// ============================================
// js/mapeos/mapeo_bucal.js
// ============================================

const CONFIG_BUCAL = {
    // --- Datos generales ---
    nombre: 'Salud Bucal',
    codigo: 'BUCAL',
    icono: '🦷',
    color: '#10b981',
    
    // --- Archivos ---
    plantilla: 'plantillas/plantillaV2.xlsx',
    api: 'api/api_reporte_bucal.php',
    
    // --- Catálogo de reportes ---
    catalogo: [
        { CODIGO: 'CURSO_VIDA_GENERAL', NOMBRE: 'PG1 - Curso de Vida General' },
        { CODIGO: 'PREVALENCIA_CARIES', NOMBRE: 'PG1 - Prevalencia de Caries' },
        { CODIGO: 'AT_PREVENTIVA', NOMBRE: 'PG1 - Atención Preventiva' },
        { CODIGO: 'AT_RECUPERATIVA', NOMBRE: 'PG1 - Atención Recuperativa' },
        { CODIGO: 'AT_ESPECIALIZADA', NOMBRE: 'PG1 - Atención Especializada' },
        { CODIGO: 'AT_ESPECIALIZADA_02', NOMBRE: 'PG1 - Atención Especializada 02' },
        { CODIGO: 'AT_ESPECIALIZADA_03', NOMBRE: 'PG1 - Atención Especializada 03' },
        { CODIGO: 'PREVENCION_BUCAL', NOMBRE: 'PG1 - Prevención Bucal' },
        { CODIGO: 'ATENDIDOS_ATENCIONES', NOMBRE: 'PG1 - Atendidos y Atenciones' },
        { CODIGO: 'AT_INTERCONSULTA', NOMBRE: 'PG1 - Interconsulta' },
        { CODIGO: 'REHABILITACION_PROTESICA', NOMBRE: 'PG1 - Rehabilitación Protésica' },
        { CODIGO: 'INACTIVACION_CARIES', NOMBRE: 'PG1 - Inactivación de Caries' },
        { CODIGO: 'TELESALUD', NOMBRE: 'PG1 - Telesalud' },
        { CODIGO: 'PG2_ODONTOLOGIA', NOMBRE: 'PG2 - Odontología General' },
        { CODIGO: 'PG2_ODONTOLOGIA_N', NOMBRE: 'PG2 - Odontología (Niños)' },
        { CODIGO: 'PG2_PERS_SANA', NOMBRE: 'PG2 - Persona Sana' },
        { CODIGO: 'PG2_PERS_SANA_N', NOMBRE: 'PG2 - Persona Sana (Niños)' },
        { CODIGO: 'PG2_EVA_ORAL', NOMBRE: 'PG2 - Evaluación Oral' },
        { CODIGO: 'PG2_EVA_ORAL_N', NOMBRE: 'PG2 - Evaluación Oral (Niños)' },
        { CODIGO: 'PG2_PLAN_TRAT', NOMBRE: 'PG2 - Plan de Tratamiento' },
        { CODIGO: 'PG2_PROTESIS_DENT', NOMBRE: 'PG2 - Prótesis Dental' },
        { CODIGO: 'PG2_ATENC_ODONT_GST', NOMBRE: 'PG2 - Atención Odontológica Gestante' },
        { CODIGO: 'PG2_SESION_PROCEDIMIENTO', NOMBRE: 'PG2 - Atención y Procedimientos' },
        { CODIGO: 'PG2_ATENC_ATEND', NOMBRE: 'PG2 - Atenciones y Atendidos' },
        { CODIGO: 'PG2_ATENC_TELESALUD', NOMBRE: 'PG2 - Atención por Telesalud' },
        { CODIGO: 'PA_AT_PREVENTIVA', NOMBRE: 'PA - Atención Preventiva' },
        { CODIGO: 'PA_AT_RECUPERATIVA', NOMBRE: 'PA - Atención Recuperativa' },
        { CODIGO: 'PA_AT_ESPECIALIZADA', NOMBRE: 'PA - Atención Especializada' },
        { CODIGO: 'PS_AT_PREVENTIVA', NOMBRE: 'PS - Atención Preventiva' },
        { CODIGO: 'PS_AT_RECUPERATIVA', NOMBRE: 'PS - Atención Recuperativa' },
        { CODIGO: 'PS_AT_ESPECIALIZADA', NOMBRE: 'PS - Atención Especializada' },
        { CODIGO: 'INDICADORES_PPR1', NOMBRE: 'IND - Indicadores PPR1' },
        { CODIGO: 'INDICADORES_PPR2', NOMBRE: 'IND - Indicadores PPR2' },
    ],
    
    // --- Configuración de columnas para Excel ---
    columnas_excel: [
        { wch: 1 }, { wch: 8 }, { wch: 5 }, { wch: 28 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 },
        { wch: 8 }, { wch: 8 }
    ],
    
    // --- Paleta de colores para encabezados ---
    paleta_colores: [
        { header: '#0000FF', subheader: '#1177DE', titulo: '#448EE2' },
        { header: '#006400', subheader: '#228B22', titulo: '#32CD32' },
        { header: '#8B0000', subheader: '#B22222', titulo: '#CD5C5C' },
        { header: '#4B0082', subheader: '#6A0DAD', titulo: '#9370DB' },
        { header: '#8B4513', subheader: '#A0522D', titulo: '#D2691E' },
        { header: '#2F4F4F', subheader: '#3D6B6B', titulo: '#5F9EA0' },
        { header: '#8B008B', subheader: '#9932CC', titulo: '#DA70D6' },
    ],
    
    // --- Configuración para PDF ---
    titulo_pdf: 'REPORTE BUCAL',
    nombre_archivo: 'Reporte_Odontologico',
    
    // --- Filtros especiales ---
    filtros: ['filtro_ppr', 'filtro_actividad', 'filtro_preventiva', 'filtro_recuperativa', 'filtro_procedimiento', 'filtro_inactivacion', 'filtro_telesalud', 'filtro_protesis', 'filtro_subproducto', 'filtro_condicion', 'filtro_orden', 'filtro_curso_vida'],
    
    // --- ESTILOS CSS PARA BUCAL ---
    estilos_css: `
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
            padding: 4px 6px;
            vertical-align: middle;
            white-space: normal;
            word-wrap: break-word;
            word-break: break-word;
        }
        #excel-table td:nth-child(1), #excel-table th:nth-child(1) {
            min-width: 5px; max-width: 20px; width: 5px;
            padding: 4px 4px;
            text-align: center !important;
        }
        #excel-table td:nth-child(2), #excel-table th:nth-child(2) {
            min-width: 35px; max-width: 55px; width: 50px;
            text-align: left !important;
        }
        #excel-table td:nth-child(3), #excel-table th:nth-child(3) {
            min-width: 20px; max-width: 50px; width: 40px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }
        #excel-table td:nth-child(4), #excel-table th:nth-child(4) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: left !important;
        }


        #excel-table td:nth-child(5), #excel-table th:nth-child(5) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }


        #excel-table td:nth-child(6), #excel-table th:nth-child(6) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }      
            
        

        #excel-table td:nth-child(7), #excel-table th:nth-child(7) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }      
            
        #excel-table td:nth-child(8), #excel-table th:nth-child(8) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }  

        #excel-table td:nth-child(9), #excel-table th:nth-child(9) {
            min-width: 200px; max-width: 300px; width: 250px;
            padding: 4px 8px;
            line-height: 1.4;
            text-align: center !important;
        }          

        #excel-table td:nth-child(n+10), #excel-table th:nth-child(n+10) {
            min-width: 40px; max-width: 60px; width: 45px;
            padding: 3px 3px;
            text-align: center !important;
        }
        #excel-table th {
            background-color: #f0f0f0 !important;
            font-weight: bold !important;
            font-size: 10px !important;
            padding: 3px 2px;
            border-bottom: 2px solid #999 !important;
            border-top: 2px solid #999 !important;
            white-space: normal;
            word-break: break-word;
            line-height: 1.2;
        }
        #excel-table tr { min-height: 20px; }
    `
    
};

// ============================================
// 3. FUNCIONES EXPORTADAS
// ============================================
function getCatalogoBucal() {
    return CONFIG_BUCAL.catalogo;
}