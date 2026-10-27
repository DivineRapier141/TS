"use strict";
const STORAGE_KEY = 'workout_planner_entries';
let workouts = [];
const $ = (id) => document.getElementById(id);
function loadWorkouts() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
function saveWorkouts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
}
function formatDate(dateStr) {
    const p = dateStr.split('-');
    return p.length === 3 ? `${p[2]}.${p[1]}.${p[0]}` : dateStr;
}
function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}
function renderWorkouts() {
    const typeFilter = $('filterType').value;
    const dateFilter = $('filterDate').value;
    const list = $('workoutsList');
    const empty = $('emptyState');
    const filtered = workouts.filter((w) => {
        return (typeFilter === 'всі' || w.type === typeFilter) && (!dateFilter || w.date === dateFilter);
    });
    list.innerHTML = '';
    empty.classList.toggle('hidden', filtered.length > 0);
    filtered.forEach((w) => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        const intensityClass = w.intensity === 'низька' ? 'intensity-low' : w.intensity === 'висока' ? 'intensity-high' : 'intensity-medium';
        card.innerHTML = `
            <div>
                <div class="workout-card-header">
                    <span class="workout-type-tag">${w.type}</span>
                    <span class="badge-intensity ${intensityClass}">${w.intensity}</span>
                </div>
                <h3 class="workout-title">${escapeHtml(w.title)}</h3>
                <div class="workout-meta">
                    <div class="meta-item"><span class="meta-label">Дата</span><span class="meta-value">${formatDate(w.date)}</span></div>
                    <div class="meta-item"><span class="meta-label">Тривалість</span><span class="meta-value">${w.duration} хв</span></div>
                </div>
                ${w.comment ? `<div class="workout-comment">"${escapeHtml(w.comment)}"</div>` : ''}
            </div>
            <div class="workout-card-footer">
                <button class="btn btn-secondary edit-btn">Редагувати</button>
                <button class="btn btn-ghost delete-btn">Видалити</button>
            </div>
        `;
        card.querySelector('.edit-btn').addEventListener('click', () => openEditModal(w.id));
        card.querySelector('.delete-btn').addEventListener('click', () => deleteWorkout(w.id));
        list.appendChild(card);
    });
}
function deleteWorkout(id) {
    if (confirm('Ви дійсно бажаєте видалити це тренування?')) {
        workouts = workouts.filter((w) => w.id !== id);
        saveWorkouts();
        renderWorkouts();
    }
}
function openAddModal() {
    $('workoutForm').reset();
    $('modalTitle').textContent = 'Додати тренування';
    $('workoutId').value = '';
    $('date').value = new Date().toISOString().split('T')[0];
    $('workoutModal').classList.remove('hidden');
}
function openEditModal(id) {
    const w = workouts.find((item) => item.id === id);
    if (!w)
        return;
    $('modalTitle').textContent = 'Редагувати тренування';
    $('workoutId').value = w.id;
    $('title').value = w.title;
    $('type').value = w.type;
    $('date').value = w.date;
    $('duration').value = w.duration.toString();
    $('intensity').value = w.intensity;
    $('comment').value = w.comment;
    $('workoutModal').classList.remove('hidden');
}
function closeWorkoutModal() {
    $('workoutModal').classList.add('hidden');
    $('workoutForm').reset();
}
function handleFormSubmit(e) {
    e.preventDefault();
    const id = $('workoutId').value;
    const title = $('title').value.trim();
    const type = $('type').value;
    const date = $('date').value;
    const duration = parseInt($('duration').value, 10);
    const intensity = $('intensity').value;
    const comment = $('comment').value.trim();
    if (!title || !date || isNaN(duration) || duration <= 0)
        return;
    if (id) {
        workouts = workouts.map((w) => (w.id === id ? { id, title, type, date, duration, intensity, comment } : w));
    }
    else {
        workouts.push({ id: Date.now().toString(), title, type, date, duration, intensity, comment });
    }
    saveWorkouts();
    renderWorkouts();
    closeWorkoutModal();
}
document.addEventListener('DOMContentLoaded', () => {
    workouts = loadWorkouts();
    renderWorkouts();
    $('addWorkoutBtn').addEventListener('click', openAddModal);
    $('closeModalBtn').addEventListener('click', closeWorkoutModal);
    $('cancelModalBtn').addEventListener('click', closeWorkoutModal);
    $('workoutForm').addEventListener('submit', handleFormSubmit);
    $('filterType').addEventListener('change', renderWorkouts);
    $('filterDate').addEventListener('change', renderWorkouts);
    $('resetFiltersBtn').addEventListener('click', () => {
        $('filterType').value = 'всі';
        $('filterDate').value = '';
        renderWorkouts();
    });
    $('workoutModal').addEventListener('click', (e) => {
        if (e.target === $('workoutModal') || e.target.classList.contains('modal-backdrop'))
            closeWorkoutModal();
    });
});
