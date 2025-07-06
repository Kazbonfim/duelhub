import React from 'react'

function Header() {
    return (
        <div className='container mt-3'>
            <div className='d-flex'>
                <h1 className='text-start'>DuelHub</h1>
                <i className="bi bi-ticket text-danger ms-1"></i>
            </div>
            {/* <figcaption className="spaceMono blockquote-footer mt-1">
                Yami Yugi: <cite title="Source Title">É hora do duelo!</cite>
            </figcaption> */}
            <hr />
        </div>
    )
}

export default Header