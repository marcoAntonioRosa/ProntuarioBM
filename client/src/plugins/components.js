import Vue from 'vue';
import Offset from '@/components/helper/Offset';
import Card from '@/components/material/Card';
import ChartCard from '@/components/material/ChartCard';
import Notification from '@/components/material/Notification';
import StatsCard from '@/components/material/StatsCard';

import ParametrosExame from '@/components/helper/ParametrosExame';
import Snackbar from '@/components/helper/Snackbar';

import NovaPessoa from '@/components/material/NovaPessoa';
import EditPessoa from '@/components/material/EditPessoa';

import ImportarResultadosExames from '@/components/material/ImportarResultadosExames';

import NovoResultadoExames from '@/components/material/NovoResultadoExames';
import TabelaResultadoExameParametros from '@/components/material/TabelaResultadoExameParametros';

import ImportaPessoas from '@/components/material/ImportaPessoas';

import ExibicaoParametroExame from '@/components/material/ExibicaoParametrosExame';
import ExibicaoResultadosExames from '@/components/material/ExibicaoResultadosExames';

Vue.component('exibicao-resultados-exames', ExibicaoResultadosExames);
Vue.component('exibicao-parametros-exame', ExibicaoParametroExame);
Vue.component('importa-pessoas', ImportaPessoas);
Vue.component('importar-resultados-exames', ImportarResultadosExames);
Vue.component('tabela-resultado-exame-parametros', TabelaResultadoExameParametros);
Vue.component('novo-resultado-exame', NovoResultadoExames);
Vue.component('nova-pessoa', NovaPessoa);
Vue.component('editar-pessoa', EditPessoa);
Vue.component('parametros-exame-dialog', ParametrosExame);
Vue.component('snackbar', Snackbar);

Vue.component(Offset.name, Offset);
Vue.component(Card.name, Card);
Vue.component(ChartCard.name, ChartCard);
Vue.component(Notification.name, Notification);
Vue.component(StatsCard.name, StatsCard);
