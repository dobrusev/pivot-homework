class Variables {
    Transitions = {
        DEFAULT: '.15s ease-in',
        BEZIER: '.3s cubic-bezier(.1, 1.2, .3, 1)'
    }

    Shadows = {
        btn_text_shadow: '0 1px 1px rgba(0, 0, 0, 0.7)',
        btn_box_shadow: '0 1px 4px 0 rgba(0,0,0,0.20)'
    }

    Colour = {
        inherit: 'inherit',

        // Grayscale
        dark_00: '#000000',
        dark_01: '#303030',
        dark_02: '#606060',
        dark_03: '#909090',
        dark_04: '#E7E7E7',
        dark_05: '#a6a6a6',
        light_05: '#919191',
        light_04: '#B2B2B2',
        light_03: '#c0c0c0',
        light_02: '#e0e0e0',
        light_01: '#f6f6f6',
        light_00: '#ffffff',

        button_disabled_background: '#dbdbdb',
        button_disabled_border: '#cecece',
        button_disabled_color: '#9a9a9a',

        transparent_gray: 'rgba(206, 200, 200, 0.23921568627450981)',
        transparent: 'transparent',

        // Pivot Logo
        pivot_logo_01: '#00B9EE',
        pivot_logo_02: '#009FE3',
        pivot_logo_03: '#00A094',
        pivot_logo_04: '#8CC26C',

        // Accent
        accent_01: '#0b7293',
        accent_02: '#1b8eb3',
        accent_03: '#17bedc',
        accent_alt: '#2056a7',
        accent_dark: '#0D3268',

        accent_faded: 'rgba(23, 190, 220, 0.07)',

        // Alerts
        alert_info: '#1B8EB3',
        alert_info_dark: '#1b84a9',
        alert_warning: '#ffc03b',
        alert_warning_dark: '#BD850F',
        alert_danger: '#c22b2b',
        alert_danger_dark: '#960F0F',
        alert_danger_faded: 'rgba(255, 65, 65, 0.1)',
        alert_danger_input: '#F4D9D9',
        alert_success: '#77A717',
        alert_success_dark: '#4D6E0A',

        // Earth
        earth_01: '#bcb292',
        earth_02: '#a6d5a4',
        earth_03: '#d5aaaa',
        earth_04: '#e2c08b',
        earth_05: '#a2b38d',
        earth_06: '#bca5c1',
        earth_07: '#eedf92',

        // Categories
        cat_plugload: '#50575D',
        cat_heating: '#C0272F',
        cat_water: '#248FB1',
        cat_cooling: '#54EAFE',
        cat_lightning: '#FEBF48',
        cat_air: '#D6C3EC',
        cat_renewables: '#9CD13B',
        cat_envelope: '#7CBEC0',
        cat_building_automation: '#628187',
        cat_general: '#909090',
        cat_energy_supply: '#1F9D1D',

        // Buttons
        btn_primary_text: '#FFFFFF',

        // Layout
        header: '#F7F7F7',
        header_border: '#e0e0e0',

        // Cards
        card_accent_00: '#EFEFEF',
        card_accent_01: '#FAFAFA',
        card_accent_02: '#FFFFFF',
        card_shadow: 'rgba(0,0,0,0.08)',
        risk_green: '#56AB00',
        risk_lime: '#C0DD02',
        risk_yellow: '#FFD700',
        risk_orange: '#FF9C07',
        risk_red: '#DC2D06',

        // Buidings
        building_add_photo: '#EEF5F7',
        building_add_photo_text: '#3E8FA9',
        building_yellow_row: '#fff6e0',

        building_OFFICE: '#80ABCB',
        building_APARTMENT: '#8DAF8B',
        building_HOTEL: '#B67A7A',
        building_HOSPITAL: '#F79696',
        building_DATA_CENTER: '#B9C7D3',
        building_PRIMARY_SCHOOL: '#75B6C9',
        building_SECONDARY_SCHOOL: '#7FA7F5',
        building_FULL_SERVICE_RESTAURANT: '#EC9ECF',
        building_OUTPATIENT_HEALTH_CARE: '#FBAF8B',
        building_SENIOR_CARE_COMMUNITY: '#BFA89D',
        building_QUICK_SERVICE_RESTAURANT: '#E79B9B',
        building_SHOPPING_MALL: '#ABABD3',
        building_SUPERMARKET_GROCERY_STORE: '#9BBF57',
        building_WHOLESALE_CLUB_SUPERCENTER: '#CDB4EC',
        building_REFRIGERATED_WAREHOUSE: '#93D1D5',
        building_NON_REFRIGERATED_WAREHOUSE: '#90A2A3',
        building_MANUFACTURING_INDUSTRIAL_PLANT: '#909090',
        building_UNKNOWN: '#B0B0B0',

        // Charts
        chart_unselected: '#CDCDCD',
        chart_borderDark: '#979797',

        // Pagination
        pagination_text_color: '#0275d8',

        export_text: '#636363',

        // Filter
        filter_background: '#FBFBFB',
        filter_separator: '#EBEBEB',

        // Top opportunities
        header_color: '#7d7d7d',
        sublabel_color: '#f5efef',
        heating_tile: '#C22B2B',
        heating_loading: '#A52424',
        lighting_tile: '#FFC03B',
        lighting_loading: '#d9a332',
        renewable_tile: '#9AD12C',
        renewable_loading: '#7eaa23',
        pointLoad_tile: '#606060',
        pointLoad_loading: '#353535',

        // Bar Chart
        color_not_specified: '#BCB292',
        bar_not_specified_grad: 'linear-gradient(0deg, rgba(188,178,146,0.0725) 0%, rgba(188,178,146,0.25) 100%)',

        color_office_buildings: '#A6D5A4',
        bar_office_buildings_grad: 'linear-gradient(0deg, rgba(166,213,164,0.0725) 0%, rgba(166,213,164,0.15) 100%)',

        color_hotels_and_restaurants: '#D5AAAA',
        bar_hotels_and_restaurants_grad: 'linear-gradient(0deg, rgba(213,170,170,0.15) 0%, rgba(213,170,170,0.3) 100%)',

        color_healthcare: '#E2C08B',
        bar_healthcare_grad: 'linear-gradient(0deg, rgba(229,209,178,0.0725) 0%, rgba(229,209,178,0.15) 100%)',

        color_public_buildings: '#A2B38D',
        bar_public_buildings_grad: 'linear-gradient(0deg, rgba(162,179,141,0.0725) 0%, rgba(162,179,141,0.15) 100%)',

        color_industry: '#BCA5C1',
        bar_industry_grad: 'linear-gradient(0deg, rgba(188,165,193,0.725) 0%, rgba(188,165,193,0.15) 100%)',

        color_orange: '#D5983B',

        table_active_sort: '#E5FBFF',
        table_active_sort_border: '#D4F1F7',
        table_input_border: '#C0C0C0',
        table_disabled_background: '#FFECED',
        table_disabled_headline: '#DD0013',
        table_disabled_subheadline: '#FE1A44',

        toggle_thumb_background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
        toggle_track_default: 'rgba(32,86,167,0.5)',
        toggle_track_edit: 'rgba(255,192,59,0.5)',

        form_input_shadow: '#E3E3E3',
        form_input_border: 'rgba(144,144,144,0.25)',
        bulk_update_border: 'rgba(144,144,144,0.15)',

        building_stats_cost: '#EEDCDC',
        building_stats_cost_before: 'rgba(205, 0, 0, .25)',
        building_stats_cost_after: '#CD0000',

        building_stats_consumption: '#FCF3E1',
        building_stats_consumption_before: 'rgba(255, 130, 0, .25)',
        building_stats_consumption_after: '#FF8200',

        building_stats_emissions: '#E6EBDB',
        building_stats_emissions_before: 'rgba(145, 212, 8, .25)',
        building_stats_emissions_after: '#91D408',

        building_stats_energy_a: '#017F3D',
        building_stats_energy_b: '#2C9F28',
        building_stats_energy_c: '#9DCB3B',
        building_stats_energy_d: '#FFF203',
        building_stats_energy_e: '#F7AF1D',
        building_stats_energy_f: '#ED6823',
        building_stats_energy_g: '#E31F22',

        // Fullscreen Gallery
        overlay: 'rgba(0,0,0,.75)'
    }
}

export default new Variables()
