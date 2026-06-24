import { describe, expect, it } from "vitest";
import { getAdjacentProjects, getProject, projects } from "./projects";

describe("project data", () => {
  it("contains the six curated projects with unique slugs", () => {
    expect(projects).toHaveLength(6);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(6);
  });

  it("provides complete case study data and local optimized assets", () => {
    for (const project of projects) {
      expect(project.sections.length).toBeGreaterThanOrEqual(3);
      expect(project.galleryImages.length).toBeGreaterThanOrEqual(9);
      expect(project.heroImage.base).toMatch(/^\/assets\/projects\//);
      expect(project.sections.every((section) => section.assets.length > 0)).toBe(true);
    }
  });

  it("does not expose excluded document context", () => {
    const text = JSON.stringify(projects);
    expect(text).not.toMatch(/论文|毕设|毕业设计/);
  });

  it("looks up projects and wraps adjacent navigation", () => {
    expect(getProject("ridgeline")?.title).toBe("RIDGELINE");
    const first = projects[0];
    const adjacent = getAdjacentProjects(first.slug);
    expect(adjacent.previous.slug).toBe(projects[projects.length - 1].slug);
    expect(adjacent.next.slug).toBe(projects[1].slug);
  });
});
