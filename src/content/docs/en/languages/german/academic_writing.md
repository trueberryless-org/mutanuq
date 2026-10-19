---
title: Academic Writing
description: "From choosing a topic to presenting the diploma thesis: research, evaluating sources, citing with APA, Harvard and footnotes, plagiarism, structure and labelling AI use."
sidebar:
  order: 7
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

At an HTL, the **diploma thesis** is part of the school-leaving and diploma examination. It is an independently written, practice-oriented project, usually done in a team and often with a company as the client. It consists of the written thesis and its **presentation and discussion** in front of the examination board. Even though the diploma thesis is not a university project, the same basic rules of academic work apply: traceability, honesty in dealing with sources and a clear structure.

## Overview of the process

| Phase                     | Content                                                         | Result                           |
| ------------------------- | --------------------------------------------------------------- | -------------------------------- |
| choosing a topic          | idea, client, team, supervision                                 | topic proposal                   |
| application and approval  | formulate aim, division of tasks, schedule                      | approved application             |
| research and implementation | literature, state of the art, development, measurements, surveys | material, prototype, data     |
| writing                   | outline, first draft, revision                                  | finished thesis                  |
| submission                | formal check, plagiarism check, upload, printed copies          | submitted diploma thesis         |
| presentation and discussion | talk to the examination board, answer questions               | assessment                       |

Throughout the work, each team member keeps a **progress log** documenting work steps, time spent and meetings with the supervisor. It shows who independently produced which part.

## Choosing a topic

A good topic is:

-   **narrowly defined:** "artificial intelligence" is too broad; "detecting defective components with an image classifier for company X" is manageable.
-   **linked to a research question or objective:** what exactly should be answered or built at the end?
-   **divisible within the team:** each member needs their own clearly defined part that can be assessed individually.
-   **feasible** with the available resources (time, hardware, data, expertise).
-   **interesting for you:** you will work on it for almost a year.

Formulate a **research question** or objective at the start and derive sub-questions from it. They determine what belongs in the thesis and what does not.

## Research

| Source                                 | Examples                                                       |
| -------------------------------------- | -------------------------------------------------------------- |
| library catalogues                     | school library, university and city libraries, Austrian National Library |
| academic search engines and databases  | Google Scholar, IEEE Xplore, ACM Digital Library, SpringerLink |
| norms and standards                    | ÖNORM, EN, ISO, IEC, IETF RFCs                                  |
| specialist literature and documentation | textbooks, manufacturer documentation, data sheets            |
| own data collection                    | interviews, surveys, measurements, experiments                 |

While reading, note the **complete bibliographic details** (with page number, and access date for web pages). A reference manager (for example Zotero or Citavi) generates bibliographies automatically in the required citation style.

## Evaluating sources

Not every source is citable. Check it, for example, with the **CRAAP test**:

| Criterion   | Question                                                      |
| ----------- | ------------------------------------------------------------- |
| Currency    | When was the source published or updated? Is it current enough for the topic? |
| Relevance   | Does it fit the research question? Is it at the right level?  |
| Authority   | Who is the author, with what qualifications, at which institution? |
| Accuracy    | Are statements supported, verifiable, free of errors?        |
| Purpose     | Does the source aim to inform, sell or persuade? Are there conflicts of interest? |

**Citable** sources are published, permanently retrievable and attributable to a person or institution. Wikipedia is useful as a starting point and for references, but only of limited use as a cited source in a diploma thesis. Answers from AI chatbots are **not** sources for facts because they cannot be verified and may contain invented information.

## Citing

Every use of someone else's ideas must be marked, whether word for word or paraphrased. This shows what your work builds on and clearly separates your own achievement from that of others.

### Direct quotation

A **direct quotation** reproduces the exact wording, in quotation marks and with a page reference.

-   Mark omissions with **[...]** and your own additions with square brackets: „Er [der Router] leitet Pakete weiter.“
-   Errors in the original remain and are marked with **[sic]**.
-   Long quotations (in APA from 40 words, otherwise usually from three lines) are set as an indented **block** without quotation marks.
-   Use direct quotations sparingly: only when the exact wording matters (definitions, concise statements).

### Indirect quotation

An **indirect quotation** (paraphrase) reproduces an idea in your own words. It also needs a reference; in the German footnote style it is often introduced with **vgl.** (cf., compare). Changing only individual words is not sufficient paraphrasing and counts as plagiarism.

### Citation styles

Your school usually prescribes a citation style. What matters is that you use **one** style **consistently**.

#### APA (7th edition)

The APA style of the American Psychological Association is an author-date system widely used in engineering and the sciences.

| Case                       | In-text citation                                      |
| -------------------------- | ----------------------------------------------------- |
| one author, direct quotation | (Tanenbaum, 2021, p. 45); in German texts S. 45     |
| two authors                | (Kurose & Ross, 2021) or Kurose and Ross (2021)       |
| three or more authors      | (Tanenbaum et al., 2021)                              |
| institution                | (Statistik Austria, 2024)                             |
| narrative                  | According to Tanenbaum et al. (2021) ...              |

Reference list (alphabetical by surname, hanging indent):

```text
Book:
Tanenbaum, A. S., Feamster, N., & Wetherall, D. J. (2021). Computer networks (6th ed.). Pearson.

Journal article:
Müller, L., & Huber, K. (2023). Energieeffizienz von Rechenzentren in Österreich. Elektrotechnik und Informationstechnik, 140(3), 210-218. https://doi.org/10.xxxx/xxxxx

Web page:
Statistik Austria. (2024, March 15). IKT-Einsatz in Haushalten 2024. https://www.statistik.at/...

AI tool:
OpenAI. (2025). ChatGPT (March 10 version) [Large language model]. https://chat.openai.com
```

In APA, book and journal titles are set in italics. In a German-language thesis, the German equivalents are used (S. for p., Aufl. for ed., und for and in running text).

#### Harvard style

The **Harvard style** is also an author-date system; its exact form varies between institutions. A common form in German-language theses:

```text
in the text:
(Tanenbaum/Feamster/Wetherall 2021, S. 45) or (Tanenbaum et al. 2021, S. 45)

reference list:
Tanenbaum, Andrew S./Feamster, Nick/Wetherall, David J. (2021): Computer Networks. 6. Aufl., Harlow: Pearson.
```

#### Footnotes (German citation style)

In the **footnote style**, a superscript number appears in the text and the reference follows at the bottom of the page. The first time you cite a source, you give a full reference; after that, a short reference.

```text
Text:       Router arbeiten auf der Vermittlungsschicht.¹ ... Sie wählen den Weg anhand von Routingtabellen.²

Footnotes:
¹ Vgl. Tanenbaum, Andrew S./Feamster, Nick/Wetherall, David J.: Computer Networks. 6. Aufl., Harlow: Pearson 2021, S. 45.
² Ebd., S. 47.
```

`Ebd.` (ebenda, ibid.) means that the source is the same as in the immediately preceding footnote.

### Reference list

The **reference list** contains **all** cited sources and **only** those, ordered alphabetically by the authors' surnames. Figures and tables from other sources also need a reference (in the caption) and appear in the list of figures or tables.

## Plagiarism

**Plagiarism** means passing off other people's texts, ideas, figures, code or data as your own. Forms include:

-   **complete plagiarism:** copying entire texts without a reference
-   **partial plagiarism:** inserting passages without quotation marks or reference
-   **disguised plagiarism:** slightly rewording texts without naming the source
-   **translation plagiarism:** translating texts from another language and passing them off as your own
-   **self-plagiarism:** reusing your own previously assessed work without saying so
-   **unlabelled AI text:** passing off AI-generated passages as your own wording

Diploma theses are checked with plagiarism software. With the **declaration of authorship**, you confirm that you wrote the thesis yourself and named all sources and tools. Proven plagiarism means that the thesis cannot be assessed. Copied **program code** (for example from Stack Overflow or open-source projects) must also be credited with its source and licence.

## Structure of the diploma thesis

| Part                               | Content                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------- |
| title page                         | title, school, department, authors, supervision, client, date           |
| declaration of authorship          | signed declaration by each team member                                  |
| acknowledgements (optional)        | thanks to supervisors, company, interviewees                            |
| abstract (German and English)      | summary of the entire thesis in both languages                          |
| table of contents                  | numbered outline with page numbers                                      |
| introduction                       | starting situation, problem, objective, research question, method, structure of the thesis, division of tasks |
| main part                          | fundamentals, state of the art, concept, implementation, results, each stating the person responsible |
| conclusion                         | answer to the research question, evaluation, limitations, outlook       |
| lists                              | references, figures, tables, abbreviations, list of tools if needed     |
| appendix                           | progress logs, questionnaires, interview transcripts, code excerpts, plans |

### Abstract

The **abstract** is a self-contained summary (usually 150 to 300 words) in **German and English**. It answers: what was the problem? What was the aim? How did you proceed? What is the result? It contains no quotations and no references to chapters. The English abstract is a careful version of the same content, not a word-for-word translation. Write the abstract last, once the results are fixed.

### Introduction, main part and conclusion

-   The **introduction** leads to the research question and explains how the thesis is structured. It only promises what the main part delivers.
-   The **main part** is logically structured (usually at most three levels of headings, e.g. 2.3.1). Each chapter begins with a sentence saying what it is about. Technical terms are explained when they first appear. Your own results, measurements and decisions are justified.
-   The **conclusion** answers the research question, evaluates the results critically, names the limitations of the work and gives an outlook. It does not introduce new content.

### Language

Academic language is **factual, precise and traceable**. Avoid colloquial language, exaggeration and unsupported judgements. Whether you may write in the first person (I, we) depends on the requirements; in diploma theses, "we" is usually accepted for team decisions. Advice on nominal style, the passive and coherence can be found under [Style](/en/languages/german/style/).

## Formal requirements

Your school sets the exact requirements (length, layout, template). Typical guidelines are:

| Element          | typical guideline                                           |
| ---------------- | ----------------------------------------------------------- |
| font             | an easily readable font, 11 to 12 pt for body text          |
| line spacing     | 1.15 to 1.5                                                 |
| alignment        | justified with hyphenation, or left-aligned                 |
| margins          | about 2.5 cm                                                |
| page numbers     | Arabic from the introduction, often Roman or none before it |
| headings         | numbered (1, 1.1, 1.1.1)                                    |
| figures and tables | numbered, captioned, with source, referred to in the text |

Use the automatic features of your word processor (styles, automatic table of contents, captions, cross-references). This saves time and prevents errors when you make changes.

## AI tools and labelling their use

AI tools such as chatbots, translation programs, spelling checkers or code assistants can help with the work, for example with structuring ideas, revising wording or finding programming errors. Whether and for what they may be used is decided by the school and the supervisor. In general:

-   **Responsibility:** you are responsible for every sentence and every line of code in your thesis. Always check facts supplied by an AI against reliable sources.
-   **Labelling:** use AI tools transparently. In a **list of tools** or in the declaration of authorship, state which tool (name, version, date) you used, for what and in which chapters. Mark AI wording you adopt like a quotation.
-   **Documentation:** save important inputs (prompts) and outputs so that you can show your use on request. Also record the use in the progress log.
-   **Data protection:** do not enter confidential company data or personal data into public AI services.

| Use                                         | Example entry in the list of tools                                 |
| ------------------------------------------- | ------------------------------------------------------------------ |
| spelling and grammar check                  | spelling checker of the word processor, entire thesis              |
| help with wording                           | ChatGPT (OpenAI), March 2025: rewording of chapter 3.2, revised by the author |
| code assistance                             | GitHub Copilot, 2025: suggestions for unit tests in chapter 5.4, checked and adapted |

## Presenting the diploma thesis

In the **presentation and discussion**, the team presents the thesis to the examination board; afterwards each team member answers questions about their part. The maximum duration per candidate is set in the examination regulations; ask at your school for the current requirement and plan your time precisely.

The following structure has proved effective:

1.  **Opening:** problem and client in one sentence, aim of the thesis
2.  **Division of tasks:** who did what?
3.  **Individual parts:** each member presents their contribution (approach, results, difficulties)
4.  **Result:** demonstration of the prototype or the most important results
5.  **Conclusion and outlook**

Tips:

-   Show what **you** did and decided, and justify it. The board assesses each person individually.
-   A **live demo** is convincing, but keep a video or screenshots ready as plan B.
-   Prepare for typical questions: why this technology? What would you do differently today? How was it tested? What are the limitations?

General advice on slides, body language and stage fright can be found under [Communication and presentation](/en/languages/german/communication_and_presentation/#presentation-technique).

## Further reading

-   [Diploma theses at vocational schools: information portal of the Austrian Ministry of Education](https://www.diplomarbeiten-bbs.at/)
-   American Psychological Association: Publication Manual of the American Psychological Association, 7th edition, 2020.
-   [APA Style: reference examples](https://apastyle.apa.org/style-grammar-guidelines/references/examples)
