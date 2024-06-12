import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const ColunaFotos = styled.section`
    gap:16px;
    display: flex;
    flex-direction: column;
    
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    border: 2px solid  #C98CF1;
    border-radius: 10px;
    background-color: transparent;
    color: #fff;
    margin-top: 16px;
    padding: 12px 20px;
    align-items: center;
    width: 100%;
    cursor: pointer;
    font-size: 20px;
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(fotos => <Imagem key={fotos.id} src={fotos.path} alt={fotos.alt} />)}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares