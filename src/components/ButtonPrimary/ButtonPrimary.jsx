import './ButtonPrimary.css'

function ButtonPrimary ({children,onClick}){
    return (
        <button onClick={onClick} className='buttonPrimary'>
            {children}
        </button>
    )
}

export default ButtonPrimary