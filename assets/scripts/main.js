const projects = document.querySelectorAll('.project_item');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const projectCollection = document.querySelector('.project_collection');
const aside = document.querySelector('aside');

projects.forEach(project => {
	project.addEventListener('click', () => {
		// Clear previous active states
		projects.forEach(p => p.classList.remove('active'));
		project.classList.add('active');

		// Fill modal with project content
		modalBody.innerHTML = project.innerHTML;

		// Show modal
		modal.classList.add('active');
		projectCollection.classList.add('blur');
		aside.classList.add('blur');
	});
});

function closeModal() {
	modal.classList.remove('active');
	projectCollection.classList.remove('blur');
	aside.classList.remove('blur');
	projects.forEach(p => p.classList.remove('active'));
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
	if (e.target === modal) closeModal();
});

// Optional: close with Esc key
document.addEventListener('keydown', (e) => {
	if (e.key === "Escape") closeModal();
});
