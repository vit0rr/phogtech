import DeliveryAddress from '../../assets/img/delivery_address.svg'
import Image from 'next/image'

export default function Contact(){
    return (
        <>
        <br/><br/><br/><br/><br/><br/>
        <div className="container" id="contatovH">
        <section id="contact">
            <div>
                <h1 className="display-5 centralizar" id="titleServicos">Contato</h1>
                <div className="page-header-ui-content pt-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6" id="borderContact">
                                <h4>Phog Tech:</h4>
                                <p className="page-header-ui-text mb-5">Caso queira conversar conosco, temos o email da Phog Tech: <br /><a href="mailto:phogtechcontato@gmail.com">phogtechcontato@gmail.com</a></p>
                                <h4>Equipe:</h4>
                                <p>
                                    Você também pode chamar individualmente nossa equipe caso prefira:
                                </p>
                                <ul>
                                    <li>Felipe Murata <a href="mailto:felipe.murata10@gmail.com">felipe.murata10@gmail.com</a></li>
                                    <li>Pedro Caires <a href="mailto:pedrogcs0104@gmail.com">pedrogcs0104@gmail.com</a></li>
                                    <li>Vitor Souza <a href="mailto:vi.souza.almeida@protonmail.com">vi.souza.almeida@protonmail.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"><Image src={DeliveryAddress}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
    )
}