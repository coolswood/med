import React, { useEffect } from 'react';

import one from './1.svg';
import sostav from './sostav.svg';
import opisanie from './opisanie.svg';
import group from './group.svg';
import svoistva from './svoistva.svg';
import protivopokaz from './protivopokaz.svg';
import ostorojno from './ostorojno.svg';
import berem from './berem.svg';
import sposob from './sposob.svg';
import pobo from './pobo.svg';
import vzaim from './vzaim.svg';
import osob from './osob.svg';
import proizv from './proizv.svg';
import pretenz from './pretenz.svg';
import Page from 'UI/Page';
import { Link } from 'react-router-dom';

export default () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    // @ts-ignore
    for (const anchor of anchors) {
      anchor.addEventListener('click', function (e: any) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID)!.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  });

  return (
    <>
      <div
        style={{
          color: '#E5E5E5',
          fontSize: 16,
          fontWeight: 600,
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      >
        ЛП 001621-060217
      </div>
      <Page isCross>
        <img width={'100%'} src={one} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 className="h2_pink">Содержание</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <a className="link_active" href="#sostav">
              СОСТАВ
            </a>
            <a className="link_active" href="#opisanie">
              Описание
            </a>
            <a className="link_active" href="#group">
              ФАРМАКОТЕРАПЕВТИЧЕСКАЯ ГРУППА
            </a>
            <a className="link_active" href="#svo">
              ФАРМАКОЛОГИЧЕСКИЕ СВОЙСТВА
            </a>
            <a className="link_active" href="#prim">
              ПОКАЗАНИЯ К ПРИМЕНЕНИЮ
            </a>
            <a className="link_active" href="#prot">
              ПРОТИВОПОКАЗАНИЯ
            </a>
            <a className="link_active" href="#ost">
              С ОСТОРОЖНОСТЬЮ
            </a>
            <a className="link_active" href="#berem">
              ПРИМЕНЕНИЕ ПРИ БЕРЕМЕННОСТИ И В ПЕРИОД ГРУДНОГО ВСКАРМЛИВАНИЯ
            </a>
            <a className="link_active" href="#spos">
              СПОСОБ ПРИМЕНЕНИЯ И ДОЗЫ
            </a>
            <a className="link_active" href="#pob">
              ПОБОЧНОЕ ДЕЙСТВИЕ
            </a>
            <a className="link_active" href="#peredoz">
              ПЕРЕДОЗИРОВКА
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '40%',
              paddingLeft: '40px',
            }}
          >
            <a className="link_active" href="#vzaim">
              ВЗАИМОДЕЙСТВИЕ С ДРУГИМИ ЛЕКАРСТВЕННЫМИ СРЕДСТВАМИ
            </a>
            <a className="link_active" href="#vli">
              ВЛИЯНИЕ НА СПОСОБНОСТЬ УПРАВЛЯТЬ ТРАНСПОРТНЫМИ СРЕДСТВАМИ И
              РАБОТАТЬ С МЕХАНИЗМАМИ
            </a>
            <a className="link_active" href="#forma">
              ФОРМА ВЫПУСКА
            </a>
            <a className="link_active" href="#uslov">
              УСЛОВИЯ ХРАНЕНИЯ
            </a>
            <a className="link_active" href="#srok">
              СРОК ГОДНОСТИ
            </a>
            <a className="link_active" href="#otp">
              УСЛОВИЯ ОТПУСКА
            </a>
            <a className="link_active" href="#urid">
              ЮРИДИЧЕСКОЕ ЛИЦО, НА ИМЯ КОТОРОГО ВЫДАНО
            </a>
            <a className="link_active" href="#proiz">
              Производитель
            </a>
            <a className="link_active" href="#adress">
              НАПРАВЛЯТЬ ПО АДРЕСУ
            </a>
          </div>
        </div>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="sostav" className="h2_pink">
          Состав
        </h2>
        <img width={'100%'} src={sostav} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="opisanie" className="h2_pink">
          Описание
        </h2>
        <img width={'100%'} src={opisanie} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="group" className="h2_pink">
          ФАРМАКОТЕРАПЕВТИЧЕСКАЯ ГРУППА
        </h2>
        <img width={'100%'} src={group} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="svo" className="h2_pink">
          ФАРМАКОЛОГИЧЕСКИЕ СВОЙСТВА
        </h2>
        <img width={'100%'} src={svoistva} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="prim" className="h2_pink">
          ПОКАЗАНИЯ К ПРИМЕНЕНИЮ
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          Контрацепция.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="prot" className="h2_pink">
          ПРОТИВОПОКАЗАНИЯ
        </h2>
        <img width={'100%'} src={protivopokaz} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="ost" className="h2_pink">
          С ОСТОРОЖНОСТЬЮ
        </h2>
        <img width={'100%'} src={ostorojno} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="berem" className="h2_pink">
          ПРИМЕНЕНИЕ ПРИ БЕРЕМЕННОСТИ И В ПЕРИОД ГРУДНОГО ВСКАРМЛИВАНИЯ
        </h2>
        <img width={'100%'} src={berem} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="spos" className="h2_pink">
          СПОСОБ ПРИМЕНЕНИЯ И ДОЗЫ
        </h2>
        <img width={'100%'} src={sposob} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="pob" className="h2_pink">
          ПОБОЧНОЕ ДЕЙСТВИЕ
        </h2>
        <img width={'100%'} src={pobo} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="peredoz" className="h2_pink">
          ПЕРЕДОЗИРОВКА
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          Повторное применение препарата Зоэли® в дозах, которые в 5 раз
          превышали рекомендуемые, и однократный прием номегэстрола ацетата в
          дозах, которые в 40 раз превышали рекомендуемые, не сопровождались
          нежелательными явлениями. Симптомы, которые могут возникнуть при
          передозировке: тошнота, рвота, кровянистые выделения из влагалища.
          Антидотов не существует. Дальнейшее лечение должно быть
          симптоматическим.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="vzaim" className="h2_pink">
          ВЗАИМОДЕЙСТВИЕ С ДРУГИМИ ЛЕКАРСТВЕННЫМИ СРЕДСТВАМИ
        </h2>
        <img width={'100%'} src={vzaim} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 className="h2_pink">ОСОБЫЕ УКАЗАНИЯ</h2>
        <img width={'100%'} src={osob} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="vli" className="h2_pink">
          ВЛИЯНИЕ НА СПОСОБНОСТЬ УПРАВЛЯТЬ ТРАНСПОРТНЫМИ СРЕДСТВАМИ И РАБОТАТЬ С
          МЕХАНИЗМАМИ
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          Препарат Зоэли® не оказывает влияния на способность управлять
          транспортными средствами и работать с механизмами.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="forma" className="h2_pink">
          ФОРМА ВЫПУСКА
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          Таблетки покрытые пленочной оболочкой. <br /> <br />
          По 28 таблеток (24 белые таблетки, содержащие действующие вещества, и
          4 желтые таблетки плацебо) в блистере из ПВХ / алюминиевой фольги. По
          1 или 3 блистера вместе с конвертом для блистера (или без него),
          стикером с днями недели и инструкцией по применению помещают в
          картонную пачку.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="uslov" className="h2_pink">
          УСЛОВИЯ ХРАНЕНИЯ
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          При температуре от 2 до 30°С. Хранить в недоступном для детей месте.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="srok" className="h2_pink">
          СРОК ГОДНОСТИ
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          3 года. Не применять по истечении срока годности.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="otp" className="h2_pink">
          УСЛОВИЯ ОТПУСКА
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          По рецепту.
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="urid" className="h2_pink">
          ЮРИДИЧЕСКОЕ ЛИЦО, НА ИМЯ КОТОРОГО ВЫДАНО РЕГИСТРАЦИОННОЕ УДОСТОВЕРЕНИЕ
        </h2>
        <span
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            lineHeight: '22px',
          }}
        >
          Н.В. Органон, Нидерланды
        </span>
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="proiz" className="h2_pink">
          ПРОИЗВОДИТЕЛЬ
        </h2>
        <img width={'70%'} src={proizv} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <h2 id="adress" className="h2_pink">
          ПРЕТЕНЗИИ ПОТРЕБИТЕЛЕЙ НАПРАВЛЯТЬ ПО АДРЕСУ:
        </h2>
        <img width={'70%'} src={pretenz} alt="" />
        <div
          style={{
            height: 40,
          }}
        ></div>
        <Link
          to="/prezentation/Иструкции/Велледиен_ИМП/Velledien_imp/true"
          style={{
            width: 240,
            height: 45,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            border: '1px solid #F9D2D6',
            boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)',
            borderRadius: 12,
            color: '#FFF',
            fontSize: 20,
          }}
        >
          Инструкция PDF
        </Link>
      </Page>
    </>
  );
};
