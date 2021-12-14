import alvizan from './img/products/alvizan.png';
import velledient from './img/products/velledient.png';
import vidora from './img/products/vidora.png';
import dieticlen from './img/products/dieticlen.png';

export const products = [
  {
    id: 'alvizan',
    name: 'Алвовизан',
    img: alvizan,
    subtitle: 'Диеногест 2 мг',
    description:
      'Алвовизан эффективен в лечении эндометриоза, как аГнРг, считающиеся стандартом терапии данного заболевания. Препарат обладает отличным профилем безопасности и переносимости, поэтому предназначен для длительного применения.',
    prezentations: [
      {
        name: 'Презентация',
        pdfName: '1',
      },
    ],
  },
  {
    id: 'velledient',
    name: 'Велледиен',
    img: velledient,
    subtitle: 'Тиболон 2,5 мг',
    description:
      'Лечение симптомов эстрогенной недостаточности у женщин в постменопаузальном периоде (не ранее\n' +
      'чем через 1 год после последней менструации при наступлении естественной менопаузы или сразу после хирургической менопаузы.',
    prezentations: [
      {
        name: 'Презентация',
        pdfName: '1',
      },
    ],
  },
  {
    id: 'vidora',
    name: 'Видора',
    img: vidora,
    subtitle: 'Дроспиренон 3 мг+ ЭЭ 0,03 мг',
    description:
      'Для всех женщин репродуктивного возраста, кому важна безопасность препарата при его\n' +
      'доступной цене.',
    prezentations: [
      {
        name: 'Презентация',
        pdfName: '1',
      },
    ],
  },
  {
    id: 'dieticlen',
    name: 'Диециклен',
    img: dieticlen,
    subtitle: 'Диеногест 2 мг + ЭЭ 0,03 мг',
    description:
      'Лечение акне легкой и средней степени тяжести у женщин, нуждающихся в контрацепции, при неэффективности местного лечения.',
    prezentations: [
      {
        name: 'Презентация',
        pdfName: '1',
      },
    ],
  },
];
