document.addEventListener("DOMContentLoaded", () => {
  const planUploadForm = document.getElementById("plan-upload-form");
  const planFileInput = document.getElementById("plan-file-upload");
  const uploadMessage = document.getElementById("upload-message");

  const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxFileSize = 5 * 1024 * 1024;

  planUploadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const planName = document.getElementById("plan-name").value;
    const planDescription = document.getElementById("plan-description").value;
    const uploadedFile = planFileInput.files[0];

    if (!planName || !planDescription || !uploadedFile) {
      alert("Please fill in all required fields and upload a file.");
      return;
    }

    if (!allowedFileTypes.includes(uploadedFile.type)) {
      alert("Only .jpg, .png, and .pdf files are allowed.");
      planFileInput.value = "";
      return;
    }

    if (uploadedFile.size > maxFileSize) {
      alert("File size exceeds 5MB limit.");
      planFileInput.value = "";
      return;
    }

    uploadMessage.textContent = `Successfully uploaded: ${uploadedFile.name}`;
    uploadMessage.classList.remove("hidden");
  });
});
