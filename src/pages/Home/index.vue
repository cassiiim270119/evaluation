<template>
  <v-layout>
    <div class="page-header p-3 d-flex align-items-center justify-content-between">
        <div>
          <starMiddleIcon class="icon-small-squad icon--brown"/>
          <span class="text--brown font-large font-bold ml-3">
            Avaliação do mentor
          </span>
        </div>
        <div>
          <span class="font-small text--light mr-3">
            Esta etapa se encerra em 4 dias
          </span>
          <timerIcon class="icon-small-squad icon--brown-light"/>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-center h-100 pl-5 pr-5 pt-3 pb-3">
      <div class="card-main d-flex flex-column justify-content-center p-3">
        <div class="d-flex justify-content-center w-100 p-3">
          <img src="../../static/img/atriz.jpg" class="avatar">
        </div>
        <div class="d-flex justify-content-center w-100">
          <p class="text-center text--brown">Como você avalia a participação do mentor
          <strong>Geovane Rodrigues</strong> durante o ciclo de formação que você participou?</p>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <star-rating v-model="model.fields.value.integerValue"/>
        </div>
        <div class="form-comment d-flex flex-column p-3 mb-3">
          <span class="text--light font-small font-bold">DEIXE SEU COMENTÁRIO</span>
          <textarea
            v-model="model.fields.comment.stringValue"
            class="form-textarea text--brown"
            maxlength=1000
            rows=5 ></textarea>
            <div class="d-flex justify-content-end w-100">
              <span class="text-right text--light">
                {{ model.fields.comment.stringValue.length }}/1000
              </span>
            </div>
        </div>
        <button
          class="btn d-flex justify-content-center bg-green w-100 p-3 btn text-white font-bold"
          value=""
          @click="avaliar"
          title="Salvar atividades">
          AVALIAR MENTOR E FINALIZAR CICLO DE FORMAÇÃO
        </button>
      </div>
    </div>
  </v-layout>
</template>
<script>
/* =============
*   Home screen
*  =============
*/
import VLayout from '@/layouts/Default';
import starMiddleIcon from '@/static/icon/starMiddle.svg';
import timerIcon from '@/static/icon/timer.svg';
import StarRating from 'vue-star-rating';
import Proxy from '@/proxies/Proxy';
import { required, minValue } from 'vuelidate/lib/validators';

export default {
  name: 'login',
  data() {
    return {
      model: {
        fields: {
          user_name: {
            stringValue: 'Jim Gordon',
          },
          comment: {
            stringValue: '',
          },
          value: {
            integerValue: 0,
          },
        },
      },
      clicked: false,
    };
  },
  validations: {
    model: {
      fields: {
        comment: {
          stringValue: {
            required,
          },
        },
        value: {
          integerValue: {
            minValue: minValue(1),
          },
        },
      },
    },
  },
  methods: {
    avaliar() {
      const self = this;
      console.warn(self.$v);
      if (!self.$v.model.$invalid && !self.$v.model.$error) {
        const proxy = new Proxy(
          'https://firestore.googleapis.com/v1beta1/projects/teste-dev-api/databases/%28default%29/documents/rates/');
        const resposta = proxy.post(self.model);
        resposta
          .then(() => {
            window.alert('Avaliação realizada com sucesso!');
          })
          .catch(() => {
            window.alert('Falha no envio da avaliação');
          });
      } else {
        window.confirm('É necessário dar uma nota e fazer um comentário para concluir sua avaliação');
      }
    },
  },
  components: {
    VLayout,
    starMiddleIcon,
    timerIcon,
    StarRating,
  },
};
</script>
