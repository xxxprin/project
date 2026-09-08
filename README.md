# Наши планы

1. Фильтрация по банкам:

- учесть, что она общая для всех разделов (например, такси и ресторны)
- при этом имеет смысл показывать только те банки, для которых есть есть предложения этой опции
- учитывать фильтр по деньгам (если бан не попадае под условие, тоже нет смысла показывать)

2. Переносим фильтры в redux (redux-toolkit)

- фильтрация банки / капитал -- отдельный редьюсер
- фильтры каршеринг/такси/... + сортировка -- редьюсер страницы такси
- фильтры ресторанов

3. Роутинг

- localhost/premium/banks
- localhost/premium/banks/vtb
- localhost/premium/banks/sber
- localhost/premium/taxi ←←←
- localhost/premium/taxi/vtb
- localhost/premium/taxi/sber

## SSR

- хранить в куках фильтры
- хранить в куках регион + инициализировать регион на бэке на основе айпи-адреса

/domain
/premium
/modules
/taxi
/components
/domain
/redux
taxiSlice.ts

domain → api → redux/state → utils → component

// тесты
// filteredTaxiRows
// hasRequirementKey
// getServiceName
// getLocation
// getSliderValue
// getBalance
// formatTaxi
// formatRequirments
// formatOneRequirment
// formatMoney
