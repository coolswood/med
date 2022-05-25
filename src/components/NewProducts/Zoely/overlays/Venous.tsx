import React, { useEffect } from 'react';
import Page from 'UI/Page';

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        The venous thrombotic risk of oral contraceptives, effects of oestrogen
        dose and progestogen type: results of the MEGA case-control study
      </div>
      <div
        style={{
          fontSize: 16,
          marginBottom: 10,
          color: '#fff',
          lineHeight: '22px',
        }}
      >
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Objective:</b> To assess the thrombotic risk associated with oral
          contraceptive use with a focus on dose of oestrogen and type of
          progestogen of oral contraceptives available in the Netherlands.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Design:</b> Population based case-control study.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Setting:</b> Six participating anticoagulation clinics in the
          Netherlands (Amersfoort, Amsterdam, The Hague, Leiden, Rotterdam, and
          Utrecht).
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Participants:</b> Premenopausal women 50 years old who were not
          pregnant, not within four weeks postpartum, and not using a hormone
          excreting intrauterine device or depot contraceptive. Analysis
          included 1524 patients and 1760 controls.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Main outcome measures:</b> First objectively diagnosed episodes of
          deep venous thrombosis of the leg or pulmonary embolism. Odds ratios
          calculated by cross-tabulation with a 95% confidence interval
          according to Woolf's method; adjusted odds ratios estimated by
          unconditional logistic regression, standard errors derived from the
          model.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Results:</b> Currently available oral contraceptives increased the
          risk of venous thrombosis fivefold compared with non-use (odds ratio
          5.0, 95% CI 4.2 to 5.8). The risk clearly differed by type of
          progestogen and dose of oestrogen. The use of oral contraceptives
          containing levonorgestrel was associated with an almost fourfold
          increased risk of venous thrombosis (odds ratio 3.6, 2.9 to 4.6)
          relative to non-users, whereas the risk of venous thrombosis compared
          with non-use was increased 5.6-fold for gestodene (5.6, 3.7 to 8.4),
          7.3-fold for desogestrel (7.3, 5.3 to 10.0), 6.8-fold for cyproterone
          acetate (6.8, 4.7 to 10.0), and 6.3-fold for drospirenone (6.3, 2.9 to
          13.7). The risk of venous thrombosis was positively associated with
          oestrogen dose. We confirmed a high risk of venous thrombosis during
          the first months of oral contraceptive use irrespective of the type of
          oral contraceptives.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Conclusions:</b> Currently available oral contraceptives still have
          a major impact on thrombosis occurrence and many women do not use the
          safest brands with regard to risk of venous thrombosis.
        </div>
      </div>
      <a
        className="link_active_small"
        href="https://pubmed.ncbi.nlm.nih.gov/19679614/"
        target="_blank"
      >
        Van Hylckama Vlieg A., et al. The venous thrombotic risc of oral
        contraceptives, effects of estrogen dose and progesterone types: results
        of the MEGA case-control study//BMJ. 2009. № 339. Р. 2921.
      </a>
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: '#F9D2D6',
          marginBottom: 20,
        }}
      >
        Effects of nomegestrol acetate on carbohydrate metabolism
      </div>
      <div
        style={{
          fontSize: 16,
          marginBottom: 10,
          color: '#fff',
          lineHeight: '22px',
        }}
      >
        The effects of nomegestrol acetate on carbohydrate metabolism were
        investigated in 20 premenopausal women presenting with menstrual
        disturbances. The progestogen was administered from day 5 to day 24 of
        the cycle, over six consecutive cycles, at a dosage (5 mg/d) known to
        inhibit ovulation. A 3 hour oral glucose tolerance test (OGTT) was
        performed prior to the hormonal intake and at 3 months and 6 months of
        therapy. Blood glucose and insulin were measured before and for 3 hours
        after a 75 g glucose load, and the glucose and insulin areas under the
        curves (AUC) were calculated. The fasting glycosylated hemoglobin and
        fructosamine were also determined. Treatment did not induce any
        significant changes in plasma glucose or insulin glucose values during
        the oral glucose tolerance test, in glucose and insulin areas under the
        curves or in glycosylated protein levels. Two women with impaired
        glucose tolerance were not worsened during therapy. These data suggest
        that nomegestrol acetate is free from adverse effects on glucose
        tolerance after 6 months treatment.
      </div>
      <a
        className="link_active_small"
        href="https://pubmed.ncbi.nlm.nih.gov/8056124/"
        target="_blank"
      >
        Dorangeon P., Thomas J. L., Choisy H., Lumbroso M., Hazard M. C. Effects
        of nomegestrol acetate on carbohydrate metabolism//Diabete Metab. 1993.
        № 19. Р. 441–445.
      </a>
    </Page>
  );
};
