import alvizan from './img/products/alvizan.png';
import velledient from './img/products/velledient.png';
import vidora from './img/products/vidora.png';
import dieticlen from './img/products/dieticlen.png';
import eoeli from './img/products/eoeli.png';
import lizegora from './img/products/lizegora.png';
import vidora_2 from './img/products/vidora_2.png';

import microginon from './img/bayer/microginon.png';
import proginova from './img/bayer/proginova.png';
import trikvilar from './img/bayer/trikvilar.png';
import klimen from './img/bayer/klimen.png';
import klimonorm from './img/bayer/klimonorm.png';

import Alv_2 from './img/productsPic/Alv_2.png';
import Vel_2 from './img/productsPic/Vel_2.png';
import Vidl_2 from './img/productsPic/Vidl_2.png';
import Die_2 from './img/productsPic/Die_2.png';
import Zoe_2 from './img/productsPic/Zoe_2.png';
import Liz_2 from './img/productsPic/Liz_2.png';

export const products = [
  {
    id: 'alvizan',
    name: 'Алвовизан',
    img: alvizan,
    subtitle: 'Диеногест 2 мг',
    picture: Alv_2,
    description:
      'Алвовизан эффективен в лечении эндометриоза, как аГнРг, считающиеся стандартом терапии данного заболевания. Препарат обладает отличным профилем безопасности и переносимости, поэтому предназначен для длительного применения.',
    materials: [
      {
        name: 'Диеногест в лечении тазовой боли',
        pdfName: 'Dienogest_v_lechenii_tazovoj_boli',
        forceVertical: false,
      },
      {
        name: 'Исследование по биоэквивалентности',
        pdfName: 'Issledovanie_po_bioekvivalentnosti',
        forceVertical: false,
      },
      {
        name: 'Исследование по подбору доз диеногеста',
        pdfName: 'Issledovanie_po_podboru_doz_dienogesta',
        forceVertical: false,
      },
      {
        name: 'Применение диеногеста при длительном лечении эндометриоза',
        pdfName: 'Primenenie_dienogesta',
        forceVertical: false,
      },
      {
        name: 'Сравнительные исследования диеногеста с аГнРГ',
        pdfName: 'Sravnitelnye_issledovaniya',
        forceVertical: false,
      },
    ],
    prezentations: [
      {
        name: 'Кровотечения при приеме диеногеста',
        pdfName: 'Krovotecheniya_pri_prieme_dienogesta',
        forceVertical: false,
      },
      {
        name: 'Материалы основные',
        pdfName: 'Materialy_osnovnye',
        forceVertical: false,
      },
      {
        name: 'Отличие диеногестиа от других прогестинов',
        pdfName: 'Otlichie_dienogestia_ot_drugix_progestinov',
        forceVertical: false,
      },
      {
        name: 'Предотвращение рецедивов эндометриоза',
        pdfName: 'Predotvrashhenie_recedivov_endometrioza',
        forceVertical: false,
      },
      {
        name: 'Сравнение КОК и диеногеста',
        pdfName: 'Sravnenie_KOK_i_dienogesta',
        forceVertical: false,
      },
    ],
    instructions: [
      {
        name: 'Инструкция',
        pdfName: 'alvizan_instr',
        forceVertical: true,
      },
    ],
  },
  {
    id: 'velledient',
    name: 'Велледиен',
    img: velledient,
    picture: Vel_2,
    subtitle: 'Тиболон 2,5 мг',
    description:
      'Лечение симптомов эстрогенной недостаточности у женщин в постменопаузальном периоде (не ранее\n' +
      'чем через 1 год после последней менструации при наступлении естественной менопаузы или сразу после хирургической менопаузы.',
    materials: [
      {
        name: 'Буклет Велледиен (Тиболон)',
        pdfName: 'Buklet_Velledien_Tibolon',
        forceVertical: false,
      },
      {
        name: 'Велледиен. Клинический случай №1',
        pdfName: 'Velledien_Klinicheskij_sluchaj_1',
        forceVertical: false,
      },
      {
        name: 'Велледиен. Клинический случай №2',
        pdfName: 'Velledien_Klinicheskij_sluchaj_2',
        forceVertical: false,
      },
      {
        name: 'Велледиен. Клинический случай №3',
        pdfName: 'Velledien_Klinicheskij_sluchaj_3',
        forceVertical: false,
      },
      {
        name: 'Велледиен. Клинический случай №4',
        pdfName: 'Velledien_Klinicheskij_sluchaj_4',
        forceVertical: false,
      },
    ],
    prezentations: [
      {
        name: 'Велледиен',
        pdfName: 'Velledien',
        forceVertical: false,
      },
    ],
    instructions: [],
  },
  {
    id: 'vidora',
    name: 'Видора',
    img: vidora,
    picture: Vidl_2,
    subtitle: 'Дроспиренон 3 мг+ ЭЭ 0,03 мг',
    description:
      'Для всех женщин репродуктивного возраста, кому важна безопасность препарата при его\n' +
      'доступной цене.',
    addedDescription: {
      name: 'Видора Микро',
      img: vidora_2,
      subtitle: 'Дроспиренон 3 мг+ ЭЭ 0,02 мг',
      description:
        'Контрацепция, лечение угревой сыпи средней тяжести и лечение тяжелой формы предменструального синдрома (ПМС).',
    },
    materials: [],
    prezentations: [],
    instructions: [],
  },
  {
    id: 'dieticlen',
    name: 'Диециклен',
    img: dieticlen,
    picture: Die_2,
    subtitle: 'Диеногест 2 мг + ЭЭ 0,03 мг',
    description:
      'Лечение акне легкой и средней степени тяжести у женщин, нуждающихся в контрацепции, при неэффективности местного лечения.',
    materials: [],
    prezentations: [],
    instructions: [],
  },
  {
    id: 'eoeli',
    name: 'Зоэли',
    img: eoeli,
    picture: Zoe_2,
    subtitle: 'Номегэстрол + эстрадиол',
    description:
      'Инновационный КОК:\n' +
      'первый монофазный эстрадиол, содержащий комбинированный оральный контрацептив.',
    materials: [],
    prezentations: [],
    instructions: [],
  },
  {
    id: 'lizegora',
    name: 'Лизегора',
    img: lizegora,
    picture: Liz_2,
    subtitle: 'Гозерелин',
    description:
      'Противоопухолевое средство, аналог гонадотропин-рилизинг гормона.\n' +
      'Показания к применению: рак предстательной железы, рак молочной железы, эндометриоз, фиброма матки, для истончения эндометрия при планируемых операциях на эндометрии, при экстракорпоральном оплодотворении.',
    materials: [],
    prezentations: [],
    instructions: [],
  },
];

export const bayer = [
  {
    name: 'Микрогинон',
    img: microginon,
    subtitle: 'Левоноргестрел 150 мкг\n' + '+ ЭЭ30 мкг',
    description:
      'Для женщин с обильными\n' + 'менструациями и дисфункцией яичников.',
  },
  {
    name: 'Прогинова',
    img: proginova,
    subtitle: 'Эстрадиола валерат 2 мг',
    description:
      'Оптимальное средство коррекции уровня эстрогенов с доказанной эффективностью и безопасностью.',
  },
  {
    name: 'Триквилар',
    img: trikvilar,
    subtitle: 'Эстроген + Гестаген',
    description:
      'Для всех женщин репродуктивного возраста, у кого возникают головная боль, вздутие живота и боли в молочных железах на фоне приёма любого контрацептива.',
  },
  {
    name: 'Климен',
    img: klimen,
    subtitle: 'Ципротерона ацетат 1 мг+ ЭВ 2 мг',
    description:
      'Единственный препарат МГТ с лечебными преимуществами для пациенток с гиперандрогенией, приводящей к эстетической деформации.',
  },
  {
    name: 'Климонорм',
    img: klimonorm,
    subtitle: 'Левоноргестрел 150 мг\n' + '+ ЭВ 2 мг',
    description:
      'Единственный препарат МГТ с лечебными преимуществами\n' +
      'для пациенток с АМК, со снижением когнитивных функций, либидо, ПНЯ\n' +
      'и хирургической менопаузой.',
  },
] as const;
