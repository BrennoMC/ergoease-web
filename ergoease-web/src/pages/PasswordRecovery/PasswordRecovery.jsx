import './PasswordRecovery.scss';
import LogoPartOne from '../../assets/img/logo_part1.svg'
import LogoPartTwo from '../../assets/img/logo_part2.svg'
import InputPassword from '../../components/InputLoginPage/InputPassword';
import '../LoginPage/LoginPage.scss'


function PasswordRecovery() {
    return (
        <div className="container-password">

            <div className="container-password__content-left">
                <div className="container-password__content-left__content-info">

                    <div class="flex-container">
                        <h1>Encontre sua senha</h1>

                        <InputPassword
                            id='E-mail'
                            type='text'
                            label='Insira seu email ou CPF para recuperar sua senha'
                            isClass={true}
                        />
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

export default PasswordRecovery