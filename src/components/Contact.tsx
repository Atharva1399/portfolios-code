import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { profile } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Add your name (at least 2 characters).' }),
  email: z.string().email({ message: 'That email doesn’t look right. Check for typos.' }),
  subject: z.string().min(5, { message: 'Give the subject at least 5 characters.' }),
  message: z.string().min(10, { message: 'Say a little more: at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const fields: { name: keyof FormValues; label: string; placeholder: string; type?: string }[] = [
  { name: 'name', label: 'Your name', placeholder: 'Ada Lovelace' },
  { name: 'email', label: 'Email', placeholder: 'you@domain.dev', type: 'email' },
  { name: 'subject', label: 'Subject', placeholder: 'Let’s build a RAG pipeline' },
];

const inputCls =
  'w-full rounded-md border-2 border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/80 transition-colors focus:border-blue focus:outline-none';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headRef, headX] = useParallax<HTMLHeadingElement>(-70);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_lm5nh8s',
        'template_x620kes',
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        'kauws2DH9dLWoxt6b',
      );
      toast({ title: 'Message sent', description: 'Thanks! I’ll get back to you soon.' });
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        variant: 'destructive',
        title: 'Message didn’t send',
        description: `Try again in a minute, or email me directly at ${profile.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: 'Atharva1399', href: profile.github },
    { label: 'LinkedIn', value: 'Atharva Gaikwad', href: profile.linkedin },
    ...(profile.medium ? [{ label: 'Medium', value: 'Writing on AI & blockchain', href: profile.medium }] : []),
  ];

  return (
    <section id="contact" className="on-blue overflow-x-clip bg-blue pt-20 text-white md:pt-28">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <motion.h2 ref={headRef} style={{ x: headX }} className="display text-[clamp(2.4rem,10.5vw,9.5rem)]">
          Let’s build
          <br />
          something
        </motion.h2>

        <div className="mt-14 grid gap-12 pb-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="max-w-[44ch] text-xl leading-relaxed">
              Working on something with LLMs, agents or RAG? Need a hackathon teammate, or a workshop for your
              community? My inbox is open.
            </p>
            <ul className="mt-10 border-t-2 border-white">
              {links.map((l) => (
                <li key={l.label} className="border-b border-white/40">
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="type-label block text-blue-soft">{l.label}</span>
                      <span className="mt-1 block break-all text-lg font-semibold sm:text-xl">{l.value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The form sits on a white sheet with a sticker edge */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-xl bg-white p-6 text-ink shadow-[0_0_0_6px_hsl(var(--blue-deep)),0_24px_50px_-20px_rgba(0,0,0,0.5)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className={cn('block', f.name === 'subject' && 'sm:col-span-2')}>
                  <span className="mb-1.5 block text-sm font-semibold">{f.label}</span>
                  <input
                    type={f.type ?? 'text'}
                    placeholder={f.placeholder}
                    aria-invalid={!!errors[f.name]}
                    className={cn(inputCls, errors[f.name] && 'border-destructive')}
                    {...register(f.name)}
                  />
                  {errors[f.name] && (
                    <span role="alert" className="mt-1.5 block text-sm text-destructive">
                      {errors[f.name]?.message}
                    </span>
                  )}
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold">Message</span>
                <textarea
                  rows={5}
                  placeholder="What are you building?"
                  aria-invalid={!!errors.message}
                  className={cn(inputCls, 'resize-y', errors.message && 'border-destructive')}
                  {...register('message')}
                />
                {errors.message && (
                  <span role="alert" className="mt-1.5 block text-sm text-destructive">
                    {errors.message.message}
                  </span>
                )}
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-deep disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                'Send message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
