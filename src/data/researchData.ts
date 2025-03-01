export const researchPapers = [
    {
      id: "worldmedqa-v",
      title: "WorldMedQA-V: a multilingual, multimodal medical examination dataset for multimodal language models evaluation",
      authors: ["J Matos", "S Chen", "S Placino", "Y Li", "JCC Pardo", "D Idan", "T Tohyama", "..."],
      journal: "arXiv preprint arXiv:2410.12722",
      year: "2024",
      abstract: "Multimodal/vision language models (VLMs) are increasingly being deployed in healthcare settings worldwide, necessitating robust benchmarks to ensure their safety, efficacy, and fairness. Multiple-choice question and answer (QA) datasets derived from national medical examinations have long served as valuable evaluation tools, but existing datasets are largely text-only and available in a limited subset of languages and countries. To address these challenges, we present WorldMedQA-V, an updated multilingual, multimodal benchmarking dataset designed to evaluate VLMs in healthcare. WorldMedQA-V includes 568 labeled multiple-choice QAs paired with 568 medical images from four countries (Brazil, Israel, Japan, and Spain), covering original languages and validated English translations by native clinicians, respectively. Baseline performance for common open- and closed-source models are provided in the local language and English translations, and with and without images provided to the model. The WorldMedQA-V benchmark aims to better match AI systems to the diverse healthcare environments in which they are deployed, fostering more equitable, effective, and representative applications.",
      tags: ["Preprint", "Multimodal LLM", "Medical QA", "Evaluation"],
      doi: "https://doi.org/10.48550/arXiv.2410.12722",
      pdfUrl: "https://arxiv.org/pdf/2410.12722"
    },
    {
      id: "maryam-mahootiha-lgg",
      title: "Multimodal deep learning improves recurrence risk prediction in pediatric low-grade gliomas",
      authors: ["M Mahootiha", "D Tak", "Z Ye", "A Zapaishchykova", "J Likitlersuang", "..."],
      journal: "Neuro-oncology 27 (1), 277-290",
      year: "2025",
      abstract: "Background: Postoperative recurrence risk for pediatric low-grade gliomas (pLGGs) is challenging to predict by conventional clinical, radiographic, and genomic factors. We investigated if deep learning (DL) of magnetic resonance imaging (MRI) tumor features could improve postoperative pLGG risk stratification. Methods: We used a pretrained DL tool designed for pLGG segmentation to extract pLGG imaging features from preoperative T2-weighted MRI from patients who underwent surgery (DL-MRI features). Patients were pooled from 2 institutions: Dana Farber/Boston Children’s Hospital (DF/BCH) and the Children’s Brain Tumor Network (CBTN). We trained 3 DL logistic hazard models to predict postoperative event-free survival (EFS) probabilities with (1) clinical features, (2) DL-MRI features, and (3) multimodal (clinical and DL-MRI features). We evaluated the models with a …",
      tags: ["Paper", "Risk Prediction", "Pediatric Glioma", "Deep Learning"],
      doi: "https://doi.org/10.1093/neuonc/noae173",
      pdfUrl: "https://academic.oup.com/neuro-oncology/article/27/1/277/7745610"
    },
    {
      id: "lgg-15-divy",
      title: "LGG-15. Deep learning enables longitudinal risk prediction for pediatric low-grade gliomas after surgery",
      authors: ["D Tak", "BA Garomsa", "A Zapaishchykova", "Z Ye", "S Vajapeyam", "M Mahootiha", "..."],
      journal: "Neuro-Oncology 26 (Suppl 4), 0",
      year: "2024",
      abstract: "BACKGROUND Disease progression is challenging to predict following surgery for pediatric low-grade glioma (pLGG), and early progression indicators on MRI surveillance imaging would help guide management. Longitudinal surveillance imaging data may capture subtle temporal tumor changes and patterns that could inform recurrence risk but are difficult to synthesize clinically. We applied deep, self-supervised learning to longitudinal surveillance MRI to predict short-interval event-free-survival (EFS) risk from time-of-scan. METHODS We retrospectively collected data from 278 patients (2,174 scans) who underwent surgical resection for pLGG at Dana-Farber Cancer Institute/Boston Children’s Hospital (DFCI/BCH) from 1990-2022. A deep-learning model was pretrained with T2-FLAIR sequences to determine the chronological scan order for each patient (temporal pretraining). The model was fine-tuned to …",
      tags: ["Abstract", "Risk Prediction", "Pediatric Glioma", "Deep Learning"],
      doi: "10.1093/neuonc/noae064.408",
      pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11183555/"
    },
    {
      id: "foundational-model",
      title: "A foundation model for generalized brain MRI analysis",
      authors: ["D Tak", "BA Garomsa", "TL Chaunzwa", "A Zapaishchykova", "JC Climent Pardo", "..."],
      journal: "medRxiv, 2024.12.02.24317992",
      year: "2024",
      abstract: "Artificial intelligence (AI) applied to brain magnetic resonance imaging (MRI) has the potential to improve disease diagnosis and management but requires algorithms with generalizable knowledge that can perform well in a variety of clinical scenarios. The field has been constrained, thus far, by limited training data and task-specific models that do not generalize well across patient populations and medical tasks. Foundation models, by leveraging self-supervised learning, pretraining, and targeted adaptation, present a promising paradigm to overcome these limitations. Here, we present Brain Imaging Adaptive Core (BrainIAC), a novel foundation model designed to learn generalized representations from unlabeled brain MRI data and serve as a core basis for diverse downstream application adaptation. Trained and validated on 48,519 brain MRIs across a broad spectrum of tasks, we demonstrate that BrainIAC outperforms localized supervised training and other pretrained models, particularly in low-data settings and high-difficulty tasks, allowing for application in scenarios otherwise infeasible. BrainIAC can be integrated into imaging pipelines and multimodal frameworks and may lead to improved biomarker discovery and AI clinical translation.",
      tags: ["Preprint", "Brain MRI", "Foundational Model", "Deep Learning"],
      doi: " https://doi.org/10.1101/2024.12.02.24317992 ",
      pdfUrl: "https://www.medrxiv.org/content/10.1101/2024.12.02.24317992v1"
    },
    {
      id: "zezhong-ye-abstract",
      title: "Development and Validation of a Deep Learning System with Tumor-and Patient-Centric Imaging Analysis to Improve Risk-Stratification in Oropharyngeal Cancer",
      authors: ["Z Ye", "Y Ravipati", "F Hoebers", "A Zapaishchykova", "Y Zha", "D Tak", "..."],
      journal: "International Journal of Radiation Oncology, Biology, Physics 120 (2), e804-e805",
      year: "2024",
      abstract: "Oropharyngeal cancer (OPC) outcomes are heterogeneous, though management remains driven by stage of disease. Improved biomarkers may guide treatment approach. Deep learning (DL)-based tumor imaging analysis has been shown to improve risk stratification in OPC. Since then, patient-centric, imaging-derived biomarkers such as skeletal muscle area and adipose density have emerged. We hypothesized a CT-based, DL system that analyzes tumor- and patient-specific features would improve patient risk-stratification for OPC. Materials/Methods: 2,330 OPC patients treated with definitive radiotherapy from 1991 to 2018 (7 institutions) were used for model development. External validation sets were curated from 2 cancer centers (C1, n = 176; C2, n = 244). A multi-step pipeline was developed using U-Net-based segmentation of gross tumor and lymph nodes and C3 vertebrae-level …",
      tags: ["Abstract", "Risk Stratification", "Oropharyngeal Cancer", "Deep Learning"],
      doi: "10.1016/j.ijrobp.2024.07.1767",
      pdfUrl: "https://www.redjournal.org/article/S0360-3016(24)02529-X/fulltext"
    },
    {
      id: "ispno-jco-2024-abstract",
      title: "LGG-41. DECIPHERING PEDIATRIC LOW-GRADE GLIOMA TRAJECTORIES: DEEP LEARNING-BASED VOLUMETRICS FOR PATIENTS UNDER SURVEILLANCE",
      authors: ["JCC Pardo", "A Zapaishchykova", "A Boyd", "D Tak", "M Mahootiha", "Z Ye", "..."],
      journal: "Neuro-Oncology 26 (Suppl 4), 0",
      year: "2024",
      abstract: "BACKGROUND Pediatric low-grade gliomas (pLGGs) have heterogeneous clinical presentations and prognoses. Given the morbidity of treatment, suspected pLGGs are surveilled without treatment, though the natural histories of these tumors have yet to be systematically studied. METHODS We conducted a pooled, retrospective study of pLGG patients diagnosed between 1992 and 2020 from two sources (Dana-Farber Cancer Institute/Boston Children’s Hospital and the Children’s Brain Tumor Network), who were surveilled untreated for at least one-year post-diagnosis and who had linked clinical data and longitudinal MRI available. We applied a validated pLGG deep learning segmentation algorithm to longitudinal T2-weighted MRIs and calculated the 3-dimensional volumes at each timepoint. We evaluated individual tumor trajectories, treatment initiation, and clinical risk factors for radiographic progression and …",
      tags: ["Abstract", "3D Volumetrics", "Pediatric Glioma", "Deep Learning"],
      doi: "https://doi.org/10.1093/neuonc/noae064.432",
      pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11183761/"
    },
    {
      id: "efs-divy",
      title: "Longitudinal risk prediction for pediatric glioma with temporal deep learning",
      authors: ["D Tak", "BA Garomsa", "A Zapaishchykova", "Z Ye", "S Vajapeyam", "M Mahootiha", "..."],
      journal: "medRxiv, 2024.06.04.24308434",
      year: "2024",
      abstract: "Pediatric glioma recurrence can cause morbidity and mortality; however, recurrence pattern and severity are heterogeneous and challenging to predict with established clinical and genomic markers. Resultingly, almost all children undergo frequent, long-term, magnetic resonance (MR) brain surveillance regardless of individual recurrence risk. Deep learning analysis of longitudinal MR may be an effective approach for improving individualized recurrence prediction in gliomas and other cancers but has thus far been infeasible with current frameworks. Here, we propose a self-supervised, deep learning approach to longitudinal medical imaging analysis, temporal learning, that models the spatiotemporal information from a patient’s current and prior brain MRs to predict future recurrence. We apply temporal learning to pediatric glioma surveillance imaging for 715 patients (3,994 scans) from four distinct clinical settings. We find that longitudinal imaging analysis with temporal learning improves recurrence prediction performance by up to 41% compared to traditional approaches, with improvements in performance in both low- and high-grade glioma. We find that recurrence prediction accuracy increases incrementally with the number of historical scans available per patient. Temporal deep learning may enable point-of-care decision-support for pediatric brain tumors and be adaptable more broadly to patients with other cancers and chronic diseases undergoing surveillance imaging.",
      tags: ["Preprint", "Risk Prediction", "Pediatric Glioma", "Deep Learning"],
      doi: "https://doi.org/10.1101/2024.06.04.24308434 ",
      pdfUrl: "https://www.medrxiv.org/content/10.1101/2024.06.04.24308434v2"
    },
    {
      id: "longitudinal-pLGG-tracking",
      title: "Deciphering pediatric low-grade glioma trajectories: Deep learning–based volumetrics for patients under surveillance.",
      authors: ["JC Climent Pardo", "A Zapaishchykova", "A Boyd", "D Tak", "M Mahootiha", "Z Ye", "..."],
      journal: "Journal of Clinical Oncology 42 (16_suppl), 2066-2066",
      year: "2024",
      abstract: "Background: Pediatric low-grade gliomas (pLGGs) have heterogeneous clinical presentations and prognoses. Given the morbidity of treatment, some suspected pLGGs, especially those found incidentally, are surveilled without treatment, though the natural histories of these tumors have yet to be systematically studied. We leveraged deep learning and multi-institutional data to methodically analyze longitudinal volumetric trajectories of pLGGs on surveillance, yielding insights into their growth trajectories and clinical implications. Methods: We conducted a pooled, retrospective study of pLGG patients diagnosed between 1992 and 2020 from two sources (Dana-Farber Cancer Institute/Boston Children’s Hospital and the Children's Brain Tumor Network), who were surveilled untreated for at least one-year post-diagnosis and who had linked clinical data and longitudinal MRI available. We applied a validated pLGG deep learning segmentation algorithm to longitudinal T2-weighted MRIs and calculated the 3-dimensional volumes at each timepoint. We evaluated individual tumor trajectories, curve shape, treatment initiation, and risk factors such as age, sex or tumor location for radiographic progression and regression (defined as volumetric change >=25% and <=-25% respectively) with univariable and multivariable logistic regression. Unsupervised time-series K-means and density-based spatial clustering with dynamic time wrapping were conducted to uncover volumetric phenotypes and a hybrid statistical time-series algorithm combining auto-regressive integrated moving average and generalized autoregressive conditional heteroskedasticity was evaluated to predict future volumetric changes. Results: Of 1774 scans from 129 patients (median follow-up of 4.0 years and median age of 13.9 years), baseline tumor median volume was 5.8 cm3 (range: 0.01-108.1), with 33 cortical (25.5%), 21 brainstem (16.2%), and 21 (16.2%) cerebellar locations. At the last follow-up, 33.8% of tumors progressed, 35.8% were stable, and 30.2% had regressed. Treatment was initiated for 46.5% of the tumors, of which 70.4% underwent surgery. Risk factors such as adolescent age, larger baseline volume size, cortical location and symptomatic presentation were most associated with progression (p<0.05 for each). Clustering revealed three distinct volumetric phenotypes with diverging natural histories, corresponding to progression, stability or regression. The hybrid forecasting showed average root-mean-squared error values of >1 cm3 (std. >0.18 cm3) at training and testing combined. Conclusions: Deep learning auto-segmentation enables longitudinal, volumetric tracking of pLGG, yielding novel insights into the clinical trajectories of untreated tumors on surveillance, allowing a classification into progressors, regressors and stables.",
      tags: ["Abstract", "3D Volumetrics","Risk Stratification", "Pediatric Glioma", "Deep Learning"],
      doi: "https://doi.org/10.1200/JCO.2024.42.16_suppl.2066",
      pdfUrl: "https://ascopubs.org/doi/abs/10.1200/JCO.2024.42.16_suppl.2066"
    },
    {
      id: "zezhong-ye-abstract",
      title: "Automated Lymph Node and Extranodal Extension Assessment Improves Risk Stratification in Oropharyngeal Carcinoma",
      authors: ["Z Ye", "R Mojahed-Yazdi", "A Zapaishchykova", "D Tak", "M Mahootiha", "..."],
      journal: "SSRN",
      year: "2023",
      abstract: "Background: Extranodal extension (ENE) is a biomarker in oropharyngeal carcinoma (OPC) but can only be diagnosed via surgical pathology. Number of ENE-involved lymph nodes is not routinely reported but may yield additional prognostic information. We applied an automated AI imaging platform integrating lymph node auto-segmentation with ENE prediction to determine the prognostic value of the number of predicted ENE nodes. Methods: We conducted a multi-institutional, retrospective study of 1,733 OPC patients with pretreatment CT who underwent definitive radiation therapy across three institutions internationally. Malignant lymph nodes were segmented using a validated deep learning model, and segmented lymph nodes were sequentially processed with a validated ENE prediction model. Number of nodes with AI-predicted ENE (AI-ENE) was calculated per patient. We evaluated the associations of AI-ENE node number and disease outcomes with multivariable Cox regression, adjusting for HPV-status, smoking pack-years, AJCC 7th edition tumor and nodal stage, age, and sex. We evaluated the risk-stratification potential using the Kaplan-Meier method with Log-rank tests.",
      tags: ["Abstract","Risk Stratification", "Oropharyngeal Carcinoma", "AI Imaging"],
      doi: "",
      pdfUrl: ""
    },
    {
      id: "few-shot-image-synthesis",
      title: "Few-shot Image Synthesis",
      authors: ["JCC Pardo"],
      journal: "",
      year: "2022",
      abstract: "In this blog post, the definition and development of image synthesis are generalized, popular methods using GANs are briefly classified and presented, and their performance is compared under different evaluation criteria. The relevant papers are marked at the end as references.",
      tags: ["WebPost", "Image Synthesis", "GANs"],
      doi: "",
      pdfUrl: ""
    }
  ];
  