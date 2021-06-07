import styled, { css } from 'styled-components';

export const fullScreen = css`
    position: fixed;
    top: 0;
    left: 0; 
    bottom: 0;
    right: 0;
`;

export const flexCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    ${fullScreen}
    ${flexCenter}
`;

export const button = css`
    background: #1ed760;
    padding: 1em 2em;
    border-radius: 50px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
`;

export const Table = styled.table`
    overflow-y: auto;
    display: inline-block;
    
    td { padding-right: 10px }
`;