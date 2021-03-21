const isValidDate = (dateString) => {
  const rules = ['([0-2][0-9]|(3)[0-1])', '((0)[0-9]|(1)[0-2])', '(\\d{4})'], separators = '([-/.])';
  const RootRule = '^(' + rules.join(separators) + ')|(' + rules.reverse().join(separators) + ')$';
  const regex = new RegExp(RootRule, 'i');
  return regex.test(dateString);
};

module.exports = isValidDate;

