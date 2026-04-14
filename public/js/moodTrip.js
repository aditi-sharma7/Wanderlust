let selectedMood = "";
let selectedLabel = "";

// Mood card selection
document.querySelectorAll(".mood-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mood-card").forEach((c) => {
      c.style.border = "1.5px solid #dee2e6";
      c.style.background = "";
    });
    card.style.border = "2px solid #7F77DD";
    card.style.background = "#eeedfe";
    selectedMood = card.dataset.mood;
    selectedLabel = card.dataset.label;
    document.getElementById("customMood").value = "";
  });
});

// Generate button
document.getElementById("generateBtn").addEventListener("click", async () => {
  const custom = document.getElementById("customMood").value.trim();
  const moodInput = custom || selectedMood;
  const moodLabel = custom ? "Custom" : selectedLabel;

  if (!moodInput) {
    alert("Please pick a mood or describe how you want to feel.");
    return;
  }

  document.getElementById("loadingDiv").style.display = "block";
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("generateBtn").disabled = true;

  try {
    const res = await fetch("/mood/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moodInput, moodLabel }),
    });

    const data = await res.json();
    if (!data.success) throw new Error("Generation failed");

    renderResult(data.result, moodInput, moodLabel);
  } catch (err) {
    alert("Something went wrong. Please try again.");
  } finally {
    document.getElementById("loadingDiv").style.display = "none";
    document.getElementById("generateBtn").disabled = false;
  }
});

function renderResult(result, moodInput, moodLabel) {
  // Fill display
  document.getElementById("resultDestination").textContent = result.destination;
  document.getElementById("resultTagline").textContent = result.tagline;

  // Palette
  const paletteDiv = document.getElementById("resultPalette");
  paletteDiv.innerHTML = result.palette
    .map((c) => `<div style="width:30px;height:30px;border-radius:50%;background:${c};" title="${c}"></div>`)
    .join("");

  // Itinerary
  const itinDiv = document.getElementById("resultItinerary");
  itinDiv.innerHTML = result.itinerary
    .map(
      (d) => `
      <div class="d-flex gap-3 align-items-start mb-2">
        <div style="width:26px;height:26px;border-radius:50%;background:#eeedfe;color:#534ab7;
          font-size:0.75rem;display:flex;align-items:center;justify-content:center;
          flex-shrink:0;font-weight:600;">${d.day}</div>
        <p class="mb-0" style="font-size:0.9rem;">${d.plan}</p>
      </div>`
    )
    .join("");

  // Tags
  const tagsDiv = document.getElementById("resultTags");
  tagsDiv.innerHTML = result.moodTags
    .map((t) => `<span class="badge me-1" style="background:#eeedfe;color:#534ab7;">${t}</span>`)
    .join("");

  // Fill hidden save form
  document.getElementById("hiddenMoodInput").value   = moodInput;
  document.getElementById("hiddenMoodLabel").value   = moodLabel;
  document.getElementById("hiddenDestination").value = result.destination;
  document.getElementById("hiddenTagline").value     = result.tagline;
  document.getElementById("hiddenPalette").value     = JSON.stringify(result.palette);
  document.getElementById("hiddenItinerary").value   = JSON.stringify(result.itinerary);
  document.getElementById("hiddenMoodTags").value    = JSON.stringify(result.moodTags);

  document.getElementById("resultSection").style.display = "block";
  document.getElementById("resultSection").scrollIntoView({ behavior: "smooth" });
}