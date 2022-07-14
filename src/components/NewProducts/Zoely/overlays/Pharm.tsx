import React from 'react';
import Page from 'UI/Page';
import LinkContainer from 'UI/LinkContainer';

export default () => {
  return (
    <Page isCross>
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: '#F9D2D6',
          marginBottom: 20,
        }}
      >
        The pharmacology of nomegestrol acetate
      </div>
      <div
        style={{
          fontSize: 16,
          marginBottom: 10,
          color: '#fff',
          lineHeight: '22px',
        }}
      >
        Nomegestrol acetate (NOMAC) is a 19-norprogesterone derivative with high
        biological activity at the progesterone receptor, a weak anti-androgenic
        effect, but with no binding to estrogen, glucocorticoid or
        mineralocorticoid receptors. At dosages of 1.5mg/day or more, NOMAC
        effectively suppresses gonadotropic activity and ovulation in women of
        reproductive age. Hemostasis, lipids and carbohydrate metabolism remain
        largely unchanged. In normal and cancerous human breast cells, NOMAC has
        shown favorable effects on estrogen metabolism. Like natural
        progesterone (but in contrast to some other synthetic progestogens), it
        does not appear stimulate the proliferation of cancerous breast cells.
        While there has been some experience of the use of NOMAC in combination
        with estrogens as a hormone replacement therapy, most of the data on the
        compound are reported in the context of its inclusion as a component of
        a new contraceptive pill comprising 2.5mg NOMAC combined with 1.5mg
        estradiol. Because of its strong endometrial efficacy, and due to its
        high antigonadotropic activity and long elimination half-life (about
        50h), the contraceptive efficacy of the new pill is maintained even when
        dosages are missed. Furthermore, for the first time with a monophasic
        24/4 regimen containing estradiol, cyclical stability can be achieved
        comparable with that obtained using pills containing ethinyl estradiol
        and progestogens like levonorgestrel or drospirenone. The addition of
        NOMAC to estradiol means that the beneficial effects of estrogen are not
        lost, which is of especial importance in relation to the cardiovascular
        system. On the basis both of its pharmacology and of studies performed
        during the development of the NOMAC/estradiol pill, involving some 4000
        women in total, good long-term tolerability can be expected for NOMAC,
        although its safety profile is still to be fully ascertained, as the
        clinical endpoint studies are yet to be completed.
      </div>
      <LinkContainer
        text="Ruan X., Seeger H., Mueck A. O. The pharmacology of nomegestrol
        acetate//Maturitas. 2012. № 7. Р. 345–353."
        link={'https://pubmed.ncbi.nlm.nih.gov/22364709'}
      />
    </Page>
  );
};
