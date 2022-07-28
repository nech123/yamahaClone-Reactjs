import { useState } from "react";
import {Container} from "./styles";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Motor
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Suspensão
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Câmbio
        </button>

        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Freios
        </button>   
         
          <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Dimensões
        </button>
      </div>

 
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <table>
              <tbody>
                <tr>
                  <td>Tipo</td>
                  <td>DOHC, 8 válvulas, 4 tempos, Refrigeração líquida</td>
                </tr>

                <tr>
                  <td>Potência Máxima</td>
                  <td>42 cv(10.750 rpm)</td>
                </tr>

                <tr>
                  <td>Torque Máxima</td>
                  <td>3,0 kgf.m(9.000)</td>
                </tr>
                <tr>
                  <td>Cilindros</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>Cilindrada</td>
                  <td>321 cc</td>
                </tr>

                <tr>
                  <td>Diametro X curso</td>
                  <td>68,0 mm X 44,1mm</td>
                </tr>

                <tr>
                  <td>Taxa de compressão</td>
                  <td>11,2:1</td>
                </tr>

                <tr>
                  <td>Alimentação</td>
                  <td>Injeção eletrônica</td>
                </tr>

                <tr>
                  <td>Tipo de combustível</td>
                  <td>Gasolina</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <table>
              <tbody>
                <tr>
                  <td>Suspensão dianteira</td>
                  <td>Garfo telescópico invertido</td>
                </tr>

                <tr>
                  <td>Suspensão traseira</td>
                </tr>

                <tr>
                  <td>Curso da suspensão dianteira</td>
                  <td>130mm (suspensão) 130mm(roda)</td>
                </tr>
                <tr>
                  <td>Curso da suspensão traseira</td>
                  <td>45mm(suspensão) /125mm(roda)</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <table>
              <tbody>
                <tr>
                  <td>Sistema de  transmissão</td>
                  <td>Sicronizada, 6 velocidades</td>
                </tr>

                <tr>
                <td>Transmissão final</td>
                <td>Corrente</td>
                </tr>

                <tr>
                  <td>Embreagem</td>
                  <td>Multi-Disco úmido</td>
                </tr>

              </tbody>
            </table>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
           <table>
              <tbody>
                <tr>
                  <td>Sistema de Freios</td>
                  <td>ABS</td>
                </tr>

                <tr>
                <td>Freio Dianteiro</td>
                <td>Disco hidráulico com sistema anti bloqueio</td>
                </tr>

                <tr>
                  <td>Ø do freio dianteiro</td>
                  <td>298mm (Ø externo)</td>
                </tr>

                <tr>
                  <td>Freio traseiro</td>
                  <td> Disco hidráulico com sistema anti bloqueio</td>
                </tr>

                <tr>
                  <td>Ø do freio traseiro</td>
                </tr>

              </tbody>
            </table>
        </div>

        <div
        className={toggleState === 5 ? "content  active-content" : "content"}
        >
           <table>
              <tbody>
                <tr>
                  <td>Altura mínima do solo</td>
                  <td>160 mm</td>
                </tr>

                <tr>
                <td>Distância entre eixos</td>
                <td>1380 mm</td>
                </tr>

                <tr>
                  <td>Comprimento x Largura x Altura</td>
                  <td>2.090mm X 730 mm X 1.140mm</td>
                </tr>

                <tr>
                  <td>Pneu traseiro</td>
                  <td> 140/70 R17 M/C (66H) /METZELER</td>
                </tr>

                <tr>
                  <td>Altura do assento</td>
                  <td>780mm</td>
                </tr>

                
                <tr>
                  <td>Pneu dianteiro</td>
                  <td>110/70 R17(54H)/METZELER</td>
                </tr>


                <tr>
                  <td>Tipo de chassi</td>
                  <td>Diamante</td>
                </tr>


                <tr>
                  <td>Capacidade do tanque(reserva)</td>
                  <td>14,2L(3L)</td>
                </tr>

              </tbody>
            </table>
        </div>
      
      </div>
    </Container>
  );
}

export default Tabs;
