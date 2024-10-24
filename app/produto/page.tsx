"use client";

import { useState } from "react";
import { usePessoas } from "../Providers/contextProvider";

interface Produto {
    id: number;
    created_at: string;
    nome: string;
    quantidade: number;
    imagem: string | null;
    medida: string;
    recorrencia: string;
}

export default function Produto() {
    const { numeroDePessoas } = usePessoas();
    const [filtroRecorrencia, setFiltroRecorrencia] = useState<string | null>(null);

    const produtos: Produto[] = [
        {
          "id": 4,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Macarrão",
          "quantidade": 500,
          "imagem": "https://giassi.vtexassets.com/arquivos/ids/1158478/Macarrao-de-Semola-com-Ovos-Penne-Renata-Pacote-500g.png?v=638509726134830000",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 5,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Bife",
          "quantidade": 4,
          "imagem": "https://static.itdg.com.br/images/622-auto/a572fedadf750b72be726f3928a81ac5/bife-perfeito.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 6,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "ovo",
          "quantidade": 24,
          "imagem": "https://media.istockphoto.com/id/155358881/pt/foto/ovo-estrelado-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=0&k=20&c=cBvEsPG3AxTakKQgR6SKK6qsiYbOk3XvIvJH3CIk3Yo=",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 8,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Molho de tomate",
          "quantidade": 1,
          "imagem": "https://static.paodeacucar.com/img/uploads/1/908/24110908.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 11,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "frango",
          "quantidade": 600,
          "imagem": "https://superpao.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fsuperpao.vtexassets.com%2Farquivos%2Fids%2F431740%2FPeito-de-Frango-Resfriado-Kg.jpg%3Fv%3D638481832568430000",
          "medida": "GR",
          "recorrencia": "Semanal"
        },
        {
          "id": 13,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Azeite",
          "quantidade": 1,
          "imagem": "https://diawine.agilecdn.com.br/4189_1.jpg",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 14,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Café",
          "quantidade": 1.2,
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkX7PWH6L4dJ7KdPamNyhK94SumUqHqOnKrA&s",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 17,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Milho em conserva",
          "quantidade": 3,
          "imagem": "https://mercantilatacado.vtexassets.com/arquivos/ids/187834-800-auto?v=638352345644000000&width=800&height=auto&aspect=true",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 18,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Atum lata",
          "quantidade": 2,
          "imagem": "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/257680.jpg",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 20,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Vinagre",
          "quantidade": 500,
          "imagem": "https://t76496.vtexassets.com/arquivos/ids/155438/alcool.jpg?v=637516767918600000",
          "medida": "ML",
          "recorrencia": "Mensal"
        },
        {
          "id": 21,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Maionese",
          "quantidade": 240,
          "imagem": "https://ibassets.com.br/ib.item.image.large/l-0bb27cf2a14c450ead9ab29f0fa2b4d1.jpeg",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 29,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Detergente",
          "quantidade": 2,
          "imagem": "https://images.tcdn.com.br/img/img_prod/694926/detergente_ype_lava_loucas_neutro_liquido_500ml_360129_1_dabf73d81954210caed4e6bdd961a981.jpg",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 31,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Água sanitaria",
          "quantidade": 1,
          "imagem": "https://t10917.vteximg.com.br/arquivos/ids/166136-1000-1000/AGUA-SANITARIA-EMB---2-LT-YPE_IMG1.jpg?v=638513137906630000",
          "medida": "LI",
          "recorrencia": "Mensal"
        },
        {
          "id": 33,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Presunto",
          "quantidade": 100,
          "imagem": "https://www.friella.com.br/images/category_product/large/cpa.jpg",
          "medida": "GR",
          "recorrencia": "Semanal"
        },
        {
          "id": 37,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Sabão em pedra",
          "quantidade": 2,
          "imagem": "https://savegnagoio.vtexassets.com/arquivos/ids/440966-800-450?v=638458412787530000&width=800&height=450&aspect=true",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 40,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Creme de leite",
          "quantidade": 4,
          "imagem": "https://www.italac.com.br/wp-content/uploads/2018/03/CREME-DE-LEITE-200gr-1024x1024.png",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 41,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Fubá",
          "quantidade": 200,
          "imagem": "https://apoioentrega.vteximg.com.br/arquivos/ids/799505/2650_0.png?v=638543062395070000",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 42,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Banana",
          "quantidade": 7,
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73g4A_7nEAKJceTUgygobApixoAwmcMQySg&s",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 44,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Tomate",
          "quantidade": 5,
          "imagem": "https://redemix.vteximg.com.br/arquivos/ids/206084-1000-1000/1644.jpg?v=638350587987700000",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 9,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Açucar",
          "quantidade": 1,
          "imagem": "https://propao.agilecdn.com.br/1744_1.jpg",
          "medida": "KG",
          "recorrencia": "Mensal"
        },
        {
          "id": 3,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Feijão",
          "quantidade": 500,
          "imagem": "https://unapel.com.br/wp-content/uploads/2022/09/tipos-de-feijao.jpg",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 7,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": " Pão Francês",
          "quantidade": 7,
          "imagem": "https://static.paodeacucar.com/img/uploads/1/354/607354.png",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 12,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Óleo",
          "quantidade": 1,
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jdp2XReeMtms63YsdeRz9z33ZamtV97yAg&s",
          "medida": "Frasco",
          "recorrencia": "Mensal"
        },
        {
          "id": 10,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Sal",
          "quantidade": 500,
          "imagem": "https://static.paodeacucar.com/img/uploads/1/563/664563.png",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 15,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Achocolatado",
          "quantidade": 1,
          "imagem": "https://images-americanas.b2w.io/produtos/6911726/imagens/nescau-2-0-actigen-e-achocolatado-em-po-400g-nestle/6911726_1_large.jpg",
          "medida": "KG",
          "recorrencia": "Mensal"
        },
        {
          "id": 16,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Leite",
          "quantidade": 6,
          "imagem": "https://ibassets.com.br/ib.item.image.large/l-c54acdc6d1da4f50a37252efe847bbd7.jpeg",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 22,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Manteiga",
          "quantidade": 400,
          "imagem": "https://naturaldaterra.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/0/104847---7893000394209---margarina-qualy-c-sal-sadia-500g.jpg",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 19,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Farinha de trigo",
          "quantidade": 1,
          "imagem": "https://static.itdg.com.br/images/1200-630/56804880bda372e44a8e1fd969fe2a77/tipos-de-farinha-de-trigo-veja.jpg",
          "medida": "KG",
          "recorrencia": "Mensal"
        },
        {
          "id": 23,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Requeijão",
          "quantidade": 400,
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rD7WbWppu1Xp2ASuN7EP58Swa8TpGwf3sg&s",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 24,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Fermento",
          "quantidade": 1,
          "imagem": "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/9a11df096331file.png",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 26,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Bolacha  salgada",
          "quantidade": 3,
          "imagem": "https://docemalu.vtexassets.com/arquivos/ids/5338526/144304-1.jpg?v=638421685089600000",
          "medida": "Pacote",
          "recorrencia": "Mensal"
        },
        {
          "id": 25,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Bolacha doce",
          "quantidade": 3,
          "imagem": "https://marcafortaleza.b-cdn.net/wp-content/uploads/2018/09/mkp_Fortaleza_Reduc_maria_chocolate-1412px.png",
          "medida": "Pacote",
          "recorrencia": "Mensal"
        },
        {
          "id": 28,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Amaciante",
          "quantidade": 500,
          "imagem": "https://compremais.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F414607%2FAmaciante-Concentrado-Mais-Perfume-Intenso-Downy-15L.jpg%3Fv%3D638549584457930000",
          "medida": "ML",
          "recorrencia": "Mensal"
        },
        {
          "id": 27,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Sabão em pó",
          "quantidade": 1,
          "imagem": "https://d1rpfggbb8iuri.cloudfront.net/Custom/Content/Products/11/69/1169276_sabao-em-po-800g-omo-lavagem-perfeita_m10_638173995121213998.jpg",
          "medida": "KG",
          "recorrencia": "Mensal"
        },
        {
          "id": 30,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Esponja de louça",
          "quantidade": 4,
          "imagem": "https://5df841b7b6204c6b.cdn.gocache.net/images_p/805681/esponja-lava-louca-multiuso-dupla-face-para-limpeza-pesada-scotch-brite-unitario-110mm-x-75mm-x-20mm-3m-h0001373796-4a477622..jpg",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 32,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Carne moída",
          "quantidade": 400,
          "imagem": "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Carne-Moida.png",
          "medida": "GR",
          "recorrencia": "Semanal"
        },
        {
          "id": 39,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Leite condensado",
          "quantidade": 2,
          "imagem": "https://www.mococa.com.br/wp-content/uploads/2022/03/LCO395g.png",
          "medida": "Unidade",
          "recorrencia": "Mensal"
        },
        {
          "id": 36,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Linguiça",
          "quantidade": 500,
          "imagem": "https://i0.wp.com/www.cofril.com.br/wp-content/uploads/2013/09/2015-09-23_Emb-14-Pernil-Especial-Churrasco_001-Editar1.jpg?fit=800%2C800&ssl=1",
          "medida": "GR",
          "recorrencia": "Mensal"
        },
        {
          "id": 38,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Desinfetante",
          "quantidade": 1,
          "imagem": "https://ferragemtitanium.cdn.magazord.com.br/img/2022/10/produto/128/desinfetante-lavanda-5l.png?ims=600x600",
          "medida": "L",
          "recorrencia": "Mensal"
        },
        {
          "id": 43,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Laranja",
          "quantidade": 7,
          "imagem": "https://static.wixstatic.com/media/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg/v1/crop/x_2,y_46,w_1000,h_658/fill/w_400,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 34,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Muçarela",
          "quantidade": 100,
          "imagem": "https://imgs.search.brave.com/vm4MPgMpo18L1YiwNZDGNHRPgLJZZ5ziPq363WPu9OU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubXVuZG9lZHVj/YWNhby51b2wuY29t/LmJyL211bmRvZWR1/Y2FjYW8vMjAyNC8w/Mi9mb3RvZ3JhZmlh/LWRlLXF1ZWlqby1t/dWNhcmVsYS1lbS10/YWJ1YS1kZS1mcmlv/cy5qcGc",
          "medida": "GR",
          "recorrencia": "Semanal"
        },
        {
          "id": 47,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Uva",
          "quantidade": 1,
          "imagem": "https://samsclub.vtexassets.com/arquivos/ids/170614-800-450?v=637751108125270000&width=800&height=450&aspect=true",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 48,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Melão",
          "quantidade": 0.5,
          "imagem": "https://scfoods.fbitsstatic.net/img/p/melao-amarelo-unidade-70681/257183.jpg?w=800&h=800&v=no-change&qs=ignore",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 49,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Melancia",
          "quantidade": 0.5,
          "imagem": "https://revistacampoenegocios.com.br/wp-content/uploads/2020/11/Melancia-01.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 2,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": " Arroz",
          "quantidade": 1,
          "imagem": "https://www.estadao.com.br/resizer/v2/RVEWAUYKMVO3HLHCCCCEEVXDQM.jpg?quality=80&auth=cd6fd5be0b3e06d1cc7c79d2f661e3e299ff360ce1632b517de59a259f8e4c45&width=720&height=503&focal=607,376",
          "medida": "KG",
          "recorrencia": "Mensal"
        },
        {
          "id": 45,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Alface",
          "quantidade": 2,
          "imagem": "https://blog.belagro.com.br/content/uploads/2022/01/plantar-alface-750x422.jpg",
          "medida": "Maço",
          "recorrencia": "Semanal"
        },
        {
          "id": 46,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Pepino",
          "quantidade": 1,
          "imagem": "https://files.agro20.com.br/uploads/2019/07/pepino-3.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 50,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Agrião",
          "quantidade": 1,
          "imagem": "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/eayjdgkk/agriao-maco.jpg",
          "medida": "Maço",
          "recorrencia": "Semanal"
        },
        {
          "id": 51,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Abobrinha",
          "quantidade": 2,
          "imagem": "https://www.casabugre.com.br/cms03/wp-content/uploads/2014/06/abobrinha-vitoria-720x400.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 52,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Cenoura",
          "quantidade": 2,
          "imagem": "https://mercadoorganico.com/6443-large_default/cenoura-organica-500g-osm.jpg",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 53,
          "created_at": "2024-10-11 13:10:47.004516+00",
          "nome": "Limão",
          "quantidade": 8,
          "imagem": "https://cdn.awsli.com.br/2500x2500/2599/2599960/produto/245489855/limao-siciano-aberto-zcnpr0t63k.png",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        },
        {
          "id": 54,
          "created_at": "2024-10-24 14:54:27.271005+00",
          "nome": "Batata",
          "quantidade": 4,
          "imagem": "https://imgs.search.brave.com/wnHOVUabomhHmEt4kKVHeZwVjIKH0tKQfdxNmWL50MM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvZW50/cmV0ZW5pbWVudG8v/NGMvMjAxOC8wNi8x/NC9iYXRhdGEtaW5n/bGVzYS0xNTI5MDEy/MjEyODgzX3YyXzc1/MHg0MjEuanBn",
          "medida": "Unidade",
          "recorrencia": "Semanal"
        }
      ];

    const produtosFiltrados = filtroRecorrencia
        ? produtos.filter((produto) => produto.recorrencia === filtroRecorrencia)
        : produtos;

    return (
        <div className="overflow-x-auto">
            {/* Botões de filtro */}
            <div className="mb-4">
                <button
                    className="btn btn-primary mr-2"
                    onClick={() => setFiltroRecorrencia("Semanal")}
                >
                    Semanal
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setFiltroRecorrencia("Mensal")}
                >
                    Mensal
                </button>
                <button
                    className="btn btn-outline ml-2"
                    onClick={() => setFiltroRecorrencia(null)}
                >
                    Todos
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {produtosFiltrados.map((produto) => (
                    <div
                        key={produto.id}
                        className="p-4 border rounded-md flex flex-col items-center"
                    >
                        <div className="avatar">
                            <div className="mask mask-squircle h-24 w-24">
                                <img src={produto.imagem || ""} alt={produto.nome} />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="font-bold">{produto.nome}</h3>
                            <p>{(produto.quantidade * numeroDePessoas) + " " + produto.medida}</p>
                            <p className="text-sm text-gray-500">{produto.recorrencia}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
