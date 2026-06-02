<div>
  <canvas id="dispersion"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('dispersion');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Metropolitana', 'La Araucanía', 'Valparaíso', 'Ñuble', 'Biobío', 'Maule', 'Coquimbo', 'O Higgins', 'Los Lagos', 'Los Ríos', 'Tarapacá', 'Antofagasta', 'Arica y Parinacota', 'Aysén', 'Magallanes', 'Atacama'],
      datasets: [{
        label: 'Con gratuidad',
        data: [59, 5, 12, 4, 13, 6, 11, 8, 6, 7, 6, 4, 4, 2, 2, 1 ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>

<div>
  <canvas id="otro"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('otro');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Metropolitana', 'La Araucanía', 'Valparaíso', 'Ñuble', 'Biobío', 'Maule', 'Coquimbo', 'O Higgins', 'Los Lagos', 'Los Ríos', 'Tarapacá', 'Antofagasta', 'Arica y Parinacota', 'Aysén', 'Magallanes', 'Atacama'],
      datasets: [{
        label: 'Arancel promedio',
        data: [$3.039.355, $2.921.714, $2.850.333, $3.104.500, $2.718.839, $3.051.000, $3.024.046, $2.882.421, $2.932.625, $3.088.286, $3.043.333, $2.553.750, $3.104.500, $2.921.000, $2.921.000, $2.795.000 ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
