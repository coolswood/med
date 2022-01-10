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
        name: 'Эффективность и безопасность',
        pdfName: 'alvizan_p',
        forceVertical: false,
      },
      {
        name: 'Буклет Диеногест VS AГНРГ',
        pdfName: 'alvizan_m_1',
        forceVertical: true,
      },
      {
        name: 'Буклет Диеногест VS хирургическое вмешательство',
        pdfName: 'alvizan_m_2',
        forceVertical: true,
      },
      {
        name: 'Буклет Диеногест VS КОК',
        pdfName: 'alvizan_m_3',
        forceVertical: true,
      },
      {
        name: 'Буклет Диеногест в лечении тазовой боли, связанной с эндометриозом',
        pdfName: 'alvizan_m_4',
        forceVertical: true,
      },
      {
        name: 'Буклет Исследование биоэквивалентности',
        pdfName: 'alvizan_m_5',
        forceVertical: true,
      },
      {
        name: 'Буклет Применение Диеногеста при длительном лечении эндометриоза',
        pdfName: 'alvizan_m_6',
        forceVertical: true,
      },
      {
        name: 'Буклет Протоколы лечения эндометриоза. российские и международные',
        pdfName: 'alvizan_m_7',
        forceVertical: true,
      },
    ],
    prezentations: [
      {
        name: 'Алвовизан 1',
        pdfName: 'alvizan_p_m_1',
        forceVertical: true,
      },
      {
        name: 'Алвовизан 2',
        pdfName: 'alvizan_p_m_2',
        forceVertical: true,
      },
      {
        name: 'Алвовизан 3',
        pdfName: 'alvizan_p_m_3',
        forceVertical: true,
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
        name: 'Велледиен',
        pdfName: 'Velledien',
        forceVertical: true,
      },
      {
        name: 'Буклет Велледиен (Тиболон)',
        pdfName: 'Buklet_Velledien_Tibolon',
        forceVertical: true,
      },
      {
        name: 'Велледиен. Клинический случай №1',
        pdfName: 'Velledien_Klinicheskij_sluchaj_1',
        forceVertical: true,
      },
      {
        name: 'Велледиен. Клинический случай №2',
        pdfName: 'Velledien_Klinicheskij_sluchaj_2',
        forceVertical: true,
      },
      {
        name: 'Велледиен. Клинический случай №3',
        pdfName: 'Velledien_Klinicheskij_sluchaj_3',
        forceVertical: true,
      },
      {
        name: 'Велледиен. Клинический случай №4',
        pdfName: 'Velledien_Klinicheskij_sluchaj_4',
        forceVertical: true,
      },
    ],
    prezentations: [
      {
        name: 'Велледиен',
        pdfName: 'Velledien_m',
        forceVertical: true,
      },
    ],
    instructions: [
      {
        name: 'Велледиен_ИМП',
        pdfName: 'Velledien_imp',
        forceVertical: true,
      },
    ],
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
    materials: [
      {
        name: 'Видора',
        pdfName: 'vid_p',
        forceVertical: false,
      },
      {
        name: 'Видора Микро 21+7_клинический разбор',
        pdfName: 'vid_m_1',
        forceVertical: true,
      },
      {
        name: 'Видора Микро 24+4_клинический разбор',
        pdfName: 'vid_m_2',
        forceVertical: true,
      },
      {
        name: 'Видора_клинический разбор',
        pdfName: 'vid_m_3',
        forceVertical: true,
      },
      {
        name: 'Исакова_Видора Микро_клинический разбор',
        pdfName: 'vid_m_4',
        forceVertical: true,
      },
      {
        name: 'Исакова_Видора_клинический разбор',
        pdfName: 'vid_m_5',
        forceVertical: true,
      },
    ],
    prezentations: [
      {
        name: 'Видора',
        pdfName: 'vid_p_m',
        forceVertical: true,
      },
    ],
    instructions: [
      {
        name: 'Видора микро_обновленная ИМП № ЛП-002881-100820',
        pdfName: 'vidara_micro',
        forceVertical: true,
      },
      {
        name: 'Видора_обновленная инструкция_23.09.2020',
        pdfName: 'vidara_micro_2',
        forceVertical: true,
      },
    ],
  },
  {
    id: 'dieticlen',
    name: 'Диециклен',
    img: dieticlen,
    picture: Die_2,
    subtitle: 'Диеногест 2 мг + ЭЭ 0,03 мг',
    description:
      'Лечение акне легкой и средней степени тяжести у женщин, нуждающихся в контрацепции, при неэффективности местного лечения.',
    materials: [
      {
        name: 'Диециклен_ИМП',
        pdfName: 'diec',
        forceVertical: true,
      },
      {
        name: 'Диециклен_клинический разбор',
        pdfName: 'diec_m_1',
        forceVertical: true,
      },
      {
        name: 'Исакова_Диециклен_клинический разбор',
        pdfName: 'diec_m_2',
        forceVertical: true,
      },
    ],
    prezentations: [
      {
        name: 'Диециклен',
        pdfName: 'diec_m',
        forceVertical: true,
      },
    ],
    instructions: [
      {
        name: 'Диециклен_ИМП',
        pdfName: 'diec_imp',
        forceVertical: true,
      },
    ],
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
    prezentations: [
      {
        name: 'Зоэли',
        pdfName: 'eol_m_new',
        forceVertical: true,
      },
    ],
    instructions: [
      {
        name: 'Зоэли ИМП',
        pdfName: 'eol_in',
        forceVertical: true,
      },
    ],
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
    materials: [
      {
        name: 'Лизегора_Презентер',
        pdfName: 'lizegora_m',
        forceVertical: true,
      },
    ],
    prezentations: [
      {
        name: 'Буклет ЛИЗЕГОРА',
        pdfName: 'lizegora',
        forceVertical: true,
      },
    ],
    instructions: [
      {
        name: 'Лизегора. Инструкция',
        pdfName: 'lizegora_istr',
        forceVertical: true,
      },
    ],
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
