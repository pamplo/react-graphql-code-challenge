const genders = {
  male: 'Masculino',
  female: 'Feminino',
  hermaphrodite: 'Hermafrodita',
  'n/a': 'Não Aplicável',
  none: 'Não Cadastrado',
};

const getGenderTranslated = gender => genders[gender] || '-';

export { genders, getGenderTranslated };
