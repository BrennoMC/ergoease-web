import InputLoginPage from '../../components/InputLoginPage/InputLoginPage';
import './LoginPage.scss';
import LogoPartOne from '../../assets/img/logo_part1.svg'
import LogoPartTwo from '../../assets/img/logo_part2.svg'

function LoginPage() {

  return (
    <div className="container">
            
            <div className="container__content-left">
                <div className="container__content-left__content-info">
                  
                  <h1>Login</h1> 
                  
                  <InputLoginPage 
                    id='E-mail'
                    type='text' 
                    label='E-mail'
                  />    
                  
                  <InputLoginPage 
                    id='Senha'
                    type='password' 
                    label='Senha'
                  /> 

                  <div className='container__content-left__content-info__justify'>
                    <a href="" className='container__content-left__content-info__justify__password'>
                      Esqueci minha senha
                    </a>
                  </div>
                 
                </div>
                <div className="container__content-left__logo-part-one">
                    <img src={LogoPartOne} alt="Formas geométricas a esquerda" />
                </div>
            </div>
          
            <div className="container__content-right">
                <img 
                    src={LogoPartTwo} 
                    alt="Formas geométricas a direita" 
                    className="container__content-right__logo-part-two"
                />
            </div>
        </div>
  )
}

export default LoginPage;
