import React from "react";
import "./index.css";
import { Animation, Section } from "theme";

export default function Price() {
  return (
    <Animation type="fadeUp">
      <Section anchor="price" heading="Цена">
        <div className="price">
          <div className="wrapper">
            <div className="package">
              <div className="name">Gladiator</div>
              <div className="price">5000₽</div>
              <a href="https://t.me/jeanitwow" className="trial">Связаться со мной</a>
              <hr />
              <ul>
                <li>
                  <strong>4 часа обучения</strong>
                </li>
                <li>
                  <strong>10 разборов игр</strong>
                </li>
                <li>
                  <strong>30 мин обратной связи после обучения</strong>
                </li>
              </ul>
            </div>
            <div className="package brilliant">
              <div className="name">PRO</div>
              <div className="price">40000₽</div>
              <a href="https://t.me/jeanitwow" className="trial">Связаться со мной</a>
              <hr />
              <ul>
                <li>
                  <strong>Месяц трансформации в машину для убийств</strong>
                </li>
                <li>
                  <strong>9 часов обучения в неделю</strong>
                </li>
                <li>
                  <strong>Консультация по игре в любое время</strong>
                </li>

              </ul>
            </div>
            <div className="package">
              <div className="name">Teammate</div>
              <div className="price">1500₽/час</div>
              <a href="https://t.me/jeanitwow" className="trial">Связаться со мной</a>
              <hr />
              <ul>
                <li>
                  <strong>Разборы игр в дискорде</strong>

                </li>
                <li>
                  <strong>Игра на арене со мной</strong>

                </li>
                <li>
                  <strong>Обучение с почасовой оплатой</strong>

                </li>
              </ul>
            </div>
          </div>
        </div>
       <ul> <strong>Способы оплаты</strong>
        <li>Банковская карта РФ</li>
        <li>Криптовалюта(BTC, USDT)</li>
        <li>Золото World of Warcraft</li>
       </ul>

      </Section>
    </Animation>
  );
}
