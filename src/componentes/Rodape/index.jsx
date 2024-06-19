import styled from "styled-components";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const RodapeEstilizado = styled.footer`
    background-color: var(--preto);
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
`

const Texto = styled.h2`
    color: white;
    text-align: center;
    font-weight: 400;
    font-size: 1.125rem;
`

const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const Icone = styled.a`
    color: white;
    font-size: 2rem;
    &:hover{ 
        transform: scale(1.3);
    }
`
    
const Rodape = ({ }) => {
    return (
        <RodapeEstilizado>
            <Texto>Desenvolvido por Sidney Rodrigues Magalhães</Texto>
            <RedesSociais>
                <Icone href="https://github.com/sidneygyne" target="_blank" rel="noopener noreferrer" >
                    <IoLogoGithub alt="imagem github" />
                </Icone>
                <Icone href="https://www.linkedin.com/in/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoLinkedin alt="imagem linkedin" />
                </Icone>
                <Icone href="https://instragram.com/sidneygyn" target="_blank" rel="noopener noreferrer" >
                    <IoLogoInstagram alt="imagem instragram" />
                </Icone>
            </RedesSociais>
        </RodapeEstilizado>
    )
}

export default Rodape