<template>
  <div class="submissions-page">
    <div class="submissions-header">
      <div class="container">
        <h1>My Submissions</h1>
        <p>A gallery of your completed projects. Share them with pride!</p>
      </div>
    </div>
    
    <div class="container">
      <div class="submissions-content">
        <div class="submissions-grid">
          <!-- Placeholder for submitted projects -->
          <div class="submission-card">
            <img src="https://via.placeholder.com/400x300" alt="Project thumbnail" class="submission-thumbnail">
            <div class="submission-info">
              <h3>Testimonial Card</h3>
              <p>Completed on: October 26, 2025</p>
              <div class="submission-actions">
                <a href="#" class="btn btn-outline">View Solution</a>
                <a href="#" class="btn">Share</a>
              </div>
            </div>
          </div>
          
          <div class="submission-card">
            <img src="https://via.placeholder.com/400x300" alt="Project thumbnail" class="submission-thumbnail">
            <div class="submission-info">
              <h3>Star Rating Component</h3>
              <p>Completed on: November 10, 2025</p>
              <div class="submission-actions">
                <a href="#" class="btn btn-outline">View Solution</a>
                <a href="#" class="btn">Share</a>
              </div>
            </div>
          </div>
          
          <div class="placeholder-card">
            <p>A gallery of your completed projects will be shown here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This page would typically fetch user submissions from a backend.
// For this example, we are using static placeholder content.
</script>

<style scoped>
.submissions-page {
  background: #f8fafc;
  min-height: calc(100vh - 144px);
}

.submissions-header {
  background: white;
  padding: 64px 0;
  border-bottom: 1px solid #e5e7eb;
}

.submissions-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.submissions-header p {
  font-size: 20px;
  color: #6b7280;
}

.submissions-content {
  padding: 64px 0;
}

.submissions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.submission-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.submission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.submission-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.submission-info {
  padding: 24px;
}

.submission-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.submission-info p {
  color: #6b7280;
  margin-bottom: 24px;
}

.submission-actions {
  display: flex;
  gap: 12px;
}

.placeholder-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: #6b7280;
  font-size: 18px;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  text-align: center;
  min-height: 300px;
}

@media (max-width: 768px) {
  .submissions-header h1 {
    font-size: 36px;
  }
  
  .submissions-grid {
    grid-template-columns: 1fr;
  }
}
</style>