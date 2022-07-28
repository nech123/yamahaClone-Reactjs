import {Container,ContainerModal} from './styles'
import Tabs from '../../ModalInfo'

import { useState } from 'react'
import Modal from 'react-modal';

import G60First from '../../../assets/bodyPage/G60First.jpg'
import G60Second from '../../../assets/bodyPage/G60Second.png'
import G60Tree from '../../../assets/bodyPage/G60Tree.jpg'
import G60Four from '../../../assets/bodyPage/G60Four.jpg'
import G60five from '../../../assets/bodyPage/g60five.jpg'
import G60six from '../../../assets/bodyPage/G60champions.jpg'
import G60seven from '../../../assets/bodyPage/g60price.jpg'


import {VscVerified} from 'react-icons/vsc'
import {AiFillLike} from 'react-icons/ai'
import {ImBook, ImCheckmark} from 'react-icons/im'




export function BodyG60(){



  const [modalIsOpen, setIsOpen] =useState(false);
  const [modalIsOpen1, setIsOpenMenu] =useState(false);
  const [modalGarantia, setModalGarantia] = useState(false)

  function openModal() {setIsOpen(true);}
  function closeModal() {setIsOpen(false);}

  function openModalManual() {setIsOpenMenu(true);}
  function closeModalManual() {setIsOpenMenu(false);}

  function openModalGarantia() {setModalGarantia(true);}
  function closeModalGarantia() {setModalGarantia(false);}

return(
  <>
    <Container>
      <div className="Performance">
        <div className="PerformanceText">
          <h3>| Performance</h3>
          <h1>Motor Cheio de História</h1>
          <p>A YZF-R3 World GP 60th Anniversary Edition comemora os 60 anos de competições e vitórias da Yamaha nas pistas ao redor do mundo.
            Com motor bicilíndrico de 321cc, desenvolve 42 cv e 3,0 kgf/m de torque, além da exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.
            Pilote a sua própria história com a supersport para todos os dias.
          </p>  
        </div>

        <div className="imgFirst">
        <img src={G60First} alt="YamahaG60"/>
        </div>
      </div>

      <div className="tecnologySport">
        <img src={G60Second} alt="PhotoDesign" />

          <div className="tecnologyText">
            <div className="tecnologyH1">
              <h3>| Tecnologia</h3>
                <h1>Painel Superesportivo</h1>
            </div>
      
      <div className="tecnologyP">
        <p>A tecnologia das pistas embarcada para o seu dia a dia, com painel 100% digital e multifuncional, com luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.</p>
      </div>

      </div>
    </div>

    <div className="tecnologySport">
      <img src={G60Tree} alt="PhotoDesign" />

        <div className="tecnologyText">
          <div className="tecnologyH1">
            <h3>| Conforto</h3>
              <h1>Pilote a história da yamaha todos os dias</h1>
          </div>
      
      <div className="tecnologyP">
        <p>Sua posição de pilotagem esportiva é complementada pela suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.</p>
      </div>

       </div>
    </div>


    <div className="tecnologySport">
      <img src={G60Four} alt="PhotoDesign" />

      <div className="tecnologyText">
        <div className="tecnologyH1">
          <h3>| Design</h3>
            <h1>O Clássico speed block yamaha</h1>
        </div>
      
      <div className="tecnologyP">
        <p>A edição comemorativa tem a pintura branca com o Yamaha Speed Block em vermelho. Vem com o number plate amarelo na parte frontal. Conta com o emblema alusivo ao aniversário no tanque e traz destaques dourados nas rodas, nos garfos e nos emblemas do diapasão, assim como os das Equipes da Yamaha de fábrica.</p>
      </div>

      </div>
    </div>

      <div className="videoYamada">
        <div className="Yamadaoptions">
          <div className='modal--total'>
           <button onClick={openModal}>Especificação</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <ContainerModal>
              <div className="modal-options">
                <div className="title--modal">
                  <h2><VscVerified className='icon--Modal'/>Especificação Técnica</h2>
                    <button onClick={closeModal}>Fechar</button>
                </div>
                    <div className="buttons--options">
            <Tabs/>
                    </div>
            </div> 
            </ContainerModal>
          </Modal>  

     
        

    <div className="manual">
      <button onClick={openModalManual}>Manual</button>
        <Modal
          isOpen={modalIsOpen1}
          onRequestClose={closeModalManual}
          overlayClassName="react-modal-overlay"
          className="react-modal-content">
        <ContainerModal>
        <div className='Manual--link'>
          <h1> <ImBook className='book--list'/>Manual e Catálogo de Preços</h1>

            <div className="links">
              <a href="/">MANUAL</a>
              <a href="/">CATÁLOGO DE PREÇOS</a>
            </div>
        </div>
        </ContainerModal>
      </Modal>
   </div>

   <div className="manual">
    <button onClick={openModalGarantia}>Garantia</button>
      <Modal
        isOpen={modalGarantia}
        onRequestClose={closeModalGarantia}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
      <ContainerModal>
        <div className='Manual--link'>
          <h1> <ImCheckmark className='garanted--list'/>Garantia</h1>

            <div className="garantia">
              <h1>4 Anos de Garantia - A maior do Mercado!</h1>
                <p>Aproveite os 4 anos de garantia que somente a Yamaha oferece, reforçando toda a tradição e a qualidade desta marca legitimamente japonesa.</p>
                  <AiFillLike className='hand--list'/>
            </div>
        </div>
      </ContainerModal>
      </Modal>
   </div>
  </div>

        <div className="videoImg">
          <img src={G60five} alt="g60" />
        </div>
        </div>
      </div>


      <div className="yamada--champions">
        
        <div className="img--champions">

          <img src={G60six} alt="//" />

        </div>

        <div className="img--text--champions">

          <div className="text--title--champions">
            <h3>| Yamalube R3 Blu cru cup</h3>
            <h1>O Maior campeonato monomarca da america latina</h1>
          </div>

          <div className="text-subtitle--champions">
            <p>A Yamaha revela jovens talentos a partir de 12 anos de idade e oferece emoção com segurança aos pilotos mais experientes. 
              A bordo das YZF-R3, preparadas e sorteadas em condições de igualdade, os 48 pilotos dão um show a parte nas 5 etapas e 10 corridas da Yamalube R3 bLU cRU Cup, 
              transmitidas ao vivo pelo YouTube da Yamaha Racing Brasil, Facebook da Yamaha Motor do Brasil e Band Sports.</p>
          </div>

        </div>
      </div>

      <div className="price--g60">
        <div className="price--img--g60">
          <img src={G60seven} alt="//" />
        </div>
        <div className="price--visible">
          <div className="price--visible--g60">
            <h1>R3 60th</h1>
            <h1>Anniversary</h1>
          </div>
          <div className="price--number">
            <h3>A partir de<p>R$</p> </h3>
            
            <h1> 31.890,00 *</h1>
          </div>
          <div className="price--status">
            <h4> + frete de acordo com o região</h4>
            <h4>* Exceto para o estado de sp (conforme decreto n° 65.253)</h4>
          </div>
          <div className="buy">
          </div>
        </div>
      </div>

      <div className="financiamento">
        <div className="finance">
          <h1>FINANCIAMENTO</h1>
        </div>
        <div className="entry">
          <div className="price--entry">
            <h1>Entrada</h1>
            <h2>R$ 9.891,00</h2>
          </div>

          <div className="sald">
            <h1>Saldo</h1>
            <h2>18x</h2>
            <h3>R$ 1.392,00</h3>
          </div>

          <div className="tax">
            <h1>Taxa</h1>
            <h2>0,49% a.m</h2>
          </div>
        </div>

        <div className="entry">
          <div className="price--entry">
            <h1>Entrada</h1>
            <h2>R$ 9.891,00</h2>
          </div>

          <div className="sald">
            <h1>Saldo</h1>
            <h2>18x</h2>
            <h3>R$ 1.392,00</h3>
          </div>

          <div className="tax">
            <h1>Taxa</h1>
            <h2>0,49% a.m</h2>
          </div>
        </div>

        <div className="simuFinance">
          <h1>Simule o seu financiamento</h1>
          <h2><a href="//">QUERO SABER MAIS +</a></h2>
        </div>
      </div>
      

      <div className="infoYamada">
        <div className="infoRev">
          <div className="concorcio">
            <div className="text--concorcio">
            <h1>Consórcio</h1>
            <h3>Planeje agora a compra da sua Yamaha</h3>
              </div>
            <h2><a href="//">.Quero saber mais +</a></h2>
          </div>

          <div className="concorcio">
            <div className="text--concorcio">
              <h1>Liberacred</h1>
              <h3>planeje a entrada e garanta o financiamento da sua Yamaha.</h3>
            </div>

            <h2><a href="//">.Quero saber mais +</a></h2>
          </div>
          </div>

          <div className="info--total">
            <p>
              "Modelo YZF R3 ABS WGP 60th 2023. Preço Público Sugerido: R$ 31.890,00 à vista, sem frete (exceto Estado de São Paulo, consulte uma concessionária da região). Preço de Venda R$ 32.967,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.077,00, ou financiamento na modalidade de CDC em 18 meses: Entrada de R$ 9.891,00 (30%) e parcelas mensais fixas e sucessivas de R$ 1.392,00. Taxa de juros de 0,49% a.m. e 6% a.a. Custo efetivo total (CET) 11,10% a.a., IOF no valor de R$ 90,55. Valor total a ser financiado R$ 23.919,55 e valor final total (com encargos de financiamento) de R$ 34.947,00. Ou em 36 meses: Entrada de R$ 9.891,00 (30%) e parcelas mensais fixas e sucessivas de R$ 835,00. Taxa de juros de 1,29% a.m. e 17% a.a. Custo efetivo total (CET) 19,64% a.a., IOF no valor de R$ 90,55. Valor total a ser financiado R$ 23.919,55 e valor final total (com encargos de financiamento) de R$ 39.951,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 530,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Condições de financiamento não aplicáveis para o Estado de São Paulo. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Bra Brasil S.A. https://www.yamahaservicosfinanceiros.com.br/banco. De 01/07/2022 a 31/07/2022, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRA Brasil S.A. https://www.yamahaservicosfinanceiros.com.br/banco. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
            </p>
          </div>

          <div className="info--alert">
            <p>AVISO DE FRAUDE

A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet. Para maiores informações, clique aqui.</p>
          </div>
          <div className="line--null"></div>
        
      </div>

      
    </Container>
    </>
  )
}