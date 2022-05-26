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
        Effects of nomegestrol acetate (5 mg/d) on hormonal, metabolic and
        hemostatic parameters in premenopausal women
      </div>
      <div
        style={{
          fontSize: 16,
          marginBottom: 10,
          color: '#fff',
          lineHeight: '22px',
        }}
      >
        The effects of nomegestrol acetate on circulating hormone levels,
        metabolic and hemostatic parameters and blood pressure were studied in
        36 premenopausal women. The progestogen was administered from day 7 to
        25 of the cycle during six cycles at a dosage (5 mg/d) known to inhibit
        ovulation. Analysis were performed before and in the third and sixth
        cycles. Estradiol and progesterone levels decreased significantly (p
        less than 0.001) during treatment. Body weight, fasting blood glucose
        and insulin, total HDL and LDL cholesterol, apolipoprotein B, fibrinogen
        and plasminogen did not change significantly. Triglycerides in the third
        cycle (p less than 0.05) and apolipoprotein A1 levels (p less than 0.01)
        in both periods of sampling decreased significantly. There was a
        significant increase in antithrombin III (p less than 0.01). These
        results indicate that nomegestrol acetate has no deleterious effect on
        blood glucose and lipids. The decrease in apolipoprotein A1 and increase
        in antithrombin III may be related either to the decrease in estradiol
        levels induced by the treatment or to the effect of the progestogen
        itself.
      </div>
      <LinkContainer
        text="Basdevant A., et al. Effects of nomegestrol acetate (5 mg/d) on
        hormonal, metabolic and hemostatic parameters in premenopausal
        women//Contraception. 1991. № 44. Р. 599–605."
        link={'https://pubmed.ncbi.nlm.nih.gov/1773617/'}
      />
    </Page>
  );
};
