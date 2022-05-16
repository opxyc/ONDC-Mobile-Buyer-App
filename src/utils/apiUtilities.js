import Config from 'react-native-config';

export const BASE_URL = Config.BASE_URL;
export const GET_MESSAGE_ID = '/client/v1/search';
export const GET_PRODUCTS = '/client/v1/on_search?messageId=';
export const GET_LOCATION = '/mmi/api/mmi_query?query=';
export const GET_LOCATION_FROM_LAT_LONG = '/mmi/api/mmi_latlong_info?';
export const GET_LATLONG = '/mmi/api/mmi_place_info?eloc=';
export const GET_ADDRESS = '/client/v1/delivery_address';
export const ADD_ADDRESS = '/client/v1/delivery_address';
export const GET_ORDERS = '/clientApis/v1/orders';
export const GET_QUOTE = '/client/v2/get_quote';
export const ON_GET_QUOTE = '/client/v2/on_get_quote?';
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
