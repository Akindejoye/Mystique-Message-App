import React from 'react';

const UserInfographic = () => {

    const boxSize = {
        width: '74.5rem',
        height: '34.3rem',
        marginTop: '1.6rem',
        backgroundColor: '#fff'
    }

    const heading = {
        fontSize: '1.6rem',
        fontWeight: '500',
        lineHeight: '137.8%',
        color: '#053a3e',
        display: 'flex',
        justifyContent: 'flex-Start',
        paddingTop: '1.8rem',
        marginLeft: '6.6rem',
        marginBottom: '9px'
    }

    const chartText = {
        fontSize: '1.1rem',
        fontWeight: '400',
        lineHeight: '137.8%',
        color: '#888888',
        marginLeft: '6.6rem'
    }

    return (
        <div style= {boxSize}>
            <div>
                <h2 style= {heading}>User Infographic</h2>
                <p style= {chartText}>This chart shows users signing up rate over time</p>
            </div>
        </div>
    );
}
 
export default UserInfographic;