import styles from './Rating.module.css'
import { categories } from '../Category'
import { useState } from 'react'
import marvel from '../../json/marvel.json'

function Rating(){  

    const [ selectedFase, setSelectedFase ] = useState();
    const [ selectedFilme, setSelectedFilme ] = useState();
    const [ nota, setNota ] = useState();
    const [ avaliacao, setAvaliacao ] = useState();
    const [ listaAvaliacoes, setListaAvaliacoes ] = useState([]);
    const [ notas, setNotas] = useState();
    const [ errors, setErrors ] = useState();

    const filmes = marvel.filter((filmes) => 
        filmes.categoria === selectedFase
    )

    console.log(marvel[10].titulo)

    function onSave(e) {
        e.preventDefault();
        console.log(selectedFase, selectedFilme, nota, avaliacao)

        if(!selectedFase || selectedFase === '-') {
            setErrors("ERRO: Escolha uma fase")
            return
        } else {
            setErrors('')
        }

        if(!selectedFilme || selectedFilme === '-') {
            setErrors("ERRO: Escolha um filme")
            return
        } else {
            setErrors('')
        }

        if(!nota || nota === '-') {
            setErrors("ERRO: Escolha sua nota")
            return
        } else {
            setErrors('')
        }

        if(!avaliacao || avaliacao === '-') {
            setErrors("ERRO: Digite seu comentário")
            return
        } else {
            setErrors('')
        }

        const indiceFilme = marvel.findIndex(i => i.titulo === selectedFilme)

        // const novaAvaliacao = {avaliacao}
        // setListaAvaliacoes(...listaAvaliacoes, {avaliacao})
        // const novaNota = {nota}
        // setNotas(...notas, novaNota)
        
        marvel.push()
        // marvel[indiceFilme].comentarios = listaAvaliacoes;
        localStorage.setItem('Marvel', JSON.stringify(marvel))
        console.log(marvel[indiceFilme].nota)

        setSelectedFase('')
        setSelectedFilme('')
        setNota('')
        setAvaliacao('')

    }

    return (
        <section className={styles.container}>
            <h2>Avaliação do filme</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>Fase</label>
                    <select 
                        value={selectedFase} 
                        onChange={(e) => setSelectedFase(e.target.value)}
                        required="required"
                    >
                        <option value='-'>Selecione uma Fase</option>
                        {categories.map(fase => {
                            return <option key={fase.id} value={fase}>{fase}</option>
                        }) }                        
                    </select>
                </div>
                <div>
                    <label>Filme</label>
                    <select 
                        value={selectedFilme} 
                        onChange={(e) => setSelectedFilme(e.target.value)}
                        required="required"
                    >
                        <option value='-'>Selecione um Filme</option>
                        {filmes.map(filme => {
                            return <option key={filme.id} value={filme.titulo}>{filme.titulo}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Dê sua nota</label>
                    <select
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        required="required"
                    >
                        <option value='-'>Escolha a nota</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div>
                    <label>Avaliação do filme</label>
                    <textarea
                        rows={4}
                        value={avaliacao}
                        onChange={(e) => setAvaliacao(e.target.value)}
                        placeholder="Digite sua avaliação sobre o filme"
                        required="required"
                        minLength={3}
                    >
                    </textarea>
                </div>
                <div>
                    <button>Enviar avaliação</button>
                </div>
                <div>
                    { errors }
                </div>
            </form>
        </section>
    )
}

export default Rating;