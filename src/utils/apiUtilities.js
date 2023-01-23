export const BASE_URL = 'https://buyer-ref-app-stage.ondc.org';
export const UPDATE_ORDER = '/clientApis/v1/update';
export const GET_MESSAGE_ID = '/clientApis/v1/search';
export const GET_PRODUCTS = '/clientApis/v1/on_search?messageId=';
export const GET_LOCATION = '/mmi/api/mmi_query?query=';
export const GET_LOCATION_FROM_LAT_LONG = '/mmi/api/mmi_latlong_info?';
export const GET_LATLONG = '/mmi/api/mmi_place_info?eloc=';
export const DELIVERY_ADDRESS = '/clientApis/v1/delivery_address';
export const UPDATE_ADDRESS = '/clientApis/v1/update_delivery_address/';
export const BILLING_ADDRESS = '/clientApis/v1/billing_details';
export const UPDATE_BILLING_ADDRESS = '/clientApis/v1/update_billing_details/';
export const GET_ORDERS = '/clientApis/v1/orders';
export const GET_SELECT = '/clientApis/v2/select';
export const ON_GET_SELECT = '/clientApis/v2/on_select?';
export const INITIALIZE_ORDER = '/clientApis/v2/initialize_order';
export const ON_INITIALIZE_ORDER = '/clientApis/v2/on_initialize_order?';
export const CONFIRM_ORDER = '/clientApis/v2/confirm_order';
export const ON_CONFIRM_ORDER = '/clientApis/v2/on_confirm_order?';
export const SIGN_PAYLOAD = '/clientApis/payment/signPayload';
export const CANCEL_ORDER = '/clientApis/v1/cancel_order';
export const ON_CANCEL_ORDER = '/clientApis/v1/on_cancel_order?';
export const TRACK_ORDER = '/clientApis/v2/track';
export const ON_TRACK_ORDER = '/clientApis/v2/on_track?';
export const SUPPORT = '/clientApis/v2/get_support';
export const ON_SUPPORT = '/clientApis/v2/on_support?';
export const CALL = '/knowlarity/api/call-patron';
export const FILTER = '/clientApis/v1/getFilterParams?messageId=';
export const GET_STATUS = '/clientApis/v2/order_status';
export const ON_GET_STATUS = '/clientApis/v2/on_order_status?messageIds=';
export const GET_GPS_CORDS = '/mmi/api/mmi_pin_info?pincode=';
export const ON_UPDATE_ORDER = '/clientApis/v2/on_update?';
