<template>
  <div class="header-default w-100 pl-4 pr-4">
    <arrowBackIcon class="icon-small icon--light"/>
    <span class="font-bold">UNA-01-2018</span>
    <div>
      <div class="div-icon pr-4">
        <readIcon class="icon-small icon--light"/>
      </div>
      <menuIcon class="icon-small icon--light"/>
    </div>
  </div>
</template>

<script>
import arrowBackIcon from '@/static/icon/arrowBack.svg';
import readIcon from '@/static/icon/read.svg';
import menuIcon from '@/static/icon/menu.svg';

export default {
  name: 'Header',
  data() {
    return {
    };
  },
  components: {
    arrowBackIcon,
    readIcon,
    menuIcon,
  },
};
</script>
