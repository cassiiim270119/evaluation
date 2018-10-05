<template>
  <div class="sidebar h-100">
    <div class="card-sidebar d-flex flex-column justify-content-between p-3">
      <span class="font-small text--light mb-3">
        Encerrará em 14 dias
      </span>
      <div class="progress w-100">
        <div class="progress-bar" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100" style="width:90%">
        </div>
      </div>
    </div>
    <div class="card-sidebar d-flex flex-row justify-content-between p-3">
      <span class="font-x-small text--ligth-green">
        EVIDÊNCIAS
      </span>
      <checkIcon class="icon-small-squad icon--green"/>
    </div>
    <div class="card-sidebar d-flex flex-row justify-content-between p-3">
      <span class="font-x-small text--ligth-green">
        AUTO-REFLEXÃO
      </span>
      <checkIcon class="icon-small-squad icon--green"/>
    </div>
    <div class="card-sidebar d-flex flex-row justify-content-between p-3">
      <span class="font-x-small text--ligth-green">
        FEEDBACK
      </span>
      <checkIcon class="icon-small-squad icon--green"/>
    </div>
    <div class="card-sidebar-active d-flex flex-column
    justify-content-between p-3 border-right border-success">
      <span class="font-small font-bold text--green mb-2">
        AVALIAÇÃO DO MENTOR
      </span>
      <span class="font-small text--brown">
        Avalie o trabalho realizado pelo seu mentor durante este ciclo de formação.
      </span>
    </div>
  </div>
</template>

<script>
import checkIcon from '@/static/icon/check.svg';

export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
  components: {
    checkIcon,
  },
};
</script>
