// Shared NGN case-study blocks + interaction logic.
// Used by week1-ngn-cases.html (standalone) and quiz-builder.html (embedded in a custom exam).

const NGN_CASES = [
{
  id: "case1",
  html: `
    <div class="ngn-case" id="case1">
      <div class="ngn-case-head"><h3>NGN Case &middot; Active Tuberculosis</h3></div>
      <div class="ngn-tabs">
        <div class="ngn-tab active" data-target="c1-chart">Patient Chart</div>
        <div class="ngn-tab" data-target="c1-question">NGN Question</div>
      </div>
      <div class="ngn-panel active" id="c1-chart">
        <table class="chart-table">
          <tr><td>History &amp; Physical</td><td>20-year-old male, follow-up with pulmonology after diagnosis of pulmonary tuberculosis (Mycobacterium tuberculosis) 3 weeks ago. Positive PPD, CXR revealed active TB. Hospitalized 2 weeks, now on Directly Observed Therapy (DOT) via public health nurse daily. Weight 160 lb. Vitals: Temp 97.8&deg;F, HR 74, RR 16, BP 128/66.</td></tr>
          <tr><td>Orders</td><td>Isoniazid 300 mg PO daily&#10;Rifampin 600 mg PO daily&#10;Pyrazinamide 1500 mg PO daily&#10;Ethambutol 1200 mg PO daily</td></tr>
          <tr><td>Nurses&rsquo; Notes (DOT)</td><td>Day 1&ndash;2: Meds administered, slight cough, no side effects.&#10;Day 3: Meds administered. Frustrated with high pill burden.&#10;Day 4: Feeling much better, cough resolved, appetite returned.&#10;Day 5: Reports crying red tears today. Education provided.&#10;Day 6: Expresses desire to drink alcohol (baseline 1&ndash;3 beers nightly pre-diagnosis). Education provided.</td></tr>
          <tr><td>Labs</td><td>Bilirubin 6.2 &micro;mol/L (ref 5.1&ndash;17) &middot; Alk Phos 60 U/L (ref 30&ndash;120) &middot; AST 38 U/L (ref 0&ndash;35) &middot; ALT 36 U/L (ref 4&ndash;36) &middot; Albumin 4.2 g/dL &middot; PT 11.9 sec (ref 11.0&ndash;12.5)</td></tr>
        </table>
      </div>
      <div class="ngn-panel" id="c1-question">
        <p class="cloze-sentence">
          The nurse teaches the client about reducing the side effect of the antitubercular medications, and shares that
          <select class="cloze-select" id="c1-d1">
            <option value="">select...</option>
            <option value="correct">alcohol consumption</option>
            <option value="wrong">avoiding citrus foods</option>
            <option value="wrong">colored tears</option>
          </select>
          will likely result in
          <select class="cloze-select" id="c1-d2">
            <option value="">select...</option>
            <option value="wrong">decreased risk of hepatotoxicity</option>
            <option value="correct">increased risk of hepatotoxicity</option>
            <option value="wrong">changing the medications</option>
          </select>.
        </p>
        <button class="btn" onclick="checkCloze('c1')">Check Answer</button>
        <div class="ngn-rationale" id="c1-rationale">
          <strong>Correct completion:</strong> "...shares that <strong>alcohol consumption</strong> will likely result in <strong>increased risk of hepatotoxicity</strong>."<br><br>
          Isoniazid, rifampin, and pyrazinamide all place the client at risk for drug-induced hepatotoxicity. Alcohol causes liver inflammation and compounds hepatocellular injury when combined with these agents. Citrus foods don't interact with antitubercular therapy. Red/rust-colored bodily fluids (tears, sweat, urine) are a harmless, expected effect of rifampin and don't require a medication change.
        </div>
      </div>
    </div>`
},
{
  id: "case2",
  html: `
    <div class="ngn-case" id="case2">
      <div class="ngn-case-head"><h3>NGN Case &middot; Herpes Zoster (Shingles)</h3></div>
      <div class="ngn-tabs">
        <div class="ngn-tab active" data-target="c2-chart">Patient Chart</div>
        <div class="ngn-tab" data-target="c2-question">NGN Question</div>
      </div>
      <div class="ngn-panel active" id="c2-chart">
        <table class="chart-table">
          <tr><td>History &amp; Physical</td><td>64-year-old male with headache, fatigue, and a painful red blistery rash on the upper back. Area itched/burned for 2 days before the rash appeared. Erythematous area with maculopapular lesions in a linear dermatomal formation on the upper back. Uncomplicated chickenpox as a child.</td></tr>
          <tr><td>Orders</td><td>1020: Acyclovir 800 mg PO every 4 hours (5 times/day) for 7 days</td></tr>
        </table>
      </div>
      <div class="ngn-panel" id="c2-question">
        <p class="lede">Select 2 actions, 1 potential condition, and 2 client education points.</p>
        <div class="ngn-select-grid">
          <div class="ngn-col">
            <h4>Actions to Take (choose 2)</h4>
            <label class="ngn-option"><input type="checkbox" data-group="c2-actions" value="wrong">Obtain a skin biopsy</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-actions" value="wrong">Complete allergy testing</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-actions" value="correct">Assess pain level</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-actions" value="correct">Assess history of renal impairment</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-actions" value="wrong">Obtain complete blood count (CBC)</label>
          </div>
          <div class="ngn-col">
            <h4>Potential Condition (choose 1)</h4>
            <label class="ngn-option"><input type="radio" name="c2-condition" data-group="c2-condition" value="wrong">Chickenpox</label>
            <label class="ngn-option"><input type="radio" name="c2-condition" data-group="c2-condition" value="correct">Herpes zoster (shingles)</label>
            <label class="ngn-option"><input type="radio" name="c2-condition" data-group="c2-condition" value="wrong">Psoriasis</label>
            <label class="ngn-option"><input type="radio" name="c2-condition" data-group="c2-condition" value="wrong">Eczema</label>
          </div>
          <div class="ngn-col">
            <h4>Client Education (choose 2)</h4>
            <label class="ngn-option"><input type="checkbox" data-group="c2-edu" value="correct">Notify provider if symptoms of neuropathy develop</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-edu" value="wrong">Use a second form of birth control</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-edu" value="correct">Take medication with food to reduce GI symptoms</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-edu" value="wrong">Ask for assistance getting up while using medication</label>
            <label class="ngn-option"><input type="checkbox" data-group="c2-edu" value="wrong">Do not discontinue use of medication abruptly</label>
          </div>
        </div>
        <button class="btn" onclick="checkGrid('case2')">Check Answers</button>
        <div class="ngn-rationale" id="case2-rationale">
          Herpes zoster (shingles) results from reactivation of dormant varicella-zoster virus in dorsal root ganglia &mdash; burning/itching prodrome followed by a unilateral, painful, dermatomal vesicular rash. Oral acyclovir is standard therapy. Acyclovir is renally eliminated, so a renal impairment history must be assessed to avoid drug accumulation/neurotoxicity. Ongoing pain assessment matters since acute neuralgia is common. Take acyclovir with meals to reduce GI upset, and report neuropathy/neurotoxicity symptoms (tremors, tingling, confusion) right away.
        </div>
      </div>
    </div>`
},
{
  id: "case3",
  html: `
    <div class="ngn-case" id="case3">
      <div class="ngn-case-head"><h3>NGN Case &middot; Vaginal Candidiasis</h3></div>
      <div class="ngn-tabs">
        <div class="ngn-tab active" data-target="c3-chart">Patient Chart</div>
        <div class="ngn-tab" data-target="c3-question">NGN Question</div>
      </div>
      <div class="ngn-panel active" id="c3-chart">
        <table class="chart-table">
          <tr><td>History &amp; Physical</td><td>24-year-old female with vaginal itching/burning for 4 days, thick white discharge. Completed a course of antibiotics 1 week prior for a now-resolved sinus infection. Monogamous, one partner, currently on oral contraceptives. Exam: erythema of vulva/vagina, thick white cottage-cheese-like odorless discharge.</td></tr>
          <tr><td>Nurses&rsquo; Notes &amp; Orders</td><td>1035: Client presents with vaginal pruritus, burning, and discharge.&#10;1050: Fluconazole 150 mg PO x 1 dose ordered.&#10;1100: Client education on antifungal pharmacotherapy provided.</td></tr>
        </table>
      </div>
      <div class="ngn-panel" id="c3-question">
        <p class="lede">Select 2 actions, 1 potential condition, and 2 client education points.</p>
        <div class="ngn-select-grid">
          <div class="ngn-col">
            <h4>Actions to Take (choose 2)</h4>
            <label class="ngn-option"><input type="checkbox" data-group="c3-actions" value="correct">Assess hypersensitivity to azoles</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-actions" value="correct">Provide pregnancy test before administering</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-actions" value="wrong">Complete an electrocardiogram (ECG)</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-actions" value="wrong">Obtain a vaginal culture</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-actions" value="wrong">Explain need to stop oral contraceptives</label>
          </div>
          <div class="ngn-col">
            <h4>Potential Condition (choose 1)</h4>
            <label class="ngn-option"><input type="radio" name="c3-condition" data-group="c3-condition" value="correct">Vaginal candidiasis</label>
            <label class="ngn-option"><input type="radio" name="c3-condition" data-group="c3-condition" value="wrong">Trichomoniasis</label>
            <label class="ngn-option"><input type="radio" name="c3-condition" data-group="c3-condition" value="wrong">Bacterial vaginosis</label>
            <label class="ngn-option"><input type="radio" name="c3-condition" data-group="c3-condition" value="wrong">Chlamydia</label>
          </div>
          <div class="ngn-col">
            <h4>Client Education (choose 2)</h4>
            <label class="ngn-option"><input type="checkbox" data-group="c3-edu" value="wrong">Avoid citrus foods</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-edu" value="wrong">Do not take birth control for 7 days</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-edu" value="correct">Monitor for symptoms of hepatotoxicity</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-edu" value="correct">Take with food</label>
            <label class="ngn-option"><input type="checkbox" data-group="c3-edu" value="wrong">Monitor blood pressure</label>
          </div>
        </div>
        <button class="btn" onclick="checkGrid('case3')">Check Answers</button>
        <div class="ngn-rationale" id="case3-rationale">
          Vaginal candidiasis is a common superinfection following systemic antibiotic therapy, since normal protective vaginal flora is eliminated. Fluconazole (single 150 mg oral dose) is the azole antifungal of choice. Verify azole allergy history and screen for pregnancy (teratogenic risk) before giving it. Teach the client to take it with food to reduce nausea, and to report signs of hepatotoxicity (jaundice, dark urine, pale stools, fatigue). Fluconazole doesn't require stopping oral contraceptives, ECG monitoring, blood pressure checks, or citrus restriction.
        </div>
      </div>
    </div>`
}
];

// ---- Shared interaction logic (used on the standalone NGN page too) ----
function checkCloze(prefix){
  ["d1","d2"].forEach(d => {
    const sel = document.getElementById(prefix + "-" + d);
    if(!sel) return;
    sel.classList.remove("correct","incorrect");
    if(sel.value === "correct") sel.classList.add("correct");
    else if(sel.value === "wrong") sel.classList.add("incorrect");
  });
  const rat = document.getElementById(prefix + "-rationale");
  if(rat) rat.classList.add("shown");
}

function checkGrid(caseId){
  document.querySelectorAll("#" + caseId + " .ngn-panel input").forEach(input => {
    const label = input.closest(".ngn-option");
    label.classList.remove("correct","incorrect","missed");
    if(input.checked && input.value === "correct") label.classList.add("correct");
    else if(input.checked && input.value === "wrong") label.classList.add("incorrect");
    else if(!input.checked && input.value === "correct") label.classList.add("missed");
  });
  const rat = document.getElementById(caseId + "-rationale");
  if(rat) rat.classList.add("shown");
}

// Binds tab-click behavior for any .ngn-case elements inside `container`.
// Safe to call repeatedly on freshly-inserted DOM (e.g. after a quiz regenerate).
function bindNGNTabs(container){
  (container || document).querySelectorAll(".ngn-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const caseEl = tab.closest(".ngn-case");
      caseEl.querySelectorAll(".ngn-tab").forEach(t => t.classList.remove("active"));
      caseEl.querySelectorAll(".ngn-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      caseEl.querySelector("#" + tab.dataset.target).classList.add("active");
    });
  });
}
