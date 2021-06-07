import {useEffect} from "react";

export const parseQueryParams = (query: string, separator: string = "&"): { [key: string]: string; } => {
    if (!query) return {};

    const pieces = query.split(separator);
    const params: any = {};

    for (let i = 0; i < pieces.length; i++) {
        const keyValuePair = pieces[i].split("=");
        const key = decodeURIComponent(keyValuePair[0]).trim();
        params[key] = keyValuePair.length < 2 ? '' : decodeURIComponent(keyValuePair[1]);
    }

    return params;
};

export const getCookie = (key: string): string => {
    const cookies = parseQueryParams(document.cookie, ';');
    return cookies[key];
};

export const setCookie = (key: string, value: string, maxAge: number = 0): void => {
    let cookie = `${key}=${value}`;
    if (maxAge) {
        cookie += `;max-age=${maxAge}`;
    }
    document.cookie = cookie;
};

export const clearCookie = (key: string): void => {
    setCookie(key, '', -1);
};

export const getToken = () => {
    const hash = parseQueryParams(location.hash.substring(1));
    let token = hash['access_token'];
    if (token) {
        const maxAge = +hash['expires_in'];
        setCookie('access_token', token, maxAge);
        location.hash = '';
    } else {
        token = getCookie('access_token');
    }
    return token;
};

export const makeRequestAsync = async (url: string):Promise<any> => {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    });
    if(response.ok) {
        return await response.json();
    }
    return null;
};
