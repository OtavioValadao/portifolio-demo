import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class BodyComponent {

  ano1 = "2018";
  cargo1 = "Guarda Vidas";
  empresa1 = "Minas Tenias Nautico Clube";

  ano2 = "2020";
  cargo2 = "Assistente de TI";
  empresa2 = "RedeFlex";

  ano3 = "2021 - Dias Atuais";
  cargo3 = "Desenvolvedor de Sistemas";
  empresa3 = "Engineering do Brasil";


  textoCriativo : String = "A vida é uma aventura cheia de altos e baixos, mas é nos momentos mais desafiadores que encontramos a força para crescer e evoluir. Não desista diante das dificuldades, pois elas são apenas uma oportunidade para mostrar o seu potencial e alcançar coisas incríveis. Mantenha sua mente aberta para novas possibilidades e seu coração cheio de determinação. Com persistência e coragem, você pode alcançar tudo o que deseja. Acredite em si mesmo e siga em frente, pois o mundo está esperando pelas suas grandes conquistas.";
  tituloCriativo : String = "Olá amigo!";
  habilidadeCriativo : String = "Criativo";

  textoCritico  : String = "Com uma mente analítica e uma visão clara, sou capaz de identificar áreas que precisam de melhoria e fornecer sugestões úteis para alcançar resultados melhores.";
  tituloCritico  : String = "Seja muito bem vindo!";
  habilidadeCritico : String = "Crítico";

  textoEmpatia  : String = "Se você está procurando alguém para trabalhar em equipe em um projeto ou simplesmente precisa de alguém para conversar, eu sou a escolha perfeita para você. Com uma natureza amorosa e compreensiva, tenho uma presença calmante e positiva em qualquer situação.";
  tituloEmpatia  : String = "Tudo pela nossa futura equipe!!!";
  habilidadeEmpatia : String = "Empático";

}
