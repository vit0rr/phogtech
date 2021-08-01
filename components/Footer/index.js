export default function Footer(){
    return (
        <footer>
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <span id="footerCopy">Copyright © 2021 - Phog Tech</span>
                    </div>
                    <div className="col-sm">
                        <span id="footerIcons"><a href="https://github.com/vit0rr" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/vitor-souza-397259206/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-linkedin"></i></a></span>
                    </div>
                    <div className="col-sm">
                        <span id="devPor">Desenvolvido por</span> <span id="devName">Vitor Souza</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}