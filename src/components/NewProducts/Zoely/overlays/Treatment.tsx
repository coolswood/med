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
        Treatment continuation and satisfaction in women using combined oral
        contraception with nomegestrol acetate and oestradiol: a multicentre,
        prospective cohort study (BOLERO)
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
          <b>Objective:</b> The aim of the study was to examine treatment
          continuation and satisfaction over 1 year among women receiving
          nomegestrol acetate (NOMAC)/oestradiol (E2) combined oral
          contraception (COC) in real-world clinical practice.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Methods:</b> The 17β-Estradiol and Nomegestrol Acetate (BOLERO)
          Study is an observational, non-interventional, prospective,
          multicentre cohort study of premenopausal women (aged 18-50 years) who
          received prescription NOMAC/E2 (2.5 mg/1.5 mg) for contraception
          during routine clinical practice. Assessments were carried out at
          enrolment and at 3, 6 and 12 months. Probability of treatment
          continuation through 12 months (primary outcome) was examined using
          Kaplan-Meier survival analysis. Secondary outcomes included treatment
          satisfaction, menstrual cycle-related symptoms, libido and adverse
          events (AEs).
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Results:</b> Of 298 enrolled women, 292 were evaluable. The
          probability of NOMAC/E2 continuation through 12 months was 73.7% (95%
          confidence interval [CI] 68.0%, 78.5%). Satisfaction with NOMAC/E2
          increased from 56.9% (37/65) of women at initial evaluation to 89.2%
          (58/65) of women at 12 months. Physician ratings at 12 months showed
          satisfactory to very satisfactory in 84.0% (168/200) of women. Libido
          was not affected. Menstrual cycle-related symptoms significantly
          declined from enrolment (6.04 ± 4.32) to 3 months (3.25 ± 3.05) and 12
          months (2.62 ± 2.74; p .0001). Treatment-related AEs were reported by
          38.7% (113/292) of women.
        </div>
        <div
          style={{
            marginBottom: 10,
          }}
        >
          <b>Conclusion:</b> The real-world experience of women receiving
          NOMAC/E2 indicated very good treatment continuation, high satisfaction
          and significantly improved menstrual cycle-related symptoms.
        </div>
      </div>
      <a
        className="link_active_small"
        href="https://pubmed.ncbi.nlm.nih.gov/30465698/"
        target="_blank"
      >
        A Cagnacci, еt al. The BOLERO Study Writing Group (2018): Treatment
        continuation and satisfaction in women using combined oral contraception
        with nomegestrol acetate and oestradiol: a multicentre, prospective
        cohort study (BOLERO), The European Journal of Contraception &
        Reproductive Health Care, DOI: 10.1080/13625187.2018.1541080
      </a>
    </Page>
  );
};
