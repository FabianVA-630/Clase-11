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
        label: '# of Votes',
        data: [59, 5, 12, 4, 13, 6, 11, 8, 6, 7, 6, 4, 4, 2, 2, 1 ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
