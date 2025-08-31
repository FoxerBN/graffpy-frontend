export function getLast7Days(): string[] {
  const days: string[] = [];
  const today = new Date();

  for (let i = 7; i >= 1; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    d.setHours(0, 0, 0, 0);
    days.push(
      d.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit' })
    );
  }

  return days;
}
