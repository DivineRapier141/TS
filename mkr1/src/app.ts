type ActivityType = 'біг' | 'плавання' | 'силове' | 'велосипед' | 'йога' | 'кардіо' | 'інше';
type IntensityLevel = 'низька' | 'середня' | 'висока';

interface Workout {
    id: string;
    title: string;
    type: ActivityType;
    date: string;
    duration: number;
    intensity: IntensityLevel;
    comment: string;
}

const STORAGE_KEY = 'workout_planner_entries';
let workouts: Workout[] = [];

const $ = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

function loadWorkouts(): Workout[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Workout[]) : [];
    } catch {
        return [];
    }
}

function saveWorkouts(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
}

function formatDate(dateStr: string): string {
    const p = dateStr.split('-');
    return p.length === 3 ? `${p[2]}.${p[1]}.${p[0]}` : dateStr;
}

function escapeHtml(str: string): string {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

function renderWorkouts(): void {
    const typeFilter = $<HTMLSelectElement>('filterType').value;
    const dateFilter = $<HTMLInputElement>('filterDate').value;
    const list = $<HTMLDivElement>('workoutsList');
    const empty = $<HTMLDivElement>('emptyState');

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

        card.querySelector('.edit-btn')!.addEventListener('click', () => openEditModal(w.id));
        card.querySelector('.delete-btn')!.addEventListener('click', () => deleteWorkout(w.id));
        list.appendChild(card);
    });
}

function deleteWorkout(id: string): void {
    if (confirm('Ви дійсно бажаєте видалити це тренування?')) {
        workouts = workouts.filter((w) => w.id !== id);
        saveWorkouts();
        renderWorkouts();
    }
}

function openAddModal(): void {
    $<HTMLFormElement>('workoutForm').reset();
    $<HTMLHeadingElement>('modalTitle').textContent = 'Додати тренування';
    $<HTMLInputElement>('workoutId').value = '';
    $<HTMLInputElement>('date').value = new Date().toISOString().split('T')[0];
    $<HTMLDivElement>('workoutModal').classList.remove('hidden');
}

function openEditModal(id: string): void {
    const w = workouts.find((item) => item.id === id);
    if (!w) return;

    $<HTMLHeadingElement>('modalTitle').textContent = 'Редагувати тренування';
    $<HTMLInputElement>('workoutId').value = w.id;
    $<HTMLInputElement>('title').value = w.title;
    $<HTMLSelectElement>('type').value = w.type;
    $<HTMLInputElement>('date').value = w.date;
    $<HTMLInputElement>('duration').value = w.duration.toString();
    $<HTMLSelectElement>('intensity').value = w.intensity;
    $<HTMLTextAreaElement>('comment').value = w.comment;
    $<HTMLDivElement>('workoutModal').classList.remove('hidden');
}

function closeWorkoutModal(): void {
    $<HTMLDivElement>('workoutModal').classList.add('hidden');
    $<HTMLFormElement>('workoutForm').reset();
}

function handleFormSubmit(e: Event): void {
    e.preventDefault();

    const id = $<HTMLInputElement>('workoutId').value;
    const title = $<HTMLInputElement>('title').value.trim();
    const type = $<HTMLSelectElement>('type').value as ActivityType;
    const date = $<HTMLInputElement>('date').value;
    const duration = parseInt($<HTMLInputElement>('duration').value, 10);
    const intensity = $<HTMLSelectElement>('intensity').value as IntensityLevel;
    const comment = $<HTMLTextAreaElement>('comment').value.trim();

    if (!title || !date || isNaN(duration) || duration <= 0) return;

    if (id) {
        workouts = workouts.map((w) => (w.id === id ? { id, title, type, date, duration, intensity, comment } : w));
    } else {
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
        $<HTMLSelectElement>('filterType').value = 'всі';
        $<HTMLInputElement>('filterDate').value = '';
        renderWorkouts();
    });

    $('workoutModal').addEventListener('click', (e) => {
        if (e.target === $('workoutModal') || (e.target as HTMLElement).classList.contains('modal-backdrop')) closeWorkoutModal();
    });
});